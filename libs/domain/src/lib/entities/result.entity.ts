import { BaseEntity, PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('result')
export class ResultEntity extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  series!: string;

  @Column()
  last!: number;
}
