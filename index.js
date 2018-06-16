const dbConnect = require('./db/db-connect');
const mongoose = require('mongoose');
const getSheetData = require('./utils/get-sheet-json-data');
const addData = require('./utils/add-data');

module.exports = ({ sheetId, dbUrl, interval, model }) => {
    db = dbConnect(dbUrl);
    sheetId ? getSheetData(sheetId).then((data) => {addData(data, model)}) : false;

    interval ? setInterval(() => {
        console.log(`Running getSheetData and addData with interval of: ${interval} min \n${new Date()}`);
        getSheetData(sheetId).then((data) => {addData(data, model)})
    }, interval * 60000): false;

    return false;
}