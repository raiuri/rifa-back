import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {
  constructor(private readonly ticketService: TicketService) { }

  @Post()
  create(
    @Body() createTicketDto: CreateTicketDto,
    @Req() req: any
  ) {
    return this.ticketService.create(createTicketDto, req.id);
  }

  @Get()
  async findAll() {
    return await this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(+id);
  }
}
