const processRows = ({rows,lowerCaseHeaders = true, record}) => {

    for(row in rows){
        record[row] = {text : rows[row][0]};
    }

    return record;

};

module.exports = processRows;