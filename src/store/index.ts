import { StoreState } from '@/types'
import { create } from 'zustand'

export const useStore = create<StoreState>((set) => ({
    ip: '',
    countryInfo: null,

    setIp: (ip) => set({ ip }),
    setCountryInfo: (info) => set({ countryInfo: info }),

    resetStore: () => set({ ip: '', countryInfo: null }),
}))

export const useIp = () => useStore((state) => state.ip)
export const useCountryInfo = () => useStore((state) => state.countryInfo)
