const Query = {
  users: async (
    root: any,
    args: any,
    { prisma }: { prisma: any },
    info: any
  ) => {
    try {
      return prisma.users();
    } catch (error) {
      throw error;
    }
  },

  posts: (parent: any, args: any, { prisma }: { prisma: any }, info: any) => {
    try {
      return prisma.posts();
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Query;
