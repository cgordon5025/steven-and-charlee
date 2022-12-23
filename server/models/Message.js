const { Schema, model } = require('mongoose');

const MessageSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        note: {
            type: String,
            required: true
        }
    }
)

const Message = model('Message', MessageSchema);

module.exports = Message