"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mockData_json_1 = __importDefault(require("./mockData.json"));
const normalizeData = (unnormalizedData) => {
    const byId = unnormalizedData.reduce((acc, item) => (Object.assign(Object.assign({}, acc), { [item.id]: item })), {});
    const allIds = unnormalizedData.map((item) => item.id);
    const result = { byId, allIds };
    return result;
};
console.log(normalizeData(mockData_json_1.default));
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
