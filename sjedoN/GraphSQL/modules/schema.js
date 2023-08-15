const graphql = require('graphql');


const { GraphQLObjectType, GraphQLList,GraphQLString, GraphQLSchema } = graphql;

var books = [
    { name: "asf", id: '1',authorid:'1' }
]

const authers = [{ name: "auther" }]


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author:{
            type:AuthorType,
            resolve(parents,args){
                return authers[0]
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        authorid: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        books:{
            type:new GraphQLList(BookType),
        resolve(par,args){
          return books[0]
        }        
    }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(par, args) {
                return books[0]
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLString } },
            resolve(par, args) {
                return authers[0]
            }
        },
        // root qury
        books:{
            type:new GraphQLList(BookType),
            resolve(par,args){
                return args.id
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});

