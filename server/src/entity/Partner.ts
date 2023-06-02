import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerDTO } from '../../../models';
import { Machine } from './Machine';
import { Rental } from './Rental';

@Entity()
export class Partner implements PartnerDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    pName: string;

    @Column({ nullable: true, type: 'text' })
    pRepresentative: string;

    @Column()
    pTaxNumber: number;

    @Column()
    pCompanyRegistrationNumber: number;

    @Column({ nullable: true, type: 'text' })
    pHeadquarters: string;

    @Column()
    pBalance: number;

    @OneToMany(() => Rental, rental => rental.rPartner)
    pRental: Rental[];
    
}
