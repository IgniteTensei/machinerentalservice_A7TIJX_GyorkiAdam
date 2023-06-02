import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MachineDTO } from '../../../models';
import { Partner } from './Partner';
import { Rental } from './Rental';

@Entity()
export class Machine implements MachineDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    mName: string;

    @Column({ nullable: true, type: 'text' })
    mBrand: string;

    @Column({ nullable: true, type: 'text' })
    mType: string;

    @Column()
    mPerformance: number;

    @Column()
    mWeight: number;

    @Column()
    mSecurityDeposit: number;

    @Column()
    mDailyRentalFee: number;

    @OneToOne(() => Rental, (rental) => rental.rMachine)
    mRental: Rental;
}