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
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Creates and saves a new user entity to the database.
   * @param user - User entity containing data to save
   * @returns A promise resolving to the saved User entity
   */
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Retrieves all user entities from the database.
   * @returns A promise resolving to an array of User entities
   */
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * Retrieves a single user entity by its ID.
   * @param id - ID of the user to retrieve
   * @returns A promise resolving to the User entity if found, otherwise undefined
   */
  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * Removes a user entity from the database based on its ID.
   * @param id - ID of the user to remove
   * @returns A promise resolving when the removal operation is complete
   */
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
