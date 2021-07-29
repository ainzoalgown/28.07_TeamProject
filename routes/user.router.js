const { Router } = require("express");
const { usersController } = require();

const router = Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.addUsers);
router.delete("/admin/users/userId", usersController.removeUser);

module.exports = router;
