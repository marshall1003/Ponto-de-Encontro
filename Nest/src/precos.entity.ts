import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Precos {

  
  @Column('varchar', { length: 30 })
  produto: string;

  @Column('float')
  precoun: number;


  @PrimaryColumn('int')
  codprod: number;
}
