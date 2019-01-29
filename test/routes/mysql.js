let express         = require('express');
let path            = require('path');
let router          = express.Router();

let conn            = require(path.join(__dirname, '../config/mysql_test'));

/* GET users listing. */
router.get('/', function(req, res, next) {

    conn.query('select * from account where ACCOUNT_NO < 10', function(err, rows) {
        if(err) throw err;

        // console.log('The solution is: ', rows);
        res.send(genRows(rows));
        // res.send(rows)
    });

});

function genRows(rows) {
    return rows;
}

module.exports = router;


