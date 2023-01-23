import { Box, Button, Center, Heading, Text } from "native-base"

const RecipeContainer = ({ navigation, route }) => {
    const { label, uri } = route.params
    return(
        <>
            <Box width='100%' backgroundColor='red'>
                <Center py={10}>
                    <Text>{label}</Text>
                    <Button 
                    onPress={() =>
                    navigation.navigate('Web', {
                        label, uri
                    })}
                    >View Online</Button>
                </Center>
            </Box>
        </>
    )
}

export default RecipeContainer