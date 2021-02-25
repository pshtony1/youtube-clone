import passport from "passport";
import GithubStrategy from "passport-github";
// import FacebookStrategy from "passport-facebook";
import {
  // facebookLoginCallback,
  githubLoginCallback,
} from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: process.env.PRODUCTION
        ? `https://tranquil-castle-40182.herokuapp.com${routes.githubCallback}`
        : `http://localhost:4000${routes.githubCallback}`,
      scope: "user:email",
    },
    githubLoginCallback
  )
);

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FB_ID,
//       clientSecret: process.env.FB_SECRET,
//       callbackURL: `https://itchy-puma-25.loca.lt${routes.facebookCallback}`,
//     },
//     facebookLoginCallback
//   )
// );

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
