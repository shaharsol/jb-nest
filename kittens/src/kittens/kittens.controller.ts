import { KittensService } from './kittens.service';
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
import { CreateKittenDto } from './dto/create-kitten.dto';
import { Kitten } from './interfaces/kitten.interface';

@Controller('kittens')
export class KittensController {
  constructor(private kittensService: KittensService) {}

  @Get(':id')
  findAll(@Param() params: any): string {
    return `mitzi, kitzi and meshi and ${params.id}`;
    // return this.kittensService.findAll()
  }

  @Get()
  async findAllKittens(): Promise<Kitten[]> {
    return this.kittensService.findAll();
  }

  @Post()
  async create(@Body() createKittenDto: CreateKittenDto): Promise<void> {
    return this.kittensService.create(createKittenDto);
  }

  //   @Post()
  //   //   @HttpCode(204)
  //   @Header('Cache-Control', 'none')
  //   //   @Redirect('/kittens', 302)
  //   create(
  //     @Req() req: Request,
  //     @Body() createKittenDto: CreateKittenDto,
  //   ): string {
  //     return `created a kitten named ${createKittenDto.name}`;
  //     // return `created a kitten named ${req.body.name}`;
  //   }
}
