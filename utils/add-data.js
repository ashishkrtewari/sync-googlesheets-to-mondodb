const mongoose = require('mongoose');

module.exports = (data, model) => {

    return new Promise(resolve => {
        if (model) {
            for (item of data) {
                model.find(item).then((res) => {
                    if (!res.length) {
                        let entry = new model(item);
                        entry.save().then((entry) => {
                            console.log('Added', entry);
                        }, (err) => {
                            console.log('Error');
                        })
                    }
                    else {
                        return console.log("Already Exists !");
                    }
                }, (err) => {
                    console.log('Error', err);
                });
            }
            resolve('done');
        }
        else {
            return console.log('No model defined, skipping add data...');
        }
    });
}