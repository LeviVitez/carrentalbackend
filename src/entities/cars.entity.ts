import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Rentals from "./rentals.entity";
import { isDefined } from "class-validator";

@Entity()
export default class Cars {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    license_plate_number: String

    @Column()
    brand: string

    @Column()
    model: string

    @Column()
    daily_cost: number

    @Column()
    created_at: string

    @Column()
    updated_at: string

    @ManyToOne(()=>Rentals,(rentals)=>rentals.cars)
    car:Rentals
}