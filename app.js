import {
    MDCRipple
} from '@material/ripple';

var s2a = "https://www.planning.iut-tlse3.fr/info/g8669.xml";

$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(s2a) + '&callback=?', function(data) {
    init(data.contents);
    //console.log(isMobileDevice());
});

var init = function(xml) {
    //console.log(xml);

    var h = document.createElement('xml');
    h.innerHTML = xml;

    var rawWeek = 'NNNNNNNNNNNNNNNNNNNNNNNNNNYNNNNNNNNNNNNNNNNNNNNNNNNN';

    var rawWeeks = h.getElementsByTagName("rawweeks");

    //console.log(rawWeeks);

    var dayId = 3;

    for (var i = 0; i < rawWeeks.length; i++) {
        if (rawWeeks[i].innerHTML == rawWeek && rawWeeks[i].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == dayId) {
            document.getElementById('day').innerHTML += '<div class="mdc-layout-grid__inner" style="background-color: rgb(255, 255, 255);">' + rawWeeks[i].nextElementSibling.innerHTML + '</div>';
        }
    }

    // var i;
    // for (i = 0; i < 6; i++) {
    //     document.getElementById(days[0]).innerHTML += '<div class="class" style="background-color: rgb(255, 255, 255);"> Magic Law - 8:00 - 9:30 </div>'
    // }
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
