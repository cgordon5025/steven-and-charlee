const { Schema, model } = require('mongoose');

const MessageSchema = newSchema(
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