const Post = {
  postedUser(
    parent: any,
    args: any,
    { prisma, request }: { prisma: any; request: any },
    info: any
  ) {
    return prisma.post({ id: parent.id }).postedUser();
  },
};
module.exports = Post;
