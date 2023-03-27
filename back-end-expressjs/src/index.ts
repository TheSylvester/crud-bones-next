import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: `.env.local` });

import app from "./server";
import { connect } from "./database";

const port = process.env.PORT || 3001;

async function startServer() {

  await connect();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

// start the server
startServer().then();