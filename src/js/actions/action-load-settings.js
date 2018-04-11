/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action() {

}

Action.prototype.run = function (parameters, solve) {
    solve({
        event: 'event-load-settings-done',
        data: {
            'language': localStorage.getItem("settings.language")
        }
    });
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
