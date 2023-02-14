import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { PaymentService } from 'src/payment/payment.service';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    private readonly userService: UserService,
    private readonly paymentService: PaymentService,
  ) {
  }
  async create(createTicketDto: CreateTicketDto, id: string) {
    const user = await this.userService.findOneOrFail({ id });
    const ticket = new Ticket();
    ticket.number = createTicketDto.number;
    ticket.user = user;
    return await this.ticketRepository.save(ticket);
  }

  async findAll() {
    return await this.ticketRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
