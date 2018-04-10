/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout');

exports.register = function () {
    //comment-to-help-git
    require('./main-application').register();
    //comment-to-help-git
    require('./c-details-question-qr').register();
    //comment-to-help-git
    require('./c-details-result-qr').register();
    //comment-to-help-git
    require('./c-list-answers-qr').register();
    //comment-to-help-git
    require('./c-view-container-card').register();
    //comment-to-help-git
    require('./c-view-container-card-result-qr').register();
    //comment-to-help-git
    require('./c-view-container-home').register();
    //comment-to-help-git
};
