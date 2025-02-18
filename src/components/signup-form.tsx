import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SignupFormSchema } from '@/schema/schemas'
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
import { PhoneInput } from 'react-international-phone'
import { useSignUp } from '@/api'

interface FieldInterface {
    name: 'email' | 'phone' | 'password' | 'name'
    label: string
}

const fields: FieldInterface[] = [
    {
        name: 'name',
        label: 'Name',
    },
    {
        name: 'email',
        label: 'Email',
    },
    {
        name: 'phone',
        label: 'Phone',
    },
    {
        name: 'password',
        label: 'Password',
    },
]

export const SignupForm = () => {
    const { mutateAsync: signUpAsync } = useSignUp()

    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
        },
    })

    function onSubmit(values: z.infer<typeof SignupFormSchema>) {
        console.log(values)
        signUpAsync(values)
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
                            {name === 'phone' ? (
                                <PhoneInput
                                    defaultCountry="ua"
                                    value={field.value}
                                    onChange={(phone: string) => {
                                        field.onChange(phone)
                                    }}
                                    className="bg-light-gray px-6 py-2 rounded-2xl text-opacity-80 w-full text-base"
                                />
                            ) : (
                                <Input
                                    type={name}
                                    placeholder={name}
                                    className="bg-light-gray p-6 rounded-2xl text-opacity-80"
                                    {...field}
                                />
                            )}
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        ),
        [form.control]
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {fields.map(renderFormField)}

                <Button type="submit" className="w-full p-6 rounded-2xl">
                    Signup
                </Button>
            </form>
        </Form>
    )
}
