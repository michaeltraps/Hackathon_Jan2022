let siteLog = {};

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({siteLog});
    console.log(`Site log created: ${siteLog}`);
  });