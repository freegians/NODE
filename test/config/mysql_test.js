let mysql       = require('mysql');
let config      = {
                    host     : 'localhost',
                    user     : 'root',
                    password : 'godqhr9410',
                    port     : 3306,
                    database : 'test'
                };
module.exports  = mysql.createConnection(config);