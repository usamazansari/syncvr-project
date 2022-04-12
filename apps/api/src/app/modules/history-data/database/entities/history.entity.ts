import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('history-data-2')
export class HistoryData extends BaseEntity {
  @PrimaryGeneratedColumn('rowid')
  id!: string;

  @Column()
  timestamp!: Date;

  @Column()
  value!: number;
}
