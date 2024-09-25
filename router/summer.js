const express = require("express");

const { getComments } = require("../controller/comment/getComments");
const { deleteComments } = require("../controller/comment/deleteComments");
const { createComments } = require("../controller/comment/createComments");
const { updateComments } = require("../controller/comment/updateComments");
const { postComments } = require("../controller/comment/postComment");
const { deleteBlog } = require("../controller/blog/deleteBlog");
const { createBlog } = require("../controller/blog/createBlog");
const { getBlog } = require("../controller/blog/getBlog");
const { postBlog } = require("../controller/blog/postBlog");

const aRouter = express.Router();

aRouter.get("/getComments", getComments);
aRouter.delete("/deleteComments/:id", deleteComments);
aRouter.put("/createComments", createComments);
aRouter.put("/updateComments/:id", updateComments);
aRouter.post("/postComments", postComments);
aRouter.delete("/deleteBlog/:id", deleteBlog);
aRouter.put("/createBlog", createBlog);
aRouter.get("/getBlog", getBlog);
aRouter.post("/postBlog", postBlog);

module.exports = aRouter;
