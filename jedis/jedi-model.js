const db = require("../data/dbConfig");

module.exports = {
    get,
    findById,
    insert,
    remove
}

function get(){
    return db("jedis")
};

function findById(id){
    // return db("jedis")
    // .select("id", "name")
    // .where({ id })
    return null;
};

async function insert(jedi){
    return db("jedis")
    .insert(jedi, "id")
};

function remove(id){
    // return db("jedis")
    // .where({ id })
    // .del()
    return null;
};