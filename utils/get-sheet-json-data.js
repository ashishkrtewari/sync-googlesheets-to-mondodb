const axios = require('axios');
const processRows = require('./process-rows');

module.exports = (url, callback) => {
    var rows;
    return new Promise(resolve => {
        if (url.indexOf('sheets.googleapis.com') > -1) {
            axios.get(url)
                .then(function (response) {
                    if (response.data.values) {                    
                        rows = response.data.values;
                        var record = [],
                            lowerCaseHeaders = true;
    
                        record = processRows({rows,record,lowerCaseHeaders});

                        resolve(record);
                    }
                })
                .catch(function (error) {
                    console.log('Unable to fetch the googleapis data.');
                });
        }
      });
};