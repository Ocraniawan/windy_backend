const find_username = 'SELECT * FROM user WHERE username=?'
const find_email = 'SELECT * FROM user WHERE email=?'
const update_by_username = 'UPDATE user SET password=? WHERE username=?'
const update_by_email = 'UPDATE user SET password=? WHERE email=?'
const all = `SELECT * FROM hotel`
const add = 'INSERT INTO hotel (name,location_id,description,longitude,latitude,image,created_on,updated_on) VALUES(?,?,?,?,?,?,?,?)'
const dlt = 'DELETE FROM hotel WHERE id=?'

module.exports = { find_username, find_email, update_by_username, update_by_email, all }
