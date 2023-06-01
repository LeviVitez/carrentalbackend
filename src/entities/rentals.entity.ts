import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Cars from "./cars.entity";

@Entity()
export default class Rentals{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    start_date: String

    @Column()
    end_date: String

    @OneToMany(()=> Cars, (cars) => cars.car)
    cars:Cars[]
}