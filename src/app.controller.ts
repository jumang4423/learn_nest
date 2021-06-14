import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
// import { EADDRNOTAVAIL } from 'constants';
import { AppService } from './app.service';
import { TodoInterface } from './dto/app.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async insertNum(@Body() todo: TodoInterface,) {
    console.log(todo)
    return this.appService.insertNum(todo.todo)
  }

  @Get()
  async getArray(
  ) {
    return this.appService.showAll(true)
  }

}