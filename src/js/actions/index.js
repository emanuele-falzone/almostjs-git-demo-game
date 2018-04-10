/*jslint node: true, nomen: true */
"use strict";

exports.createActions = function (options) {
    return {
        //comment-to-help-git
        'action-read-card': require('./action-read-card').createAction(options),
        //comment-to-help-git
    };
};
