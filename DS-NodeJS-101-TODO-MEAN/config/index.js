var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
         return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + 
        '@' + configValues.dburl;
    }
    
}