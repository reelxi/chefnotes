import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Difficulty } from './difficulty.entity';

/**
 * Service handling logic related to difficulty levels.
 */
@Injectable()
export class DifficultyService {
  constructor(
    @InjectRepository(Difficulty)
    private readonly difficultyRepository: Repository<Difficulty>,
  ) {}

  /**
   * Creates and saves a new difficulty level.
   */
  async create(difficulty: Difficulty): Promise<Difficulty> {
    return this.difficultyRepository.save(difficulty);
  }

  /**
   * Retrieves all difficulty levels.
   */
  async findAll(): Promise<Difficulty[]> {
    return this.difficultyRepository.find();
  }

  /**
   * Retrieves a specific difficulty level by ID.
   */
  async findOne(id: string): Promise<Difficulty> {
    return this.difficultyRepository.findOneBy({ id });
  }

  /**
   * Deletes a difficulty level by ID.
   */
  async remove(id: string): Promise<void> {
    await this.difficultyRepository.delete(id);
  }
}
