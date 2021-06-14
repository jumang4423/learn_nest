import { Injectable } from '@nestjs/common';
import { TodoInterface } from './dto/app.dto';

@Injectable()
export class AppService {
  private readonly todos: TodoInterface[] = []

  insertNum(todo: string): string {
    this.todos.push({ id: this.todos.length, todo: todo, date: new Date() })
    return 'the id were corectly added.';
  }

  showAll(sort: boolean): TodoInterface[] {

    const _numbers: TodoInterface[] = this.todos
    if (sort) {
      _numbers.sort(function (a, b) {
        return a.id - b.id;
      });
    }

    return _numbers;
  }
}


// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { TodoInterface } from './dto/app.dto';
// import { Model } from 'mongoose';
// import { Todo, TodoDocument } from './schema/app.schema';

// @Injectable()
// export class AppService {
//   // private readonly todos: TodoInterface[] = []

//   @InjectModel('todoModel') private readonly todoModel: Model<TodoDocument>

//   insertNum(todo: string): Promise<Todo> {
//     // this.todos.push({ id: this.todos.length, todo: todo, date: new Date() })
//     const createdCat = new this.todoModel(null);  
//     return createdCat.save();;
//   }

//   showAll(_: boolean): Promise<TodoInterface[]> {

//     return this.todoModel.find().exec();

//     // const _numbers: TodoInterface[] = this.todos
//     // if (sort) {
//     //   _numbers.sort(function (a, b) {
//     //     return a.id - b.id;
//     //   });
//     // }

//     // return _numbers;
//   }
// }