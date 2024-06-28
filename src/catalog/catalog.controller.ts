import { Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogResponseDto } from './dto/CatalogDTO';
import { plainToInstance } from 'class-transformer';

@Controller("/catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get("/data1")
  @HttpCode(200)
  getHello(): CatalogResponseDto {
    //console.log(this.catalogService.getData());
    //throw Error("");
    return plainToInstance(CatalogResponseDto, this.catalogService.getData());
  }

  @Post("/data2")
  @HttpCode(200)
  getPostHello(): CatalogResponseDto {
    //console.log(this.catalogService.getData());
    //throw Error("");
    return plainToInstance(CatalogResponseDto, this.catalogService.getData());
  }
}
