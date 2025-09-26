import { model, Schema } from "mongoose"

export interface IBook {
    title: string,
    author: string,
    desc?: string,
    genre: "Fiction" | "Non-Fiction" | "History" | "Mystery" | "Comics" | "Fantasy",
    isbn: string,
    copies: number,
    availability: boolean
}


const bookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true, enum: ["Fiction", "Non-Fiction", "History", "Mystery", "Comics", "Fantasy"], default: "Fiction" },
    desc: { type: String },
    isbn: { type: String, unique: true, required: true },
    copies: { type: Number, required: true, min: 0 },
    availability: { type: Boolean, default: true },
},
    {
        timestamps: true,
        versionKey: false
    })


export const Book = model<IBook>("Book", bookSchema)