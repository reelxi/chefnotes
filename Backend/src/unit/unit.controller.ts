import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from './unit.entity';

/**
 * Controller for managing units of measurement.
 */
@Controller('unit')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  /**
   * Creates a new unit.
   */
  @Post()
  create(@Body() unit: Unit): Promise<Unit> {
    return this.unitService.create(unit);
  }

  /**
   * Retrieves all units.
   */
  @Get()
  findAll(): Promise<Unit[]> {
    return this.unitService.findAll();
  }

  /**
   * Retrieves a unit by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Unit> {
    return this.unitService.findOne(id);
  }

  /**
   * Deletes a unit by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.unitService.remove(id);
  }
}
