import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player1Id: string;

  @Column()
  player2Id: string;

  @Column()
  win: string;
}
