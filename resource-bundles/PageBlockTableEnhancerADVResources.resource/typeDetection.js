jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "num-html-pre": function (a) {
        var x = String(a).replace(/<[\s\S]*?>/g, "");
        return parseFloat(x);
    },

    "num-html-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "num-html-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});

jQuery.fn.dataTableExt.aTypes.unshift(function (sData) {
    sData = cleanDataX(sData);

    var sValidFirstChars = "0123456789-";
    var sValidChars = "0123456789.";
    var Char;
    var bDecimal = false;

    /* Check for a valid first char (no period and allow negatives) */
    Char = sData.charAt(0);
    if (sValidFirstChars.indexOf(Char) == -1) {
        return null;
    }

    /* Check all the other characters are valid */
    for (var i = 1; i < sData.length; i++) {
        Char = sData.charAt(i);
        if (sValidChars.indexOf(Char) == -1) {
            return null;
        }

        /* Only allowed one decimal place... */
        if (Char == ".") {
            if (bDecimal) {
                return null;
            }
            bDecimal = true;
        }
    }

    return 'num-html';
});

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "currency-pre": function (a) {
        a = (a === "-") ? 0 : a.replace(/[^\d\-\.]/g, "");
        return parseFloat(a);
    },

    "currency-asc": function (a, b) {
        return a - b;
    },

    "currency-desc": function (a, b) {
        return b - a;
    }
});

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "currency-pre": function (a) {
        a = (a === "-") ? 0 : a.replace(/[^\d\-\.]/g, "");
        return parseFloat(a);
    },

    "currency-asc": function (a, b) {
        return a - b;
    },

    "currency-desc": function (a, b) {
        return b - a;
    }
});

jQuery.extend(jQuery.fn.dataTableExt.oSort, {

    "datetime-us-pre": function (a) {

        if (a) {
            var b = a.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4}) (\d{1,2}):(\d{1,2}) (am|pm|AM|PM|Am|Pm)/),

                month = b[1],
                day = b[2],
                year = b[3],
                hour = b[4],
                min = b[5],
                ap = b[6];

            if (hour == '12') hour = '0';
            if (ap == 'pm') hour = parseInt(hour, 10) + 12;

            if (year.length == 2) {
                if (parseInt(year, 10) < 70) year = '20' + year;
                else year = '19' + year;
            }
            if (month.length == 1) month = '0' + month;
            if (day.length == 1) day = '0' + day;
            if (hour.length == 1) hour = '0' + hour;
            if (min.length == 1) min = '0' + min;

            var tt = year + month + day + hour + min;
            return tt;
        }
        return -1;
    },
    "datetime-us-asc": function (a, b) {
        return a - b;
    },

    "datetime-us-desc": function (a, b) {
        return b - a;
    }
});

jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {

        if (sData !== null && sData.match(/\d{1,2}\/\d{1,2}\/\d{2,4} \d{1,2}:\d{1,2} (am|pm|AM|PM|Am|Pm)/)) {

            return 'datetime-us';
        }
        return null;
    }
);


jQuery.extend(jQuery.fn.dataTableExt.oSort, {

    "date-us-pre": function (a) {

        if (a) {
            var b = a.match(/(\d{1,2})\/(\d{1,2})\/(\d{2,4})/),

                month = b[1],
                day = b[2],
                year = b[3];



            if (year.length == 2) {
                if (parseInt(year, 10) < 70) year = '20' + year;
                else year = '19' + year;
            }
            if (month.length == 1) month = '0' + month;
            if (day.length == 1) day = '0' + day;

            var tt = year + month + day;
            return tt;
        }
        return -1;
    },
    "date-us-asc": function (a, b) {
        return a - b;
    },

    "date-us-desc": function (a, b) {
        return b - a;
    }
});

jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {
        sData =cleanDataX(sData);
        if (sData !== null && sData.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/)) {
            return 'date-us';
        }
        return null;
    }
);

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function (sData) {
        sData =cleanDataX(sData);

        var ukDatea = sData.split('/');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },

    "date-uk-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "date-uk-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});

jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {
        sData = cleanDataX(sData);
        console.log('date-uk',sData,sData.match(/^([1-9]|[12][0-9]|3[01])\/([1-9]|1[012])\/(19|20|21)\d\d$/),!sData);
        if (sData !== null && sData.match(/^([1-9]|[12][0-9]|3[01])\/([1-9]|1[012])\/(19|20|21)\d\d$/)) {
            return 'date-uk';
        }
        return null;
    }
);

function cleanDataX(sData){
    if(sData)
        sData = (typeof sData.replace == 'function' ? sData.replace(/<[\s\S]*?>/g, "") : sData);
    return sData
}