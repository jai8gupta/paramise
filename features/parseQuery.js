/**
 * outputs { name: 'John', age: '30' } for input ?name=John&age=30
 * @param {string} paramString 
 * @returns Object
 */

const parseQuery = (paramString) => {
    if (!paramString) return {};
    if (paramString.startsWith("?")) {
        paramString = paramString.substring(1, paramString.length);
    }
    let queryArray = paramString.split("&");
    let paramObj = queryArray.reduce((previousValue, currentValue) => {
        let keyValueArray = currentValue.split("=");
        if (keyValueArray?.[0]) {
            let valueToAdd = previousValue?.[keyValueArray[0]] ? Array.isArray(previousValue?.[keyValueArray[0]]) ? [...previousValue?.[keyValueArray[0]], keyValueArray[1]] : [previousValue?.[keyValueArray[0]], keyValueArray[1]] : keyValueArray[1];
            previousValue = {...previousValue, [keyValueArray[0]] : valueToAdd};
        }
        return previousValue;
    }, {});     
    return paramObj;
}

export default parseQuery;