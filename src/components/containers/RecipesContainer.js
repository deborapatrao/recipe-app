import { Container, Center } from "native-base"
import { useState } from "react"
import Form from '../forms/Form'
import { getRecipes } from "../services/api"

const RecipesContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState(null)

    const fetchRecipes = () => {
        setIsLoading (true)

        getRecipes(ingredient).then(
            recipes => {
                setRecipes(recipes)
                setIsLoading(false)
            },
            error =>{
                alert('Error', `Something went wrong! ${error}`)
                console.log(error)
            }
        )
    }

    const handleInputChange = ingredient => {
        setIngredient(ingredient)
    }

    return(
        <Container>
            <Center px={4}>
                <Form onInputChange={handleInputChange} fetchRecipes={fetchRecipes}/>
            </Center>
        </Container>
    )
}

export default RecipesContainer