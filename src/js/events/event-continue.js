/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context) {
        var promise = context.actions['action-random-question-2']();
        context.runningActionsByContainer['view-container-single-player-result'].push(promise);
        promise.then(function (result) {
            context.runningActionsByContainer['view-container-single-player-result'].splice(
                context.runningActionsByContainer['view-container-single-player-result'].indexOf(promise),
                1
            );
            if (result.event) {
                context.events[result.event](context, result.data);
            }
        });
    };
};
