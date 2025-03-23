import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstructionStep } from './instruction_step.entity';

/**
 * Service handling business logic related to instruction steps.
 */
@Injectable()
export class InstructionStepService {
  constructor(
    @InjectRepository(InstructionStep)
    private readonly instructionStepRepository: Repository<InstructionStep>,
  ) {}

  /**
   * Creates and saves a new instruction step.
   */
  async create(step: InstructionStep): Promise<InstructionStep> {
    return this.instructionStepRepository.save(step);
  }

  /**
   * Retrieves all instruction steps.
   */
  async findAll(): Promise<InstructionStep[]> {
    return this.instructionStepRepository.find({ relations: ['recipe'] });
  }

  /**
   * Retrieves a single instruction step by ID.
   */
  async findOne(id: string): Promise<InstructionStep> {
    return this.instructionStepRepository.findOne({
      where: { id },
      relations: ['recipe'],
    });
  }

  /**
   * Deletes an instruction step by ID.
   */
  async remove(id: string): Promise<void> {
    await this.instructionStepRepository.delete(id);
  }
}
