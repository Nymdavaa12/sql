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
exports.deleteComments = (request, response) => {
  const { id } = request.params;
  const deleteIndex = comments.findIndex(
    (comment) => comment.id === Number(id)
  );
  comments.splice(deleteIndex, deleteIndex + 1);

  if (comments) {
    response.status(200).json(comments);
  } else {
    response.status(400).send(`User ${id} not exist`);
  }
};
