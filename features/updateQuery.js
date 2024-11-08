import buildQuery from "./buildQuery.js";
import parseQuery from "./parseQuery.js";
/** Easily add or update parameters in an existing URL:
 * @template K
 * @template T
 * @param {string} paramString
 * @param {Record<K, T>} addObj
 * @returns string
 */


const updateQuery = (paramString, addObj) => {
    let currentObj = parseQuery(paramString);
    Object.keys(addObj).forEach(key => currentObj[key] = addObj[key])    
    return buildQuery(currentObj);
} 




export default updateQuery;

