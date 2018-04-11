/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird');

function Action(options) {
    this.collection = options.repositories.questions;
}

Action.prototype.run = function (parameters, solve) {
    this.collection.random(localStorage.getItem("settings.language")).then(function(result){
        solve({
            event: 'event-random-question-1-done',
            data: {
                'question': String(result.id)
            }
        });
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
