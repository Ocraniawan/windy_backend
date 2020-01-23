const detail = 'SELECT * FROM rooms WHERE id=?'
const all = `SELECT * FROM rooms`
const add = 'INSERT INTO rooms (rooms_type_id,hotel_id,price,images,created_on,updated_on) VALUES(?,?,?,?,?,?)'
const dlt = 'DELETE FROM rooms WHERE id=?'
const edit = 'UPDATE rooms SET rooms_type_id=?,hotel_id=?,images=?, price=?,updated_on=? WHERE id=?'

module.exports = {detail,add,dlt,edit, all}
