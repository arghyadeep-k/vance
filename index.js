module.exports = function vance(str, varList) {
    let data = null;
    for(var x in varList) {    
        data = str.replace('{' + x + '}', varList[x]);
    }    
    return data;
}