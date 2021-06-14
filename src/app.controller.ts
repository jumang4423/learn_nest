import { Controller, Get, Post, Param, Body, ParseIntPipe, Delete } from '@nestjs/common';
// import { EADDRNOTAVAIL } from 'constants';
import { AppService } from './app.service';
import { TodoInterface } from './dto/app.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async sayHello() {
    return "welcome to simple todo backend server!"
  }

  @Post('add')
  async insertNum(@Body() todo: TodoInterface,) {
    return this.appService.insertNum(todo.todo)
  }

  @Get('all')
  async getArray(
  ) {
    return this.appService.showAll()
  }

  @Get(':id')
  async getaDocument(
    @Param('id') id
  ) {
    return this.appService.getDoc(id)
  }

  @Delete('delete')
  async deleteTodo(@Body('id') id) {
    return this.appService.deleteTodo(id)
  }

}