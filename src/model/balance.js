const balance_left = 'SELECT * FROM balance WHERE user_id=?'
const add = 'INSERT INTO balance (user_id, balance, created_on, updated_on) VALUES(?,?,?,?)'
const edit = 'UPDATE balance SET balance=?, updated_on=? WHERE user_id=?'

module.exports = { balance_left, add, edit }
