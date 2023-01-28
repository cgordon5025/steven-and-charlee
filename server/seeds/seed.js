const db = require('../config/connection');
const { Admin, Guest } = require('../models');

const adminData = require('./userData.json');
const guestData = require('./guestData.json');

const seedAll = () => {
    db.once('open', async () => {
        await Admin.deleteMany({});
        await Guest.deleteMany({})

        const Admins = await Admin.create(adminData);
        const Guests = await Guest.create(guestData);

        console.log("added the guests");
    })
}

module.exports = seedAll
