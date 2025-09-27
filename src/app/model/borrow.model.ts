import { model, Schema } from "mongoose"

export interface IBorrow {
    quantity: number,
    bookId: Schema.Types.ObjectId,
    dueDate: Date
}


const borrowSchema = new Schema<IBorrow>({
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    dueDate: {
        type: Date,
        required: true
    },
    bookId: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    }
})


export const BorrowBook = model<IBorrow>("BorrowBook", borrowSchema)