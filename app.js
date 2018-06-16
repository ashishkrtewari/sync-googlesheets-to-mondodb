const syncToDb = require('./index');
const { Todo } = require('./models/todo');

syncToDb({
    sheetId: 'https://sheets.googleapis.com/v4/spreadsheets/1zqM77IQqREsItwEmRqNVmAiqV3ssFvff95KrV9twyQw/values/Sheet4?key=AIzaSyDvzev3V6yIRERTjxmqdM4ZVm6c9BU67D8',
    dbUrl:'mongodb://localhost:27017/TodoApp',
    model:Todo
});