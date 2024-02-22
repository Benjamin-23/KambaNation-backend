import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categories: string;

  @Column({ nullable: true })
  price: string;

  @Column({ nullable: true })
  units: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  image: string;
}
