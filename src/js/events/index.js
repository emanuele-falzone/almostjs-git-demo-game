/*jslint node: true, nomen: true */
"use strict";

exports.createEvents = function (options) {
    return {
        //comment-to-help-git
        'event-continue': require('./event-continue').createEvent(options),
        //comment-to-help-git
        'event-decode-a-card': require('./event-decode-a-card').createEvent(options),
        //comment-to-help-git
        'event-end': require('./event-end').createEvent(options),
        //comment-to-help-git
        'event-end-qr': require('./event-end-qr').createEvent(options),
        //comment-to-help-git
        'event-random-question-1-done': require('./event-random-question-1-done').createEvent(options),
        //comment-to-help-git
        'event-random-question-2-done': require('./event-random-question-2-done').createEvent(options),
        //comment-to-help-git
        'event-read-card-aborted': require('./event-read-card-aborted').createEvent(options),
        //comment-to-help-git
        'event-read-card-done-qr': require('./event-read-card-done-qr').createEvent(options),
        //comment-to-help-git
        'event-single-player': require('./event-single-player').createEvent(options),
        //comment-to-help-git
        'selected-answer': require('./selected-answer').createEvent(options),
        //comment-to-help-git
        'selected-answer-qr': require('./selected-answer-qr').createEvent(options),
        //comment-to-help-git
    };
};
