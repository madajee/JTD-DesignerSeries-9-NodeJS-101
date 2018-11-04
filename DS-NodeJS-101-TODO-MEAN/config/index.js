var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@cluster0-shard-00-00-qchty.mongodb.net:27017,cluster0-shard-00-01-qchty.mongodb.net:27017,cluster0-shard-00-02-qchty.mongodb.net:27017/nodetodosample';
    }
    
}