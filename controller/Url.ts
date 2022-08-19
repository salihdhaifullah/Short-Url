import express from "express";
import { Request, Response } from "express";
import { UrlModel, Url } from "../models/Url";
import path from 'path';

const router = express.Router();


const getHomePage = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../view/index.html"));
}

const getShortUrl = (req: Request, res: Response) => {
    const shortUrl = req.params.shortUrl;
    UrlModel.findOne({ shortUrl }, (err: any, doc: Url) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (doc) {
                res.redirect(doc.url);
            } else {
                res.status(404).send("Not found");
            }
        }
    }
    );
};


const randomChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");


const createShortUrl = (req: Request, res: Response) => {
    const url = req.body.url;
    let shortUrl: string = "";

    for (let i = 0; i < 6; i++) {
        shortUrl += randomChars[Math.floor(Math.random() * randomChars.length)] as string;
    };

    const newUrl = new UrlModel({ url, shortUrl });
    newUrl.save((err: any) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(newUrl);
        }
    }
    );
};





router.get('/', getHomePage)

router.get('/:shortUrl', getShortUrl)

router.post('/', createShortUrl)

export default router