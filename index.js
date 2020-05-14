module.exports = function vanes(str, varList) {    
    for(var x in varList) {    
        str = str.replace('{' + x + '}', varList[x]);        
    }    
    return str;
}
