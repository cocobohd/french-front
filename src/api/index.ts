import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useStore } from '@/store'
import { CountryInfo, signUpData } from '@/types'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '@/types/router.enum'

const apiBackend = axios.create({
    baseURL: 'https://french-backend.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

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

const signUp = async (signUpData: signUpData) => {
    const { data } = await apiBackend.post('/auth/signup', signUpData)
    return data
}

export const useSignUp = () => {
    const navigate = useNavigate()

    return useMutation({
        mutationKey: ['SignUp'],
        mutationFn: (signUpData: signUpData) => signUp(signUpData),
        onSuccess: () => {
            console.log('sign up')
            navigate(PublicRoutes.LOGIN)
        },
    })
}
