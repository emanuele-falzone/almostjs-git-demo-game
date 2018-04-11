/*jslint node: true, nomen: true */
"use strict";

exports.createEvent = function () { // add "options" parameter if needed
    return function (context, data) {
        if (!context.vms['view-container-settings']) {
            context.top.active('view-container-settings');
            context.vms['view-container-settings'].init({mask: 'form-settings'});
        }
        data = data || {};
        var packet = {
            'language' : data['language'],
        };
        context.vms['form-settings'].init({input: packet});
    };
};
