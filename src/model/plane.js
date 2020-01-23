const detail = 'SELECT * FROM plane WHERE id=?'
const all = `SELECT * FROM plane`
const add = 'INSERT INTO plane (name,image,created_on,updated_on) VALUES(?,?,?,?)'
const dlt = 'DELETE FROM plane WHERE id=?'
const edit = 'UPDATE plane SET name=?,image=?,updated_on=? WHERE id=?'

module.exports = {detail,add,dlt,edit, all}
