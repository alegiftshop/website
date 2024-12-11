import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.ObjectId,
        ref : 'user'
    },
    order_id : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    product_id : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    product_details : {
        name : String,
        image : Array,
    },
    paymentId : {
        type : String,
        default : ""
    },
    payment_status : {
        type : String,
        default : ""
    },
    delivery_address : {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTotal_amount : {
        type : Number,
        default : 0
    },
    total_amount : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const OrderModel = mongoose.model('order', orderSchema)

export default OrderModel