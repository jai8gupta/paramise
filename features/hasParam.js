
/**
 * Provide a quick utility to check if a parameter exists in the URL query string
 * @param {string} paramString 
 * @param {string} param 
 * @returns {boolean}
 */
const hasParam = (paramString, param) => paramString?.includes(param);

export default hasParam;