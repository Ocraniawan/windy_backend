const login = 'SELECT * FROM user WHERE username=?'
const detail = 'SELECT * FROM user WHERE id=?'
const register = 'INSERT INTO user(title_id, username, first_name, last_name, phone_number, email, password, image, created_on, updated_on) VALUES (?,?,?,?,?,?,?,?,?,?)'
const dlt = 'DELETE FROM user WHERE id=?'
const edit = 'UPDATE user SET title_id=?, username=?, first_name=?, last_name=?, phone_number=?, email=?, enc_pass=?, image=?, updated_on=? WHERE id=?'
const logout = 'UPDATE revoked_token SET is_revoked=? WHERE token=?'


module.exports = {login,detail,register,dlt,edit, logout}