const comments = [
  {
    id: 1,
    like: 33,
    message: "blablabla",
    createdTime: "Fri sep 22 2024 09:22:01",
  },
  {
    id: 2,
    like: 21,
    message: "blabla",
    createdTime: "Fri sep 22 2024 12:30:00",
  },
];
exports.createComments = (request, response) => {
  comments.push({ ...request.body });
  response.status(200).json({ message: "Successfully created user", comments });
};
