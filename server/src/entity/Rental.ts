import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RentalDTO } from '../../../models';
import { Machine } from './Machine';
import { Partner } from './Partner';

@Entity()
export class Rental implements RentalDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Machine, (machine) => machine.mRental)
    rMachine: Machine;

    @ManyToOne(() => Partner, (partner) => partner.pRental, { eager: true })
    rPartner: Partner;
}
