/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        //comment-to-help-git
        'action-random-question-1': require('./action-random-question-1').createAction(options),
        //comment-to-help-git
        'action-random-question-2': require('./action-random-question-2').createAction(options),
        //comment-to-help-git
        'action-read-card': require('./action-read-card').createAction(options),
        //comment-to-help-git
    };
};
