/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        data = data || {};
        var packet = {
                'language' : data['language'],
            },
            promise = context.actions['action-save-settings']({filters: packet});
        context.runningActionsByContainer['view-container-settings'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-settings'].splice(
                context.runningActionsByContainer['view-container-settings'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
