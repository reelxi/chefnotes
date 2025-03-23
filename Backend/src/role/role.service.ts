import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

/**
 * Provides CRUD operations for Role entities.
 */
@Injectable()
export class RoleService {
  /**
   * Injects RoleRepository for database operations.
   */
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  /**
   * Creates and saves a new role to the database.
   * @param role - The role entity to be created.
   * @returns The newly created role entity.
   */
  async create(role: Role): Promise<Role> {
    return this.roleRepository.save(role);
  }

  /**
   * Retrieves all roles from the database.
   * @returns Array of role entities.
   */
  async findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  /**
   * Retrieves a specific role by its UUID.
   * @param id - UUID of the role to find.
   * @returns The found role or undefined if not found.
   */
  async findOne(id: string): Promise<Role> {
    return this.roleRepository.findOneBy({ id });
  }

  /**
   * Deletes a role by its UUID.
   * @param id - UUID of the role to delete.
   */
  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
