import { Controller, Get, Post, Param, ParseBoolPipe, Body } from '@nestjs/common';
// import { EADDRNOTAVAIL } from 'constants';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(':id')
  async insertNum(
    @Param() params
  ) {
    return this.appService.insertNum(params.id)
  }

  @Get()
  async getArray(
    // @Body('sort', ParseBoolPipe) sort: boolean,
  ) {
    return this.appService.showAll(true)
  }

}