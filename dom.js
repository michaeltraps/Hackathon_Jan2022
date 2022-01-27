

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.getElementByID('main-table');
    parent.innerHTML = "";
    // Loop through each element in our object, and insert a row/value
    chrome.storage.sync.get('siteLog', function (data) {
        currentData = data['siteLog'];

        for (const site of currentData) {
            let newItem = document.createElement('div');
            newItem.setAttribute('class', 'site-row');
            newItem.innerHTML(`<div>${site}</div><div>${currentData[site]}</div>`);
            parent.appendChild(newItem);
        }

        
    });


  });