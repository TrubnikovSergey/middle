"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockData_1 = require("./mockData");
const normalizeData = (unnormalizedData) => {
    const byId = unnormalizedData.reduce((acc, item) => (Object.assign(Object.assign({}, acc), { [item.id]: item })), {});
    const allIds = unnormalizedData.map((item) => item.id);
    const result = { byId, allIds };
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
