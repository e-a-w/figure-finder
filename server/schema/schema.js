const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const FigureType = new GraphQLObjectType({
  name: "Figure",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    number: { type: GraphQLString },
    positions: {
      type: new GraphQLList(PositionType),
    },
    transitions: {
      type: new GraphQLList(TransitionType),
    },
  }),
});

const PositionType = new GraphQLObjectType({
  name: "Position",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const TransitionType = new GraphQLObjectType({
  name: "Transition",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    positions: {
      type: new GraphQLList(PositionType),
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    figure: {
      type: FigureType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get figure data from database
      },
    },
    position: {
      type: PositionType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get position data from database
      },
    },
    transition: {
      type: TransitionType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get transition data from database
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
