const detail = 'SELECT * FROM hotel WHERE id=?'
const all = `SELECT * FROM hotel`
const add = 'INSERT INTO hotel (name,location_id,description,longitude,latitude,image,created_on,updated_on) VALUES(?,?,?,?,?,?,?,?)'
const dlt = 'DELETE FROM hotel WHERE id=?'
const edit = 'UPDATE hotel SET name=?,location_id=?, description=?, image=?, longitude=?, latitude=?, updated_on=? WHERE id=?'

module.exports = {detail,add,dlt,edit, all}
