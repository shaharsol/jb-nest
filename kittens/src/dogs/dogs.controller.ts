import { DogsService } from './dogs.service';
import {
  Body,
  Controller,
  Get,
  // Header,
  //HttpCode,
  Param,
  Post,
  //   Redirect,
  //Req,
} from '@nestjs/common';
//import { Request } from 'express';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get(':id')
  findAll(@Param() params: any): string {
    return `mitzi, kitzi and meshi and ${params.id}`;
    // return this.dogsService.findAll()
  }

  @Get()
  async findAllDogs(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<void> {
    return this.dogsService.create(createDogDto);
  }

  //   @Post()
  //   //   @HttpCode(204)
  //   @Header('Cache-Control', 'none')
  //   //   @Redirect('/kittens', 302)
  //   create(
  //     @Req() req: Request,
  //     @Body() createDogDto: CreateDogDto,
  //   ): string {
  //     return `created a kitten named ${createDogDto.name}`;
  //     // return `created a kitten named ${req.body.name}`;
  //   }
}
