import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({name : 'blogs'})
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title  :string;

    @Column({
        type : 'longtext'
    }) 
    body:string;
    
    @Column({
        type : 'longtext'
    }) 
    keywords:string;
    
    @Column() 
    author:string;

    @Column({
      type : 'longtext'
    }) 
    image:string;

    @Column('timestamp') 
    created_at:Date | string;
    
    @Column('timestamp') 
    updated_at:Date | string;
}
