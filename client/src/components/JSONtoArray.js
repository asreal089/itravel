function JSONtoArray(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    
    return result;
}

export default JSONtoArray;