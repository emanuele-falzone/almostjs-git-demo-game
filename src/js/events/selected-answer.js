/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-single-player-result']) {
            context.top.active('view-container-single-player-result');
            context.vms['view-container-single-player-result'].init({mask: 'details-result'});
        }
        data = data || {};
        var packet = {
            'id' : data['id'],
        };
        context.vms['details-result'].init({input: packet});
    };
};
