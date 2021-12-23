import express,{Request,Response,NextFunction} from 'express';

const app = express();
const port = 3000;

const helloWorldRoute = (req:Request,res:Response,next:NextFunction)=>{
res.status(200).json("hello world");
}
app.get("/",helloWorldRoute);
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});
