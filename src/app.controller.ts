import { Controller, Get, Post, Param, Body, ParseIntPipe, Delete, Patch } from '@nestjs/common';
// import { EADDRNOTAVAIL } from 'constants';
import { AppService } from './app.service';
import { TodoInterface } from './dto/app.dto'
import { TodoDto } from './dto/todoDto.dto'

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

  @Patch(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: TodoDto,
  ) {
    console.log(todo);

    return this.appService.updateTodo(id, todo)
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id) {
    return this.appService.deleteTodo(id)
  }

}