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
exports.updateComments = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  if (!id) {
    response.status(400).send(`comment ${id} update failed `);
  }

  const updatedComments = comments.map((comment) => {
    console.log(comment.id === Number(id));
    if (comment.id === Number(id)) {
      comment.like = body.like;
      comment.message = body.message;
      comment.createdTime = body.createdTime;
    }

    return comment;
  });

  response.status(200).json({ updatedComments });
};
