import express, {Request, Response} from "express";
const router = express.Router()

router.get("/", async(req: Request, res: Response) => {
    res.redirect("https://go.postman.co/workspace/f596ac10-e535-40ee-8089-40e5e6bfc0ab/collection/22416364-c1c74f71-d557-41b3-b138-c3a09ec68aea")
})

export default router