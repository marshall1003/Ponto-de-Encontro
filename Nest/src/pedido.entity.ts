import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pedidos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  mesa: number;

  @Column("varchar", { length: 16 })
  produto: string;


  @Column('int')
  quantidade: number;

  @Column('float')
  precoun: number;

  @Column('float')
  precototal: number;

}
