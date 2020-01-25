const booked = 'SELECT * FROM hotel_booking WHERE user_id=? AND is_booked=1'
const not_booked = 'SELECT * FROM hotel_booking WHERE user_id=? AND is_booked=0'

module.exports = { booked, not_booked }
