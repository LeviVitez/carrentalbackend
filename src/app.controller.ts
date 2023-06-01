import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { find } from 'rxjs';
import Cars from './entities/cars.entity';
import { isNotEmpty } from 'class-validator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get('api/cars')
  async getall(){
    const allCars= this.dataSource.getRepository(Cars)
    const cars= await allCars.find()
    return {cars:cars}
  }

  @Post('api/cars')
  async uploadcar(@Body() cars:Cars){
    const allCars= this.dataSource.getRepository(Cars)
    const newcar= new Cars()
    cars.id=undefined;
    newcar.license_plate_number=cars.license_plate_number
    newcar.brand=cars.brand
    newcar.model=cars.model
    newcar.daily_cost=cars.daily_cost

    const now=new Date().toISOString().substring(0,10)

    newcar.created_at=now
    newcar.updated_at=now
    await allCars.save(newcar)
    return newcar
  }
}
