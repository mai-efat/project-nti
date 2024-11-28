const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");
const mongoUri = "mongodb://mongodb-service-0.mongodb-service.default.svc.cluster.local:27017;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}
