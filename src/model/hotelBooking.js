const all = `SELECT * FROM hotel_booking`
const add = 'INSERT INTO hotel_booking (user_id,rooms_id,duration,is_booked,created_on,updated_on) VALUES(?,?,?,?,?,?)'
const dlt = 'DELETE FROM hotel_booking WHERE id=?'
const edit = 'UPDATE hotel_booking SET is_booked=?,updated_on=? WHERE id=?'
const detail = `SELECT user.first_name as first_name, user.last_name as last_name, title.name as title, user.phone_number as phone, user.email as email, 
                room_type.name as rooms_name, duration, hotel.name as hotel_name, rooms.price as price,
                hotel.image as image FROM hotel_booking    
                INNER JOIN user ON hotel_booking.user_id = user.id
                INNER JOIN rooms ON hotel_booking.rooms_id = rooms.id
                INNER JOIN hotel ON rooms.hotel_id = hotel.id
                INNER JOIN room_type ON rooms.rooms_type_id = room_type.id
                INNER JOIN title ON user.title_id = title.id
                WHERE user_id=?`

module.exports = {detail,add,dlt,edit, all}