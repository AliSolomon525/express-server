const router = require("express").Router();
const User = require("../db").import("../models/user");

/* **USER CREATE** */
router.post("/create", function (req, res) {
  User.create({
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, 13),
  })
    .then(
      function createSuccess(user) {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24,
        });

        res.json({
          user: user,
          message: "User successfully created!",
          sessionToken: token,
        });
      }
      //res.send("This is our user/create endpoint!")
    )
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
