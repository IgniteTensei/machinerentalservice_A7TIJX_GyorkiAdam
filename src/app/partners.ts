export interface Partner {
    pId: number;
    pName: string;
    pRepresentative: string;
    pTaxNumber: number;
    pCompanyRegistrationNumber: number;
    pHeadquarters: string;
    pBalance: number;
}

export const partners: Partner[] = [
    {
        pId: 1,
        pName: 'Cég1',
        pRepresentative: 'Vezető1',
        pTaxNumber: 12312312312,
        pCompanyRegistrationNumber: 2211444444,
        pHeadquarters: 'Székhely1',
        pBalance: 15000
    },
    {
        pId: 2,
        pName: 'Cég2',
        pRepresentative: 'Vezető2',
        pTaxNumber: 12312312321,
        pCompanyRegistrationNumber: 3322555555,
        pHeadquarters: 'Székhely2',
        pBalance: 60000
    },
    {
        pId: 3,
        pName: 'Cég3',
        pRepresentative: 'Vezető3',
        pTaxNumber: 12312312322,
        pCompanyRegistrationNumber: 1122333333,
        pHeadquarters: 'Székhely3',
        pBalance: 70000
    }
];