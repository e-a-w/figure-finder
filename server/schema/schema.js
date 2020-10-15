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
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Figure.findById(args.id);
      },
    },
    figures: {
      type: new GraphQLList(FigureType),
      resolve: () => Figure.find({}),
    },
    filterFigures: {
      type: new GraphQLList(FigureType),
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        difficulty: { type: GraphQLString },
        number: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Figure.find({
          $or: [
            { name: { $regex: `${args.name}`, $options: "i" } },
            { description: { $regex: `${args.description}`, $options: "i" } },
            { difficulty: { $regex: `${args.difficulty}`, $options: "i" } },
            { number: { $regex: `${args.number}`, $options: "i" } },
          ],
        });
      },
    },
    position: {
      type: PositionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Position.findById(args.id);
      },
    },
    positions: {
      type: new GraphQLList(PositionType),
      resolve: () => Position.find({}),
    },
    filterPositions: {
      type: new GraphQLList(PositionType),
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return Position.find({
          $or: [
            { name: { $regex: `${args.name}`, $options: "i" } },
            { description: { $regex: `${args.description}`, $options: "i" } },
          ],
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
