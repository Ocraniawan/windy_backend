const all = `SELECT * FROM hotel`
const add = 'INSERT INTO hotel (name,location_id,description,longitude,latitude,address,image,created_on,updated_on) VALUES(?,?,?,?,?,?,?,?,?)'
const dlt = 'DELETE FROM hotel WHERE id=?'
const edit = 'UPDATE hotel SET name=?,location_id=?, description=?, longitude=?, latitude=? ,address=?,image=?,updated_on=? WHERE id=?'
const detail = `SELECT hotel.name,hotel.id as hotel_id, location.name as location, longitude, latitude, description, address, image,
                rooms.price as price FROM hotel
                LEFT JOIN location  ON hotel.location_id = location.id
                LEFT JOIN rooms ON rooms.hotel_id = hotel.id
                WHERE hotel.id=?`

module.exports = {detail,add,dlt,edit, all}
