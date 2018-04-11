/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-single-player']) {
            context.top.active('view-container-single-player');
            context.vms['view-container-single-player'].init({mask: 'details-question'});
        }
        data = data || {};
        var packet = {
            'id' : data['question'],
        };
        context.vms['details-question'].init({input: packet});
    };
};
