import mongoose from "mongoose";

export interface Url extends mongoose.Document {
    url: string;
    shortUrl: string;
    createdAt: Date;
}

const UrlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    shortUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export const UrlModel = mongoose.model<Url>("Url", UrlSchema);