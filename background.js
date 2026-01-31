// Automatically open options page on install
chrome.runtime.onInstalled.addListener(async () => {
    const result = await chrome.storage.sync.get('gemini_key');

    if(!result.gemini_key){
        chrome.tabs.create({ url: "options.html" });
    }
});

// Handle icon click logic
chrome.action.onClicked.addListener(async (tab) => {
    await chrome.sidePanel.open({ tabId: tab.id });
});