import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({name : 'users'})
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name  :string;

    @Column({ unique: true })
    email:string;
    
    @Column() 
    password:string;
    
    @Column({
      nullable: true
    }) 
    remember_token:string;

    @Column('boolean') 
    role:boolean;

    @Column({
      nullable: true,
      type : 'longtext',
    }) 
    avatar:string;

    @Column('timestamp') 
    email_verified_at : Date | string;

    @Column('timestamp') 
    created_at:Date | string;
    
    @Column('timestamp') 
    updated_at:Date | string;
}
