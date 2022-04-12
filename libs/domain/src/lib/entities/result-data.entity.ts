import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { HistoryDataEntity } from '.';

@Entity()
export class ResultDataEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  series!: string;

  @Column()
  last!: number;

  @OneToOne(() => HistoryDataEntity, history => history.result)
  @JoinColumn()
  history!: string;
}
