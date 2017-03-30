"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ParsePushService_1 = require("./ParsePushService");
var PushServiceBuilder = (function () {
    function PushServiceBuilder(_config) {
        this.pushConfig = __assign({}, _config);
        this.pushService = new ParsePushService_1.ParsePushService(this.pushConfig);
    }
    PushServiceBuilder.prototype.sendPushToTargetDevices = function (registrationIds, alert) {
        this.pushService.sendPushToTargetDevices(registrationIds, alert);
    };
    return PushServiceBuilder;
}());
exports.PushServiceBuilder = PushServiceBuilder;
