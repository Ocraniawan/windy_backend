// const booked = 'SELECT * FROM hotel_booking WHERE user_id=? AND is_booked=1'
const booked = `SELECT user.first_name as first_name, user.last_name as last_name, title.name as title, user.phone_number as phone, user.email as email, 
room_type.name as rooms_name, duration, hotel.name as hotel_name, rooms.price as price,
hotel.image as image FROM hotel_booking    
INNER JOIN user ON hotel_booking.user_id = user.id
INNER JOIN rooms ON hotel_booking.rooms_id = rooms.id
INNER JOIN hotel ON rooms.hotel_id = hotel.id
INNER JOIN room_type ON rooms.rooms_type_id = room_type.id
INNER JOIN title ON user.title_id = title.id
WHERE user_id=? AND hotel_booking.is_booked = 1`
const not_booked = `SELECT user.first_name as first_name, user.last_name as last_name, title.name as title, user.phone_number as phone, user.email as email, 
room_type.name as rooms_name, duration, hotel.name as hotel_name, rooms.price as price,
hotel.image as image FROM hotel_booking    
INNER JOIN user ON hotel_booking.user_id = user.id
INNER JOIN rooms ON hotel_booking.rooms_id = rooms.id
INNER JOIN hotel ON rooms.hotel_id = hotel.id
INNER JOIN room_type ON rooms.rooms_type_id = room_type.id
INNER JOIN title ON user.title_id = title.id
WHERE user_id=? AND hotel_booking.is_booked = 0`

module.exports = { booked, not_booked }
