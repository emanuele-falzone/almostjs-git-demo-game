/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout'),
    $ = require('jquery'),
    repositories = require('./repositories'),
    controls = require('./controls'),
    events = require('./events'),
    actions = require('./actions'),
    Promise = require('bluebird'),
    resourceBundle = require('./i18'),
    i18nextko = require('i18next-ko');

Promise.config({cancellation: true});

controls.register();

function ApplicationViewModel() {
    var repos = repositories.createRepositories({});
    this.context = {
        repositories: repos,
        events: events.createEvents({}),
        actions: actions.createActions({repositories: repos}),
        vms: {},
        runningActionsByContainer: {}
    };
}

if (localStorage.getItem("settings.language") === null) {
    var lng = (navigator.language || "en").substring(0, 2);
    if (["it","en"].includes(lng)) {
        localStorage.setItem("settings.language", lng);
    } else {
        localStorage.setItem("settings.language", "en");
    }
}

i18nextko.init(resourceBundle, localStorage.getItem("settings.language"), ko);

var application = new ApplicationViewModel();

ko.applyBindings(application);

ko.bindingHandlers.clickDelay = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {

        function delayed() {
            return function() {
                var self = this,
                    args = arguments;
                if (this.correctness === true) {
                    $(element).addClass("correct");
                } else {
                    $(element).addClass("wrong");
                }

                navigator.vibrate(400);
                $(document.body).addClass("disabled");

                setTimeout(function () {
                    $(document.body).removeClass("disabled");
                    valueAccessor().apply(self, arguments);
                },1000);
            };
        }
        ko.bindingHandlers.click.init.call(this, element, delayed, allBindings, viewModel, bindingContext );
    }
};

application.context.top.init();
