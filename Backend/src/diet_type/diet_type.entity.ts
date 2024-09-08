import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DietType {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;
}
