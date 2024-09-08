/**
 * A simple utility class.
 * @constructor
 */
var Utils = function () {

    this.formatDate = function (calendarObject) {
        var time = calendarObject.getTimeInMillis();
        var date = new Date();
        date.setTime(time);
        var datestring = date.getFullYear() + "-" +
            ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
            ("0" + date.getDate()).slice(-2) + "-" +
            ("0" + date.getHours()).slice(-2) + ":" +
            ("0" + date.getMinutes()).slice(-2);

        return datestring;
    }

}
