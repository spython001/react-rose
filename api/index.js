const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); //DOES NOTHING HERE; REMEMBER TO REMOVE
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {console.error(err);});

//FOR MULTER FOR IMAGES
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "images")
    },
    filename:(req,file,callback) => {
        callback(null, req.body.name)
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

//MIDDLE-WARES
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.listen("8000", () =>{
    console.log('Backend server is running');
});