import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { DifficultyService } from './difficulty.service';
import { Difficulty } from './difficulty.entity';

/**
 * Controller for managing difficulty level endpoints.
 */
@Controller('difficulty')
export class DifficultyController {
  constructor(private readonly difficultyService: DifficultyService) {}

  /**
   * Creates a new difficulty level.
   */
  @Post()
  create(@Body() difficulty: Difficulty): Promise<Difficulty> {
    return this.difficultyService.create(difficulty);
  }

  /**
   * Retrieves all difficulty levels.
   */
  @Get()
  findAll(): Promise<Difficulty[]> {
    return this.difficultyService.findAll();
  }

  /**
   * Retrieves a difficulty level by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Difficulty> {
    return this.difficultyService.findOne(id);
  }

  /**
   * Deletes a difficulty level by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.difficultyService.remove(id);
  }
}
