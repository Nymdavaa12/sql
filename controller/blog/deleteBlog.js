const blogpost = [
  {
    id: 1,
    like: 33,
    message: "post most",
    createdTime: "Fri sep 22 2024 09:22:01",
  },
  {
    id: 2,
    like: 21,
    message: "hahahahahhaah",
    createdTime: "Fri sep 22 2024 12:30:00",
  },
];
exports.deleteBlog = (request, response) => {
  const { id } = request.params;
  const deletedIndex = blogpost.findIndex((blog) => blog.id === Number(id));
  blogpost.splice(deletedIndex, deletedIndex + 1);

  if (blogpost) {
    response.status(200).json(blogpost);
  } else {
    response.status(400).send(`User ${id} not exist`);
  }
};
