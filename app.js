import {
    MDCRipple
} from '@material/ripple';

var s2a = "https://www.planning.iut-tlse3.fr/info/g8669.xml";

// $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(s2a) + '&callback=?', function(data) {
//     //init(data.contents);
//     //console.log(isMobileDevice());
// });

var initBool = false;

function init(xml) {
    //console.log(xml);

    var calendar = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var h = document.createElement('xml');
    h.innerHTML = xml;

    var rawWeek = 'NNNNNNNNNNNNNNNNNNNNNNNNNNYNNNNNNNNNNNNNNNNNNNNNNNNN';

    var rawWeeks = h.getElementsByTagName("rawweeks");

    //console.log(rawWeeks);

    var dayId = calendar.getDay() - 1;
    var hours = 0;

    for (var i = 0; i < rawWeeks.length; i++) {
        if (rawWeeks[i].innerHTML == rawWeek && rawWeeks[i].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML == dayId) {
            hours++;
            //console.log(rawWeeks[i].previousElementSibling.previousElementSibling);
            if (hours === 4) {
                document.getElementById('day').innerHTML += '<div class="mdc-layout-grid__inner" style="height: 12.5%; background-color: rgba(0, 0, 0, 0);"></div>';
            } else if (hours == 1) {
                document.getElementById('day').innerHTML += '<div class="mdc-layout-grid__inner" style="height: 6.25%; background-color: rgb(255, 255, 255);">' + weekday[calendar.getDay()] + '</div>';
            }

            var end = rawWeeks[i].previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

            if (end == '14:00' || end == '13:30' || end == '13:00') {
                document.getElementById('day').innerHTML += '<div class="mdc-layout-grid__inner" style="height: 6.25%; background-color: ' + color(rawWeeks[i].previousElementSibling.previousElementSibling.innerHTML) + ';">' + rawWeeks[i].nextElementSibling.innerHTML + '</div>';
            } else {
                document.getElementById('day').innerHTML += '<div class="mdc-layout-grid__inner" style="height: 12.5%; background-color: ' + color(rawWeeks[i].previousElementSibling.previousElementSibling.innerHTML) + ';">' + rawWeeks[i].nextElementSibling.innerHTML + '</div>';
            }
        }
    }

    initBool = true;
}

function color(category) {
    switch (category) {
        case 'TD':
            return 'rgb(255, 183, 77)';
        case 'TP':
            return 'rgb(255, 241, 118)';
        case 'CM':
            return 'rgb(12, 153, 247)';
        case 'cours de soutien':
            return 'rgb(0, 76, 63)';
        case 'Réunion':
            return 'rgb(128, 128, 128)';
        case 'Examen':
            return 'rgb(186, 104, 200)'
        default:
            return 'nope';
    }
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

init(loadFile('s2a.xml'));

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        result = xmlhttp.responseText;
    }
    return result;
}
