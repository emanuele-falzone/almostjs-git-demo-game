/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    return {
        //comment-to-help-git
        'answers': require('./answers').createRepository(options),
        //comment-to-help-git
        'questions': require('./questions').createRepository(options),
        //comment-to-help-git
    };
};
