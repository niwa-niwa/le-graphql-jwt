const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const getUserId = require('./../lib/getUserId')

const Mutation = {
  createPost(parent:any, args:any, {prisma,request}:{prisma:any,request:any}, info:any){
    const userId = getUserId(request)

    return prisma.createPost({
      ...args.data,
      postedUser: {
        connect:{
          id: userId
        }
      }
    });
  },

  async updatePost(parent:any, args:any, {prisma,request}:{prisma:any, request:any}, info:any){
    const {id } = args;

    return prisma.updatePost({
      where:{
        id:id,
      },
      data:{
        ...args.data,
      }
    });
  },

  async deletePost(parent:any, args:any, {prisma,request}:{prisma:any, request:any},info:any){
    const {id} = args
    return prisma.deletePost({
      id:id
    });
  },

  async createUser(parent:any, args:any, {prisma}:{prisma:any}, info:any){
    const {data:{email,name,password}}=args;
    const user = await prisma.createUser({
      email,
      name,
      password:bcrypt.hasSync(password,10)
    });
    return {
      user,
      token: jwt.aign(user.id, 'supersecret')
    };
  },
}
module.exports = Mutation
