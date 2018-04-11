/*jslint node: true, nomen: true */
"use strict";

var Promise = require('bluebird'),
    $ = require('jquery');

function Action(options) {
    this.collection = options.repositories.questions;
}

Action.prototype.run = function (parameters, solve) {

    var self = this;

    function failed() {
        solve({
            event: 'event-read-card-aborted',
            data: {}
        });
    }

    function success() {
        self.collection.random().then(function (result) {
            solve({
                event: 'event-read-card-done-qr',
                data: {
                    'question': String(result.id),
                }
            });
        });
    }

    QRScanner.prepare(function (err, status) {
        if (err) {
            Materialize.toast('Access to camera denied', 2000);
            return failed();
        }

        var body = $(document.body);

        function teardown() {
            QRScanner.destroy();
            document.removeEventListener("backbutton", back, false);
            body.show();
        }

        function back() {
            teardown();
            failed();
        }
        document.addEventListener("backbutton", back, false);
        body.hide();
        QRScanner.show(function (status) {
            QRScanner.scan(function (err, contents) {
                teardown();
                if (err) {
                    Materialize.toast('Error scanning Card', 2000);
                    return failed();
                }
                success();
            });
        });
    });
};

exports.createAction = function (options) {
    var action = new Action(options);
    return function (data) {
        return new Promise(function (solve, reject, onCancel) {
            var parameters = (data && data.filters) || {};
            action.run(parameters, solve, onCancel);
        });
    };
};
