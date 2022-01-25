import { getUserId } from "../lib/getUserId"

const User = {
  posts(
    parent: any,
    args: any,
    { prisma, request }: { prisma: any; request: any },
    info: any
  ) {
    return prisma.user({ id: parent.id }).posts();
  },
};

module.exports = User;
