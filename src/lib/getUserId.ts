const jwt = require("jsonwebtoken");

export const getUserId = (request: any, requireAuth: boolean = true) => {
  const header = request.req.headers.authorization;

  if (header) {
    const token = header.replace("Bearer ", "");
    const decoded = jwt.verify(token, "supersecret");
    return decoded;
  }

  if (requireAuth) {
    throw new Error("Authentication required");
  }

  return null;
};
