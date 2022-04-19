import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ResultEntity } from '.';

@Entity('history')
export class HistoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  payload!: number;

  @ManyToOne(() => ResultEntity)
  @JoinColumn()
  result!: string;
}
