import buildQuery from "./buildQuery.js";
import parseQuery from "./parseQuery.js"
/**
 * Remove specific parameters from the query string by Key
 * @param {string} paramString
 * @param {Array} deleteParams
 * @returns string
 */


const removeQuery = (paramString, deleteParams) => {
    let currentObj = parseQuery(paramString);
    deleteParams.forEach((param) => delete currentObj?.[param]);
    return buildQuery(currentObj);
}

export default removeQuery;
