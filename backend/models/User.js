const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    documentNumber: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roleCode: { type: String, default: 'USER' },
    status: { type: String, default: 'active' }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);