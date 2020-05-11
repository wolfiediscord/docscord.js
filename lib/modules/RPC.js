const fetch = require('node-fetch');
var base = "https://djsdocs.sorta.moe/v1/rpc/"

var rpc = {
    search: function (keyword) {
        return new Promise(function (resolve, reject) {
            fetch(base + `master/embed?q=${keyword}`)
                .then(res => res.json())
                .then(body => {
                    if (body === null) throw new Error("not found!");
                    resolve(body);
                });
        })
    }
}

module.exports = rpc;
