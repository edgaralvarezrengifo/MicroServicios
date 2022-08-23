import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
   @PrimaryGeneratedColumn()
   id:number;

   @Column()
   Nombre:string;

   @Column()
   Descripcion:string;

   @Column()
   Imagen:string;

   @Column()
   Cantidad:number;

   @Column()
   Precio:number;

}