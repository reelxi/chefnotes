import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngredientCategory {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;
}
