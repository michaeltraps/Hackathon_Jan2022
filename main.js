let siteLog = {};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({siteLog});
    console.log(`Site log created: ${siteLog}`);
  });

chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log(activeInfo.tabId);
    console.log(activeInfo.url);
    console.log(activeInfo);
    console.log(window.location.toString());
});