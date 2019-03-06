import {
    MDCTopAppBar
} from '@material/top-app-bar/index';

import {
    MDCRipple
} from '@material/ripple';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    return new MDCRipple(el);
});

var s2a = "https://www.planning.iut-tlse3.fr/info/g8669.html";

$.get(s2a)
    .done(function(data) {
        ($('body').append(data.getElementsByTagName('results')[0].firstChild.outerHTML));
    });

var days = ["monday", "tuesday", "wednesday", "thursday", "friday"]

var d;
for (d = 0; d < 5; d++) {
    var i;
    for (i = 0; i < 6; i++) {

        document.getElementById(days[d]).innerHTML += '<div style="background-color: rgb(255, 255, 255);"> Magic Law - 8:00 - 9:30 </div>'
    }
}
