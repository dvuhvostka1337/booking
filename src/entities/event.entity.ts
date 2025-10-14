import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './booking.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", length: 255})
  name: string;

  @Column({name: "total_seats"})
  totalSeats: number;

  @OneToMany(type => Booking, booking => booking.eventId)
  bookings: Booking[]
}