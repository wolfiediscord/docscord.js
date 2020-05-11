const Stable = require('./modules/Stable');
const Master = require('./modules/Master');
const RPC = require('./modules/RPC');
const Commando = require('./modules/Commando');

class Client {

    /**
     * Create Client
     * @constructor
     * nothing rn
     */
    constructor() {
       // nothing rn 
    }

    /**
     * Search Stable version
     * @param {String} keyword Keyword to search
     * @returns {Promise}
     */
    searchStable(keyword) {
        if (!keyword) throw new TypeError('Keyword/Query not specified!');
        return Stable.search(encodeURIComponent(keyword));
    }

    /**
     * Search Master version
     * @param {String} keyword Keyword to search
     * @returns {Promise}
     */
    searchMaster(keyword) {
        if (!keyword) throw new TypeError('Keyword/Query not specified!');
        return Master.search(encodeURIComponent(keyword));
    }

    /**
     * Search Commando version
     * @param {String} keyword Keyword to search
     * @returns {Promise}
     */
    searchCommando(keyword) {
        if (!keyword) throw new TypeError('Keyword/Query not specified!');
        return Commando.search(encodeURIComponent(keyword));
    }

    /**
    * Search RPC version
    * @param {String} keyword Keyword to search
    * @returns {Promise}
    */
    searchRPC(keyword) {
        if (!keyword) throw new TypeError('Keyword/Query not specified!');
        return RPC.search(encodeURIComponent(keyword));
    }
}

module.exports = Client;