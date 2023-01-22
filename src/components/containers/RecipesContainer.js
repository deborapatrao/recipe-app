import { Container, Center } from "native-base"
import { useEffect, useState } from "react"
import Form from '../forms/Form'
import Loading from "../layout/Loading"
import RecipeList from "../lists/RecipeList"
import { getRecipes } from "../services/api"

const RecipesContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [ingredient, setIngredient] = useState(null)


    const data = [
        {
          recipe: {
            image:
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            label: 'Roast sirloin of beef',
            source: 'BBC Good Food',
            uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_62ebc9d43ec31eace0c035db993eb1f5'
          }
        },
        {
          recipe: {
            image:
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            label: 'Beef Tea',
            source: 'Epicurious',
            uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_0f3a359371750f372c7ac3c1459751d9'
          }
        }
      ]
      
    useEffect(() => {
        setRecipes(data)
    }, [])

    const fetchRecipes = () => {
        setIsLoading (true)

        // getRecipes(ingredient).then(
        //     recipes => {
        //         setRecipes(recipes)
        //         setIsLoading(false)
        //     },
        //     error =>{
        //         alert('Error', `Something went wrong! ${error}`)
        //         console.log(error)
        //     }
        // )

        setRecipes(data)
        setIsLoading(false)
    }

    const handleInputChange = ingredient => {
        setIngredient(ingredient)
    }

    return(
        <Container>
            <Center px={4}>
                <Form onInputChange={handleInputChange} fetchRecipes={fetchRecipes}/>
                {isLoading? <Loading /> : <RecipeList recipes={recipes}/>}
            </Center>
        </Container>
    )
}

export default RecipesContainer