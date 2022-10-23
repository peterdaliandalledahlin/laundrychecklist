import Localbase from 'localbase'

const DB = new Localbase('db')
DB.config.debug = false
const COLLECTION_NAME = 'regions'

const repository = {

    add: async function(laundryroom) {
        await DB.collection(COLLECTION_NAME).add(laundryroom)
    },

    get: async function(id) {
        return await DB.collection(COLLECTION_NAME).doc({id}).get()
    },

    set: async function(id, laundryroom) {
        await DB.collection(COLLECTION_NAME).doc({id}).set(laundryroom)
    },

    getAll: async function() {
        return await DB.collection(COLLECTION_NAME).get()
    }
}


export default repository