import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ForeignKey, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "event_id"})
  eventId: number;

  @Column({name: "user_id", type: "varchar", length: 255})
  userId: string;

  @CreateDateColumn({name: "created_at"})
  createdAt: Date;

  @ManyToOne(type => Event, event => event.bookings)
  event: Event;
}