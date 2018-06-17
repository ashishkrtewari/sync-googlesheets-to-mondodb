const syncToDb = require('./index');
const { Todo } = require('./models/todo');

syncToDb({
    sheetId: '',
    dbUrl:'mongodb://localhost:27017/TodoApp',
    model:Todo
});