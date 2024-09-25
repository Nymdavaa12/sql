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
exports.postBlog = (request, response) => {
  blogpost.push({ ...request.body });
  response.status(200).json({ message: "Successfully created user", blogpost });
};
