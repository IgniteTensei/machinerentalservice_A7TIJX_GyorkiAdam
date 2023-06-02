export interface MachineDTO {
    id: number;
    mName: string;
    mBrand: string;
    mType: string;
    mPerformance: number;
    mWeight: number;
    mSecurityDeposit: number;
    mDailyRentalFee: number;
    mRental: RentalDTO;
}

export interface PartnerDTO {
    id: number;
    pName: string;
    pRepresentative: string;
    pTaxNumber: number;
    pCompanyRegistrationNumber: number;
    pHeadquarters: string;
    pBalance: number;
    pRental: RentalDTO[];
}

export interface RentalDTO {
    id: number;
    rMachine: MachineDTO;
    rPartner: PartnerDTO;
}
