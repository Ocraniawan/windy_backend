const all = `SELECT * FROM rooms`
const add = 'INSERT INTO rooms (rooms_type_id,hotel_id,price,images,created_on,updated_on) VALUES(?,?,?,?,?,?)'
const dlt = 'DELETE FROM rooms WHERE id=?'
const edit = 'UPDATE rooms SET rooms_type_id=?,hotel_id=?,price=?, images=?, updated_on=? WHERE id=?' 
const detail = `SELECT room_type.name as rooms_name, hotel.name as hotel_name, facilities.name as facilities, price, images FROM rooms 
                LEFT JOIN room_type ON rooms.rooms_type_id = room_type.id
                LEFT JOIN hotel ON rooms.hotel_id = hotel.id
                LEFT JOIN room_facility ON rooms.id = room_facility.rooms_id
                LEFT JOIN facilities ON room_facility.facilities_id = facilities.id
                WHERE rooms.id=?`   



module.exports = {detail,add,dlt,edit, all}
