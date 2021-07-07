// import routes and models
const router = require("express").Router();
const { Comment, Post, User } = require("../models");

// import helper to prevent access unless user is logged in
const withAuth = require("../utils/auth");

// dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User }],
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    // render dashboard-index view
    res.render("dashboard-index", {
      layout: "dashboard",
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// new post route
router.get("/create-post", withAuth, (req, res) => {
  // render create-post view
  res.render("create-post", {
    layout: "dashboard",
    logged_in: req.session.logged_in,
  });
});

// edit post route
router.get("/edit-post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }],
    });

    // serialize the data
    const post = postData.get({ plain: true });

    // render edit-post view
    res.render("edit-post", {
      layout: "dashboard",
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
