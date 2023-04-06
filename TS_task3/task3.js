"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var mockData_1 = require("./mockData");
var normalizeData = function (unnormalizedData) {
    var byId = unnormalizedData.reduce(function (acc, item) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[item.id] = item, _a)));
    }, {});
    var allIds = unnormalizedData.map(function (item) { return item.id; });
    var result = { byId: byId, allIds: allIds };
    return result;
};
console.log(normalizeData(mockData_1.posts));
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
