

function insertDataSQL(data,tableName) {
    var keys = Array();
    intero = Array(); 
    for (const key in data) {
        intero.push('?');
        keys.push(key);
    }
    var sql = "INSERT INTO " + tableName + " (" + keys.join(', ') + ") VALUES ("+intero.join(', ')+")";
    return sql;
}

function updateDataSQL(data,tableName) {
    var keys = Object.keys(data);
    var lastElement = keys.pop(); 
    lastElement += " = ? " ;
    
    for (const key in keys) {
        keys[key] = keys[key]+' = ?';
    }
    var sql = "UPDATE " + tableName + " SET " + keys.join(', ') + " WHERE "+ lastElement;
    return sql;
}

function getAllDataSQL(tableName, otherFields="") {
    var sql = "SELECT * "+otherFields+" FROM " + tableName;
    return sql;
}

module.exports = { insertDataSQL, updateDataSQL, getAllDataSQL };