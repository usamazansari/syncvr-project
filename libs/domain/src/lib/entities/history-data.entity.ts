import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
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

  @OneToOne(() => ResultEntity, resultData => resultData.id)
  result!: string;
}
