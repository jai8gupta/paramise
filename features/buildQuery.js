/**
 * @template T
 * @template K
 * @param {Record<K, T>} parameterizedObject 
 * @returns string
 */

const buildQuery = (parameterizedObject) => {
    let str = "?";
    Object.keys(parameterizedObject).forEach((entry, index) => {
        str += index > 0 ? "&" : "";
        str+=entry+"="+parameterizedObject[entry];
    })
    return str.length == 1 ? "" : str;    
}

export default buildQuery;