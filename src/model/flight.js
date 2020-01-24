const all = `SELECT * FROM flight`
const add = 'INSERT INTO flight (route_id,plane_id, class_id, schedule_id,ticket_price, created_on, updated_on) VALUES(?,?,?,?,?,?,?)'
const dlt = 'DELETE FROM flight WHERE id=?'
const edit = 'UPDATE flight SET route_id=?,plane_id=?, class_id=?,schedule_id=?, ticket_price=?,updated_on=? WHERE id=?'

const detail = `SELECT routes.origin as origin, routes.destination as destination, routes.duration as duration,
                schedules.departure as departure, schedules.arrived as arrived, ticket_price as price, 
                plane.name as plane, plane.image as image, class.name as class FROM flight 
                INNER JOIN routes ON flight.route_id = routes.id
                INNER JOIN plane ON flight.plane_id = plane.id
                INNER JOIN schedules ON flight.schedule_id = schedules.id
                INNER JOIN class ON flight.class_id = class.id
                WHERE flight.route_id=?`   



module.exports = {detail,add,dlt,edit, all}
