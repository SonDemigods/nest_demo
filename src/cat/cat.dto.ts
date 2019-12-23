import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateCatDto {
  @Type(() => Number)
  @IsInt({
    message: 'ID必须是整数',
    context: { errorCode: 400 },
  })
  @Min(1, {
    message: 'ID必须大于等于1',
    context: { errorCode: 400 },
  })
  readonly id: number;

  @IsNotEmpty({
    message: '姓名是必不可少的',
    context: { errorCode: 400 },
  })
  @IsString({
    message: '姓名是必不可少的',
    context: { errorCode: 400 },
  })
  readonly name: string;

  @Type(() => Number)
  @IsInt({
    message: '年龄必须是整数',
    context: { errorCode: 400 },
  })
  @Min(1, {
    message: '年龄必须大于1',
    context: { errorCode: 400 },
  })
  @Max(200, {
    message: '年龄必须小于200',
    context: { errorCode: 400 },
  })
  readonly age: number;
}
