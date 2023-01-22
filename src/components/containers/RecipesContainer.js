import { Container, Center } from "native-base"
import { useState } from "react"
import Form from '../forms/Form'

const RecipesContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState(null)

    const handleInputChange = ingredient => {
        setIngredient(ingredient)
    }

    console.log('ingredient', ingredient)

    return(
        <Container>
            <Center px={4}>
                <Form onInputChange={handleInputChange}/>
            </Center>
        </Container>
    )
}

export default RecipesContainer