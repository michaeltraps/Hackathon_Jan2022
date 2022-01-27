

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.getElementsByClassName('main-table')[0];
    parent.innerHTML = "";
    // Loop through each element in our object, and insert a row/value
    chrome.storage.sync.get('siteLog', function (data) {
        currentData = data['siteLog'];
        for (const site of Object.keys(currentData)) {
            let newItem = document.createElement('div');
            newItem.setAttribute('class', 'site-row');
            let minutes = currentData[site] / 60000;
            let remainder = currentData[site] % 60000;
            let seconds = remainder / 1000;
            newItem.innerHTML = `<div>${site}</div><div>${minutes}:${seconds}</div>`;
            parent.appendChild(newItem);
        }
    });


  });