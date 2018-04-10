/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-card']) {
            context.top.active('view-container-card');
            context.vms['view-container-card'].init({mask: 'details-question-qr'});
        }
        data = data || {};
        var packet = {
            'id' : data['question'],
        };
        context.vms['details-question-qr'].init({input: packet});
    };
};
