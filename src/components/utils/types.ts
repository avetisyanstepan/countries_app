
interface INativeLanguage {
    official: string
}

interface INativeName {
    eng: INativeLanguage
}

interface ICountryName {
    common: string
    nativeName: INativeName
}
interface IFlagurl {
    png?: string
    svg?: string
}

export interface ICountry {
    name: ICountryName
    population: string
    flags: IFlagurl
    region: string
    capital: [string]
    subregion?: string
    borders?: [string]


}