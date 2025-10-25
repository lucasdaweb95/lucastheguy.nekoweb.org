// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-INDEX ===
// this file builds the list of sites in the ring for displaying on your index page

document.addEventListener("DOMContentLoaded", () => {
  var tag = document.getElementById('index');
  if (!tag) return; // safeguard in case element doesn't exist

  var regex = /^https:\/\/|\/$/g; // strips https:// and trailing slash

  // === USE THE CENTRALIZED FETCH ===
  // instead of fetching the JSON again, wait for the promise from onionring-variables.js
  if (!window.webringDataPromise) {
    console.error("webringDataPromise is not defined. Make sure onionring-variables.js is loaded first.");
    return;
  }

  window.webringDataPromise.then(sites => {
    var list = "";

    for (var i = 0; i < sites.length; i++) {
      // build each list item and strip protocol/trailing slash for display
      list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
    }

    // insert the full list into the index container
    tag.insertAdjacentHTML('afterbegin', `<ul>${list}</ul>`);
  }).catch(err => {
    console.error("Failed to build webring index:", err);
  });
});
