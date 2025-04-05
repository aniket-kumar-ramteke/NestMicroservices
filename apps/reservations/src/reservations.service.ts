import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservation.repository';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) { }

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      timestamp: new Date(),
      ...createReservationDto,
      userId: '123' // this will be from JWT
    });
  }

  findAll() {
    return this.reservationsRepository.find({});
    // return `This action returns all reservations`;
  }

  findOne(_id: number) {
    return this.reservationsRepository.findOne({ _id });
    // return `This action returns a #${id} reservation`;
  }

  update(_id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({ _id }, { $set: updateReservationDto }) // $set is used to update specific field rather than replacing whole document 
    // return `This action updates a #${id} reservation`;
  }

  remove(_id: number) {
    return this.reservationsRepository.findOneAndDelete({ _id })
    // return `This action removes a #${id} reservation`;
  }
}
