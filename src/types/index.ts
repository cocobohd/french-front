export interface CountryInfo {
    country: string
    city: string
    region: string
    timezone: string
    countryCode: string
}

export interface StoreState {
    ip: string
    countryInfo: CountryInfo | null
    setIp: (ip: string) => void
    setCountryInfo: (info: CountryInfo) => void
    resetStore: () => void
}
