// const { replacePunctuations } = require('./replace-punctuations');
const processRows = ({rows,lowerCaseHeaders = true, record}) => {

    for(row in rows){
        record[row] = {text : rows[row][0]};
    }

    // record = replacePunctuations(JSON.stringify(record));

    return record;

};

module.exports = processRows;