const User = require("../modules/User.model");

module.exports.userController = {
  getUsers: async (req, res) => {
    try {
      const data = await User.find({});
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },

  removeUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.userId);
      res.send("удалён");
    } catch {
      res.json({ err: "Ошибка при удалении" });
    }
  },

  addUsers: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
      });
      res.json("пользователь добавлен");
    } catch (err) {
      res.json(err);
    }
  },
};
