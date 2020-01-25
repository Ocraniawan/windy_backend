const add = 'INSERT INTO plane_booking (user_id,flight_id,is_booked,created_on,updated_on) VALUES(?,?,?,?,?)'
const dlt = 'DELETE FROM plane_booking WHERE id=?'
const edit = 'UPDATE plane_booking SET is_booked=?,updated_on=? WHERE id=?'
const detail = `SELECT user.first_name as first_name, user.last_name as last_name, title.name as title, user.phone_number as phone, user.email as email, 
                routes.origin as origin, routes.destination as destination, routes.duration as duration,
                plane.name as plane, class.name as class, ticket_price as price,
                schedules.departure as depart, schedules.arrived as arrived FROM plane_booking
                LEFT JOIN user ON plane_booking.user_id = user.id
                LEFT JOIN flight ON plane_booking.flight_id = flight.id
                LEFT JOIN routes ON flight.route_id = routes.id
                LEFT JOIN plane ON flight.plane_id = plane.id
                LEFT JOIN class ON flight.class_id = class.id
                LEFT JOIN schedules ON flight.schedule_id = schedules.id
                LEFT JOIN title ON user.title_id = title.id
                WHERE user_id=?`

module.exports = {detail,add,dlt,edit}