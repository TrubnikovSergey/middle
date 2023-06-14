
import posts from "./mockData.json";

import { Post, ById, Normalize } from "./interfaces";

const normalizeData = (unnormalizedData: Post[]): Normalize => {
  const byId: ById = unnormalizedData.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  const allIds: string[] = unnormalizedData.map((item) => item.id);
  const result: Normalize = { byId, allIds };

  return result;
};

console.log(normalizeData(posts));
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
