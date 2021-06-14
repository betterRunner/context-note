chrome.action.onClicked.addListener(tab => {
    if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
    }
});
