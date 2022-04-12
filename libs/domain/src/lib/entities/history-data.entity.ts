import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { ResultDataEntity } from '.';

@Entity()
export class HistoryDataEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  payload!: number;

  @OneToOne(() => ResultDataEntity)
  @JoinColumn()
  result!: string;
}
