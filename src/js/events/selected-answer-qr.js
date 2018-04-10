/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-card-result-qr']) {
            context.top.active('view-container-card-result-qr');
            context.vms['view-container-card-result-qr'].init({mask: 'details-result-qr'});
        }
        data = data || {};
        var packet = {
            'id' : data['id'],
        };
        context.vms['details-result-qr'].init({input: packet});
    };
};
