

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.getElementsByClassName('main-table')[0];
    parent.innerHTML = "";
    // Loop through each element in our object, and insert a row/value
    chrome.storage.sync.get('siteLog', function (data) {
        currentData = data['siteLog'];
        for (const site of Object.keys(currentData)) {
            let newItem = document.createElement('div');
            newItem.setAttribute('class', 'site-row');
            newItem.innerHTML = `<div>${site}</div><div>${currentData[site]}</div>`;
            parent.appendChild(newItem);
        }

        
    });


  });