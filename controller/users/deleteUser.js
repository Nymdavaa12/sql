const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.deleteUser = (request, response) => {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === Number(id));
  users.splice(userIndex, 1);

  response.send("user number 2 deleted");

  if (users) {
    response.status(200).json({
      users,
    });
  } else {
    response.status(200).send(`User ${id} not exist`);
  }
};
