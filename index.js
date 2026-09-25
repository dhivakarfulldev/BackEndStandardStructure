import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./routers/user.router.js"

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/users" , userRouter);


app.listen(process.env.PORT , () => {
    console.log("Application is listening");
    
})