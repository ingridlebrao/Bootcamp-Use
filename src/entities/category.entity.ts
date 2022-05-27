/* eslint-disable indent */
/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: false })
  name!: string;
}
