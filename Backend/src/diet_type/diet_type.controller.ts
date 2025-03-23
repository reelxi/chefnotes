import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { DietTypeService } from './diet_type.service';
import { DietType } from './diet_type.entity';

/**
 * Controller for managing diet type-related HTTP requests.
 */
@Controller('diet-type')
export class DietTypeController {
  constructor(private readonly dietTypeService: DietTypeService) {}

  /**
   * Creates a new diet type.
   */
  @Post()
  create(@Body() dietType: DietType): Promise<DietType> {
    return this.dietTypeService.create(dietType);
  }

  /**
   * Returns all diet types.
   */
  @Get()
  findAll(): Promise<DietType[]> {
    return this.dietTypeService.findAll();
  }

  /**
   * Returns a diet type by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<DietType> {
    return this.dietTypeService.findOne(id);
  }

  /**
   * Deletes a diet type by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.dietTypeService.remove(id);
  }
}
