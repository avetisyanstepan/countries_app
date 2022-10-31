
interface ICountryName {
    common: string
}
interface IFlagurl {
    png?: string,
    svg?: string
}

export interface ICountry {
    name: ICountryName,
    population: string,
    flags: IFlagurl,
    region: string
    capital: [string]
}