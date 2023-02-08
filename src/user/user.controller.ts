import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return await this.userService.create(createUserDto);
  }

  // deletar essa rota por enquanto
  // @Get()
  // @UseGuards(AuthGuard('jwt'))
  // async findAll() {
  //   return await this.userService.findAll();
  // }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.findOneOrFail({ id });
  }

  @Patch(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.userService.remove(id);
  }
}
