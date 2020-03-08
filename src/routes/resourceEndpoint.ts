import {Router, Request, Response} from "express";
import Resource from "../models/resource";

const router: Router = Router();

// get all ResourcesInfo
router.get("/", async (req: Request, res: Response) => {
    Resource.find((err, data) => {
        if (err) {
            res.status(400).json(err);
        }
        console.log(res.json(data))
        res.status(200).json(data);
    });
});

// get one resource
router.get("/:id", async (req: Request, res: Response) => {
    Resource.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(data);
    });
});

export default router;
