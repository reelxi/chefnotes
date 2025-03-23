import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';

/**
 * Controller responsible for handling HTTP requests related to roles.
 * Provides endpoints for managing role records.
 */
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  /**
   * Creates a new role via POST request.
   * @param role - Role data provided in the request body.
   * @returns The newly created role entity.
   */
  @Post()
  create(@Body() role: Role): Promise<Role> {
    return this.roleService.create(role);
  }

  /**
   * Retrieves all roles via GET request.
   * @returns Array of role entities.
   */
  @Get()
  findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  /**
   * Retrieves a role by UUID via GET request.
   * @param id - UUID of the role to retrieve.
   * @returns The requested role entity.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Role> {
    return this.roleService.findOne(id);
  }

  /**
   * Deletes a role by UUID via DELETE request.
   * @param id - UUID of the role to delete.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.roleService.remove(id);
  }
}
