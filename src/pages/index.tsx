import React from 'react'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData ={
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string()
    .required("Preencher campo e-mail")
    .email("E-mail deve possuir um valor válido"),
  password: yup.string()
    .required('Preencher campo senha')
    .min(3, "Senha deve ter 3 ou mais caracteres")
    .max(8, "Senha deve ter no máximo 8 caracteres"),
})

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing={4}>
          <Input 
            label="E-mail"
            name="email"
            type="email"
            id="email"
            error={errors.email}
            {...register('email')}
          />

          <Input 
            label="Senha"
            name="password"
            type="password"
            id="password"
            error={errors.password}
            {...register('password')}
          />

        </Stack>

        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          focusBorderColor="pink.500"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
