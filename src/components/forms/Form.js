import { Ionicons } from "@expo/vector-icons"
import { Button, FormControl, HStack, Input, VStack, Icon } from "native-base"
import { useState } from "react"

const Form = props =>{
    const {fetchRecipes, onInputChange} = props
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({})

    const onSubmit = () => {
        console.log('form submitted')
        fetchRecipes()
    }

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
                    InputLeftElement={
                    <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search'/>}/>}
                    
                    onChangeText={value => {
                        onInputChange(value)
                        setFormData({...formData, name: value})
                    }}
                    />
                    <Button onPress={onSubmit} startIcon={<Icon as={Ionicons} name='ios-search' />}>
                        Search
                    </Button>
                </HStack>
            </FormControl>
        </VStack>
    )
}

export default Form