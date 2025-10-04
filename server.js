import express from "express";
import nodemon from "nodemon";
import path from "path";


const app = express();
const port = process.env.PORT || 4000;
const _dirname = path.resolve();


app.use(express.static(path.join(_dirname, "public")));





app.get("/", (req, res) => {


    const filePath = path.join(_dirname ,"public","Home.html");

});


app.listen(port, "0.0.0.0", () => {

    console.log(`Server is running on port ${port}.`);

});

