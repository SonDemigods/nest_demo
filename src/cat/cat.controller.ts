import { Get, Controller, Post, Param, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findCat(): Promise<any> {
    return this.catService.findCat();
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  findOneCat(@Param() params): object {
    return this.catService.findOneCat(params);
  }

  @Post('create')
  createCat(@Body() Cat: CreateCatDto): Promise<any> {
    return this.catService.createCat(Cat);
  }
}
