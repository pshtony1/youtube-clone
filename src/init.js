import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

// Access to .env->PORT if can't find that, get 4000
const PORT = process.env.PORT || 4000;

const handelListening = () =>
  console.log(`[SUCCESS] Listening on port http://localhost:${PORT}`);

app.listen(PORT, handelListening);
