const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  if (!id) {
    response.status(400).send(`user ${id} update failed `);
  }

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.firstName = body.firstName;
      user.lastName = body.lastName;
    }
    return user;
  });

  response.status(200).json({ user: updatedUser, users });
};
