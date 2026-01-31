// Wait untill the options page HTML is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Fetch the saved Gemini API Key from Chrome's synced storage
    chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
        if(geminiApiKey) 
            document.getElementById("api-key").value = geminiApiKey;
    });

    // handle to save API Key
    document.getElementById("save-button").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();
        if(!apiKey) return;

        chrome.storage.sync.set({ gemini_key: apiKey }, () => {
            document.getElementById("success-message").style.display = "block";
            setTimeout(() => window.close(), 1000);
        });
    });
});