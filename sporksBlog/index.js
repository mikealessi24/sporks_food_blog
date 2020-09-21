const { userRoutes } = require("./routes/userRoutes");
const { postRoutes, verifyToken } = require("./routes/postRoutes");
const { viewRoutes } = require("./routes/viewRoutes");

const app = require("./server");

userRoutes(app);
postRoutes(app);
viewRoutes(app);

app.listen(4000, () => console.log("The port is running on port 4000"));
