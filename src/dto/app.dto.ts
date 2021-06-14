import { IsNotEmpty, IsString } from 'class-validator';

export class TodoInterface {
    @IsNotEmpty()
    id: number // id
    @IsNotEmpty()
    @IsString()
    todo: string // todo
    date: Date // automatically generates Date Type Data
}