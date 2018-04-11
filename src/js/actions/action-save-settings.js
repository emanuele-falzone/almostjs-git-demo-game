/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird'),
    i18nextko = require('i18next-ko');

function Action() {

}

Action.prototype.run = function (parameters, solve) {
    localStorage.setItem("settings.language", parameters['language']);
    i18nextko.setLanguage(parameters['language']);
    solve({
        event: 'event-save-settings-done',
        data: {
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
