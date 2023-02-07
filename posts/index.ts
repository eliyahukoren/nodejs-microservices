
import express, { Express } from 'express';
import { postRoute } from "./routers";

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", postRoute);



app.listen(PORT, () => {
  console.log(`🛡️[server]Server is running at http://localhost:${PORT}`);
})
