import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './unit.entity';

/**
 * Service handling logic related to units of measurement.
 */
@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
  ) {}

  /**
   * Creates and saves a new unit.
   */
  async create(unit: Unit): Promise<Unit> {
    return this.unitRepository.save(unit);
  }

  /**
   * Retrieves all units.
   */
  async findAll(): Promise<Unit[]> {
    return this.unitRepository.find();
  }

  /**
   * Retrieves a unit by ID.
   */
  async findOne(id: string): Promise<Unit> {
    return this.unitRepository.findOneBy({ id });
  }

  /**
   * Deletes a unit by ID.
   */
  async remove(id: string): Promise<void> {
    await this.unitRepository.delete(id);
  }
}
