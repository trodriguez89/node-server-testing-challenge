require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT || 5555;

server.listen(port, () => {
    console.log(`\n*** Listening on port ${port} ***\n`)
});

module.exports = server;