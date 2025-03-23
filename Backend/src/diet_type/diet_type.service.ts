import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DietType } from './diet_type.entity';

/**
 * Service handling business logic for DietType entities.
 */
@Injectable()
export class DietTypeService {
  constructor(
    @InjectRepository(DietType)
    private readonly dietTypeRepository: Repository<DietType>,
  ) {}

  /**
   * Creates and saves a new diet type.
   */
  async create(dietType: DietType): Promise<DietType> {
    return this.dietTypeRepository.save(dietType);
  }

  /**
   * Retrieves all diet types.
   */
  async findAll(): Promise<DietType[]> {
    return this.dietTypeRepository.find();
  }

  /**
   * Retrieves a single diet type by ID.
   */
  async findOne(id: string): Promise<DietType> {
    return this.dietTypeRepository.findOneBy({ id });
  }

  /**
   * Deletes a diet type by ID.
   */
  async remove(id: string): Promise<void> {
    await this.dietTypeRepository.delete(id);
  }
}
