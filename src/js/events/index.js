/*jslint node: true, nomen: true */
"use strict";

exports.createEvents = function (options) {
    return {
        //comment-to-help-git
        'event-decode-a-card': require('./event-decode-a-card').createEvent(options),
        //comment-to-help-git
        'event-end-qr': require('./event-end-qr').createEvent(options),
        //comment-to-help-git
        'event-read-card-aborted': require('./event-read-card-aborted').createEvent(options),
        //comment-to-help-git
        'event-read-card-done-qr': require('./event-read-card-done-qr').createEvent(options),
        //comment-to-help-git
        'selected-answer-qr': require('./selected-answer-qr').createEvent(options),
        //comment-to-help-git
    };
};
