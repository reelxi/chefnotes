import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { InstructionStepService } from './instruction_step.service';
import { InstructionStep } from './instruction_step.entity';

/**
 * Controller for managing recipe instruction steps.
 */
@Controller('instruction-step')
export class InstructionStepController {
  constructor(
    private readonly instructionStepService: InstructionStepService,
  ) {}

  /**
   * Creates a new instruction step.
   */
  @Post()
  create(@Body() step: InstructionStep): Promise<InstructionStep> {
    return this.instructionStepService.create(step);
  }

  /**
   * Retrieves all instruction steps.
   */
  @Get()
  findAll(): Promise<InstructionStep[]> {
    return this.instructionStepService.findAll();
  }

  /**
   * Retrieves a single instruction step by ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<InstructionStep> {
    return this.instructionStepService.findOne(id);
  }

  /**
   * Deletes an instruction step by ID.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.instructionStepService.remove(id);
  }
}
