import passport from "passport";
import request from "request";
import undefsafe from "undefsafe";
import routes from "../routes";
import User from "../models/User";
import Video from "../models/Video";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });

      await User.register(user, password);

      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getMe = async (req, res) => {
  const allVideos = await Video.find({});
  let userVideos = [];
  for (let i = 0; i < allVideos.length; i++) {
    if (allVideos[i].uploadUser === req.user.id) {
      userVideos.push(allVideos[i]);
    }
  }

  res.render("userDetail", {
    pageTitle: "User Detail",
    user: req.user,
    userVideos,
  });
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Sign in" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (accessToken, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name },
  } = profile;

  const email = undefsafe(profile, "emails.0.value");
  let promise = null;

  if (email) {
    promise = Promise.resolve(email);
  } else {
    promise = new Promise((resolve, reject) => {
      request(
        {
          url: "https://api.github.com/user/emails",
          json: true,
          headers: {
            "user-agent": "my user-agent",
            authorization: `token ${accessToken}`,
          },
        },
        (error, res, body) => {
          if (error) {
            return reject(error);
          }

          resolve(body.find((entry) => entry.primary).email);
        }
      );
    });
  }

  promise.then(async (email) => {
    try {
      const user = await User.findOne({ email });

      if (user) {
        user.githbId = id;
        user.save();
        return cb(null, user);
      } else {
        const newUser = await User.create({
          email,
          name,
          githubId: id,
          avatarUrl: avatar_url,
        });
        return cb(null, newUser);
      }
    } catch (error) {
      return cb(error);
    }
  });
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

// export const facebookLogin = passport.authenticate("facebook");

// export const facebookLoginCallback = (
//   accessToken,
//   refreshToken,
//   profile,
//   cb
// ) => {
//   console.log(accessToken, refreshToken, profile, cb);
// };

// export const postFacebookLogin = (req, res) => {
//   res.redirect(routes.home);
// };

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
// export const users = (req, res) => res.render("Users");
export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");

    const allVideos = await Video.find({});
    let userVideos = [];
    for (let i = 0; i < allVideos.length; i++) {
      if (allVideos[i].uploadUser === id) {
        userVideos.push(allVideos[i]);
      }
    }

    res.render("userDetail", { pageTitle: "User Detail", user, userVideos });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl,
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.editProfile);
  }
};

export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
  }
};
