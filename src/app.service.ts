import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TodoInterface } from './dto/app.dto';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schema/app.schema';
import { TodoDto } from './dto/todoDto.dto'

@Injectable()
export class AppService {
  // private readonly todos: TodoInterface[] = []

  @InjectModel('todoModel') private readonly todoModel: Model<TodoDocument>

  async insertNum(todo: string): Promise<string> {
    // this.todos.push({ id: this.todos.length, todo: todo, date: new Date() })
    const createdCat = new this.todoModel({ todo: todo, date: new Date() })
    await createdCat.save()
    return 'added'
  }

  async getDoc(id: string): Promise<TodoInterface> {
    return await this.todoModel.findOne({"_id": id}).exec();
  }

  async showAll(): Promise<TodoInterface[]> {
    return await this.todoModel.find().exec();
  }

  async updateTodo(id: string, todo: TodoDto): Promise<string> {    
    await this.todoModel.findByIdAndUpdate({"_id": id}, {
      $set: todo
    })
    return 'updated'
  }

  async deleteTodo(id: string) {
    await this.todoModel.findByIdAndDelete({"_id": id})
    return 'deleted'
  }
}