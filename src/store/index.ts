import { StoreState } from '@/types'
import { create } from 'zustand'

export const useStore = create<StoreState>((set) => ({
    ip: '',
    countryInfo: null,
    email: null,
    name: null,

    setIp: (ip) => set({ ip }),
    setCountryInfo: (info) => set({ countryInfo: info }),
    setEmail: (email) => set({ email }),
    setName: (name) => set({ name }),

    resetStore: () => set({ ip: '', countryInfo: null }),
}))

export const useIp = () => useStore((state) => state.ip)
export const useCountryInfo = () => useStore((state) => state.countryInfo)

export const useUserData = () =>
    useStore((state) => {
        state.email, state.name
    })
