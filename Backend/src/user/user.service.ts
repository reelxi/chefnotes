import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

/**
 * UserService provides methods to manage user entities in the application.
 * It interacts with the database via TypeORM repository methods for CRUD operations.
 */
@Injectable()
export class UserService {
  /**
   * Constructs the UserService and injects the TypeORM User repository.
   * @param userRepository - Repository for User entity database operations
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Creates and persists a new User entity in the database.
   * @param user - The user entity containing user details
   * @returns The created user entity after saving to the database
   */
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Retrieves all User entities stored in the database.
   * @returns An array containing all user entities
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Finds and returns a User entity based on the provided ID.
   * @param id - Unique identifier of the user
   * @returns The user entity if found, otherwise undefined
   */
  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * Deletes a user entity from the database by the specified ID.
   * @param id - Unique identifier of the user to delete
   * @returns Resolves when the deletion is successfully completed
   */
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
