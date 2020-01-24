const Booking = require('../models/Booking');


module.exports = {
    async StorageEvent(req, res){
        const { booking_id } = req.params;
        const booking = await (await Booking.findById(booking_id)).populate('spot');

        booking.approved = true;

        await booking.save();

        return res.json(booking);

        }
};