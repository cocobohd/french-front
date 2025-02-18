import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useStore } from '@/store'
import { CountryInfo } from '@/types'

const api = axios.create({
    baseURL: 'http://ip-api.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

const getIp = async () => {
    const { data } = await axios.get('https://api.ipify.org?format=json')
    return data
}

const getCountry = async (ip: string) => {
    const { data } = await api.get(`/json/${ip}`)
    return data
}

export const useGetIp = () => {
    const setIp = useStore((state) => state.setIp)

    return useQuery({
        queryKey: ['ip'],
        queryFn: getIp,
        meta: {
            onSuccess: (data: { ip: string }) => {
                setIp(data.ip)
            },
        },
    })
}

export const useGetCountry = (ip: string) => {
    const setCountryInfo = useStore((state) => state.setCountryInfo)

    return useQuery({
        queryKey: ['country', ip],
        queryFn: () => getCountry(ip),
        enabled: !!ip,
        meta: {
            onSuccess: (data: CountryInfo) => {
                setCountryInfo(data)
            },
        },
    })
}
