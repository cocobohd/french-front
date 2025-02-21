import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormSchema } from '@/schema/schemas'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from './ui/form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { PublicRoutes } from '@/types/router.enum'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '@/api'
import { setTokentToLocalStorage } from '@/utils/set-tokens'
import { Loader } from './loader.components'

interface FieldInterface {
    name: 'email' | 'password'
    label: string
}

const fields: FieldInterface[] = [
    {
        name: 'email',
        label: 'Email',
    },
    {
        name: 'password',
        label: 'Password',
    },
]

export const LoginForm = () => {
    const navigate = useNavigate()

    const { mutateAsync: loginAsync, isPending: LoginPending } = useLogin()

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        const res = await loginAsync(values)
        setTokentToLocalStorage(res)
        console.log(res)
    }

    const renderFormField = useCallback(
        ({ name, label }: FieldInterface) => (
            <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-base text-gray text-opacity-70 font-bold">
                            {label}
                        </FormLabel>
                        <FormControl>
                            <Input
                                type={name}
                                placeholder={name}
                                className="bg-light-gray p-6 rounded-2xl text-opacity-80"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        ),
        [form.control]
    )

    return (
        <>
            {LoginPending && <Loader />}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    {fields.map(renderFormField)}
                    <div className="w-full flex justify-end">
                        <button
                            onClick={() =>
                                navigate(PublicRoutes.FORGOT_PASSWORD)
                            }
                            className="text-base text-gray text-opacity-70 font-bold"
                        >
                            Forgot Password
                        </button>
                    </div>
                    <Button type="submit" className="w-full p-6 rounded-2xl">
                        Login
                    </Button>
                </form>
            </Form>
        </>
    )
}
