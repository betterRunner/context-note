// trigger then clicking the extension logo
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
  }
});

// trigger when active tab switches
chrome.tabs.onActivated.addListener(function(activeInfo) {
  if (activeInfo?.tabId) {
    chrome.tabs.sendMessage(activeInfo?.tabId, { updateStorage: true });
  }
});
