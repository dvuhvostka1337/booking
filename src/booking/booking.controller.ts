import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from 'src/entities/booking.entity';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post("/api/bookings/reserve")
  async createBookig(@Body() data: {event_id: number, user_id: string}): Promise<Booking> {
    const booking = await this.bookingService.createBooking(data.event_id, data.user_id);
    if(!booking){
        throw "Couldnt create booking"
    }
    return booking;
  }
}
