var fs = require('fs');

function readDir () {
    fs.readdir('.', function(err, data) {
        if (err) throw err;
        
        fs.writeFile('tekst.txt', data.join(', '), function(err) {
            if (err) throw err;
            console.log('The file has been saved');
        })
    });
}

readDir();