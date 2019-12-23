import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly CatRepository: Repository<Cat>,
  ) {}
  async findCat(): Promise<Cat[]> {
    return await this.CatRepository.find();
  }

  findOneCat(params): object {
    return params;
  }

  async createCat(cat): Promise<{}> {
    return await this.CatRepository.save(cat);
  }
}
