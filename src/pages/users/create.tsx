import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack} from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string()
        .required('Preencher campo e-mail')
        .email('Este não é um e-mail válido'),
    password: yup.string()
        .required('Preencher campo senha')
        .min(3, "Senha deve ter 3 ou mais caracteres")
        .max(8, "Senha deve ter no máximo 8 caracteres"),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref("password")
    ], "As senhas não conferem")
})

export default function CreateUser(){
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema),
    });
    const {errors} = formState;

    const handleCreateUser:SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
        <Box>
            <Header/>
            <Flex 
                w="100%" my="6" maxWidth={1480} mx="auto" px="6"
            >
                <Sidebar/>

                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    onSubmit={handleSubmit(handleCreateUser)}
                    bg="gray.800"
                    p={["6",
                    "8"]}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input 
                                name="name"
                                type="text" 
                                label="Nome Completo"
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input 
                                name="email" 
                                type="text" 
                                label="E-mail"
                                error={errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                            <Input 
                                name="password" 
                                type="password" 
                                label="Senha"
                                error={errors.password}
                                {...register('password')}
                            />
                            <Input 
                                name="password-confirmation" 
                                type="password" 
                                label="Confirmação da senha"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button
                                  as="a"
                                  colorScheme="whiteAlpha"
                                >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button 
                                type="submit" 
                                isLoading={formState.isSubmitting} 
                                colorScheme="pink"
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
