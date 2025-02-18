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
    name: string | null
    email: string | null

    setIp: (ip: string) => void
    setCountryInfo: (info: CountryInfo) => void
    resetStore: () => void

    setEmail: (ip: string) => void
    setName: (ip: string) => void
}

export interface signUpData {
    name: string
    email: string
    phone: string
    password: string
}
