const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Query {
    posts(query: String): [Post!]!
    users(query: String): [User!]!
  }

  type Mutation {
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    updatePost(id: ID!, data: UpdatePostInput!): Post!

    createUser(data: CreateUserInput!): AuthPayload!
    login(data: LoginUserInput!): AuthPayload!
  }

  type Subscription {
    post: PostSubscriptionPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    data: Post!
  }

  input CreatePostInput {
    title: String!
    author: String!
    postedUser: ID!
  }

  input UpdatePostInput {
    title: String
    author: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    name: String!
    email: String
    password: String!
    posts: [Post!]!
    updatedAt: String!
    createdAt: String!
  }

  type Post {
    id: ID!
    title: String!
    author: String!
    postedUser: User!
    createdAt: String!
    updatedAt: String!
  }
`;
