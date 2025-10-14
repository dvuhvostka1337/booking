import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from 'src/entities/booking.entity';
import { Event } from 'src/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Booking])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {
    
}