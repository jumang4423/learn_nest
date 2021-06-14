import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop()
    id: number // id
    @Prop()
    todo: string // todo
    @Prop()
    date: Date // automatically generates Date Type Data
}

export const TodoSchema = SchemaFactory.createForClass(Todo);