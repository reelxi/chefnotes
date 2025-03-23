import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

/**
 * Controller responsible for handling HTTP requests related to users.
 * Provides endpoints for creating, retrieving, and deleting user records.
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Handles HTTP POST requests to create a new user.
   * @param user - User entity data provided in the request body.
   * @returns Promise resolving to the newly created user entity.
   */
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  /**
   * Handles HTTP GET requests to retrieve all users.
   * @returns Promise resolving to an array of user entities.
   */
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  /**
   * Handles HTTP GET requests to retrieve a single user by their UUID.
   * @param id - UUID of the user to retrieve.
   * @returns Promise resolving to the user entity if found.
   */
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  /**
   * Handles HTTP DELETE requests to remove a user by their UUID.
   * @param id - UUID of the user to delete.
   * @returns Promise resolving when the user deletion is complete.
   */
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
