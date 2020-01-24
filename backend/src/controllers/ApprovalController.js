const Booking = require('../models/Booking');


module.exports = {
    async StorageEvent(req, res){
        const { booking_id } = req.params;
        const booking = await (await Booking.findById(booking_id)).populate('spot');

        booking.approved = true;

        await booking.save();

        const bookginUserSocket = requ.connectedUser[booking.user];

        if (bookingUserSocket){
            req.io.to(bookingUserSocket).emit('booking_request', booking);
        }

        return res.json(booking);

        }
};