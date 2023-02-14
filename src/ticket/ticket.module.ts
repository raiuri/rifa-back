import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { UserModule } from 'src/user/user.module';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ticket]),
    UserModule,
    PaymentModule
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule { }
