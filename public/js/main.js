const DAY_MINUTES = 1440;
const DAY_SECONDS = 86400;
const DAY_MILLISECONDS = DAY_SECONDS * 1000;
const YEAR_MINUTES = DAY_MINUTES * 365;
const YEAR_SECONDS = DAY_SECONDS * 365;
const YEAR_MILLISECONDS = DAY_MILLISECONDS * 365;

function log(msg) {
    console.log(msg);
}

function highlightText(id, hovering) {
    let element = document.getElementById(id);
    element.style.color = hovering ? '#69ffe2' : '#ffffff';
}