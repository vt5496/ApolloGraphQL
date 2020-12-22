require('dotenv').config();

const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')

const server = new ApolloServer({typeDefs})

server.listen().then(()=>{
    console.log('port 4000')
})
