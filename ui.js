// select UI elements
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const statusDiv = document.getElementById('status');

// Function to add a message to the screen
function appendMessage(role, text){
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}`;
    msgDiv.innerText = text;
    chatContainer.appendChild(msgDiv);

    // Auto-scroll to the bottom so you see new messages
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle the "Send action"
async function handleSend() {
    const text = userInput.value.trim();
    if(!text) return;

    const storage = await chrome.storage.sync.get('gemini_key');
    const apiKey = storage.gemini_key;

    if(!apiKey){
        chrome.tabs.create({ url: "options.html" });
        return;
    }

    // Show user's message
    appendMessage('user', text);
    userInput.value = "";             // Clear the input box

    // Disable button while "AI" is thinking
    sendBtn.disabled = true;
    statusDiv.innerText = "AI is thinking...";

    // Prepare the API request
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: text }] }]
            })
        });

        const data = await response.json();
        const result = data.candidates[0].content.parts[0].text;

        if(result){
            appendMessage("ai", result);
        }
        else{
            throw new Error(data.error?.message || "Check your API key or usage limits");
        }
    }
    catch(error){
        appendMessage("ai", "System Error: " + error.message);
        statusDiv.innerText = "Error";
    }

    sendBtn.disabled = false;
    statusDiv.innerText  = "Ready";
}

// Listen for the button click
sendBtn.addEventListener('click', handleSend);

// Also allow pressing "Enter" to send
userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
        handleSend();
});