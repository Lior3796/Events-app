const router = require("express").Router();
const userController = require('../controllers/userController');
const { authMiddleware } = require("../middlewares/authMiddleware");

router.post("/registerUser", userController.registerUser);
router.post("/loginUser", userController.loginUser);
router.post("/userEvents", userController.getEvents);
router.post("/userEvents/addKeyToUser", userController.addKeyToUser);
router.post("/userEvents/deleteKeyFromUser", userController.deleteKeyFromUser);


router.get("/getUserEvent/:userName", userController.getUserEvents);


router.get("/", (req, res, next) => res.send("success"))
module.exports = router;