import { Controller, Get, Post, Param, Body, ParseIntPipe } from '@nestjs/common';
// import { EADDRNOTAVAIL } from 'constants';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(':id')
  async insertNum(
    @Param('id', new ParseIntPipe()) id
  ) {
    return this.appService.insertNum(id)
  }

  @Get()
  async getArray(
  ) {
    return this.appService.showAll(true)
  }

}