import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ResultDataEntity } from '.';

@Entity('history')
export class HistoryDataEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  payload!: number;

  @OneToOne(() => ResultDataEntity, resultData => resultData.id)
  result!: string;
}
