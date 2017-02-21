const squel = require('squel');

/* Query with JSON WHERE */

        var where_json = {"entry":12,"guid":13};

        var query = squel.update();

            query.table('exmaple');
            query.set('entry', 1);

            var key;
            /* Fiel up Where statement */
            for(key in where_json)
            {    
             query.where(key+" = "+where_json[key]);
            }

        // Print Result 
        console.log(query.toString()); // UPDATE exmaple SET entry = 1 WHERE (entry = 12) AND (guid = 13)
        
/* Query with JSON WHERE */