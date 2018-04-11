/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['action-load-settings']();
        context.runningActionsByContainer['view-container-home'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-home'].splice(
                context.runningActionsByContainer['view-container-home'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
