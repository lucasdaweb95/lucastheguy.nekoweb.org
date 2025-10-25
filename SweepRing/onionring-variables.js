// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
// this file contains the stuff you edit to set up your specific webring

// the name of the ring
var ringName = 'SweepRing';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value! */
var ringID = 'SweepRing';

// should the widget include a link to an index page?
var useIndex = true;
// the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://lucastheguy.nekoweb.org/sweepring';

// should the widget include a random button?
var useRandom = true;

// === FETCH THE LIST OF SITES ===
// the full URLs of all the sites in the ring
// this fetch is asynchronous, so we expose a promise that other scripts can wait on
window.webringDataPromise = fetch("https://raw.githubusercontent.com/lucasdaweb95/SweepRing/main/ringlist.json")
  .then(response => response.json())
  .then(data => {
    // if the fetched data is an array, use it directly; otherwise, use data.sites
    return Array.isArray(data) ? data : data.sites;
  })
  .catch(err => {
    console.error("Failed to load webring data:", err);
    return []; // fallback to empty array so widgets won't break
  });
