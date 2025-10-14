import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { Event } from 'src/entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {
  }

  async createBooking(eventId: number, userId: string): Promise<Booking | null> {
    const event = await this.eventRepository.findOne({where: {id: eventId}});
    if (event) {
        await this.bookingRepository.upsert({eventId, userId}, ["eventId", "userId"]);

        return await this.bookingRepository.findOne({
            where: { eventId, userId },
        });
    }
    return null;
  }
}
