import { FormControl, HStack, Input, VStack } from "native-base"
import { useState } from "react"

const Form = () =>{
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})

    return(
        <VStack space={2} width='100%' py={5}>
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Ingredient Search</FormControl.Label>
                <HStack width='100%' space={2}>
                    <Input
                    placeholder="i.e beef, chicken, pork"
                    variant='filled'
                    bg='gray.200'
                    px={3}
                    width='85%'
                    />
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default Form