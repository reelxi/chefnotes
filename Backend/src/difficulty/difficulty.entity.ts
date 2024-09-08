import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Difficulty {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  name: string;
}
