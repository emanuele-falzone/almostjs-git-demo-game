/*jslint node: true, nomen: true */
"use strict";

var ko = require('knockout'),
    $ = require('jquery'),
    repositories = require('./repositories'),
    controls = require('./controls'),
    events = require('./events'),
    actions = require('./actions'),
    Promise = require('bluebird');

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

var application = new ApplicationViewModel();

ko.applyBindings(application);

ko.bindingHandlers.clickDelay = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        function delayed() {
            return function () {
                var self = this;
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
                }, 1000);
            };
        }
        ko.bindingHandlers.click.init.call(this, element, delayed, allBindings, viewModel, bindingContext);
    }
};

application.context.top.init();
