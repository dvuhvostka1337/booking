import { DataSource } from "typeorm"
import { Event } from "src/entities/event.entity"
import { Booking } from "src/entities/booking.entity"

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    entities: [
        Event, Booking
    ],
    migrations: [
       "src/db/migrations/*{.ts,.js}"
    ],
    migrationsTableName: "custom_migration_table",
})