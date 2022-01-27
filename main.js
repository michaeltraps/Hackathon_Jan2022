let siteLog = {};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({siteLog});
    console.log(`Site log created: ${siteLog}`);
  });

chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var activeURL = activeTab.url.match("\/\/(.*)\/");
    console.log(activeURL);
  });
});

