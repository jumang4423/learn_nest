import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schema/app.schema';

require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://ryoma:${process.env.MONGODB_PASSWORD}@cluster0.evsnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
    MongooseModule.forFeature([{ name: 'todoModel', schema: TodoSchema }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private appService: AppService) {}
}
