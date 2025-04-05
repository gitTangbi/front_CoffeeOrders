import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8887;

app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`Server running at localhost:${port}!`));

const Database = "mongodb://0.0.0.0:27017/sheridan";
mongoose.set("strictQuery", true);

const coffeeSchema = new mongoose.Schema({
  temp: String,
  milk: String,
  sweetness: String,
  brew: String,
  size: String,
  id: Number,
});

const coffee = mongoose.model("CoffeeOrders", coffeeSchema);
mongoose.connect(Database);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("error in mongoose", err);
});
db.once("open", () => {
  app.post("/insert", (req, res) => {
    const input = req.body.data;
    coffee
      .create(input)
      .then((result) => {
        res.send({ message: "record added" });
        console.log(result, "gguggyresukt", input);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/retrieveAll", (req, res) => {
    let input = req.query;
    //  console.log("Input is:" + input);

    coffee
      .find({}) //if wanna show a particular order write the column name here on the basis of which u wanna show orders
      .then((result) => {
        //  console.log("Result Input is: " + input);
        res.send(result);
      })
      .catch((err) => {
        // console.log("error Input is: " + input);

        console.log("error is" + err);
      });
  });

  //below for deleting the order
  app.get("/delete", (req, res) => {
    let input = req.query; //it will be the id
    coffee
      .deleteMany(input)
      .then((result) => {
        res.send({ message: "Deleted values with id: ", input });
      })
      .catch((err) => {
        console.log("error in js file: ", err, "while dlting id: ", input);
      }); //if not ryt then will show this error
  });

  app.get("/retrieveOne", (req, res) => {
    let input = req.query;
    //  console.log("Input is:" + input);

    coffee
      .find(input) //if wanna show a particular order write the column name here on the basis of which u wanna show orders
      .then((result) => {
        //  console.log("Result Input is: " + input);
        res.send(result);
      })
      .catch((err) => {
        // console.log("error Input is: " + input);

        console.log("error is" + err);
      });
  });
});
