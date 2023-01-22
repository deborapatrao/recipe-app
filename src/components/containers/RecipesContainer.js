import { Container, Center } from "native-base"
import { useState } from "react"
import Form from '../forms/Form'

const RecipesContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState(null)

    return(
        <Container>
            <Center px={4}>
                <Form />
            </Center>
        </Container>
    )
}

export default RecipesContainer