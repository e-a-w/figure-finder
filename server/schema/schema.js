const graphql = require("graphql");
const Figure = require("../db/models/figure");
const Position = require("../db/models/position");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
} = graphql;

const FigureType = new GraphQLObjectType({
  name: "Figure",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    difficulty: { type: GraphQLString },
    number: { type: GraphQLString },
    positions: {
      type: new GraphQLList(PositionType),
      resolve(parent, args) {
        return Position.find({ figures: parent.id });
      },
    },
  }),
});

const PositionType = new GraphQLObjectType({
  name: "Position",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    figures: {
      type: new GraphQLList(FigureType),
      resolve(parent, args) {
        return Figure.find({ positions: parent.id });
      },
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
        return Figure.findById(args.id);
      },
    },
    figures: {
      type: new GraphQLList(FigureType),
      resolve: () => Figure.find({}),
    },
    position: {
      type: PositionType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Position.findById(args.id);
      },
    },
    positions: {
      type: new GraphQLList(PositionType),
      resolve: () => Position.find({}),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
