import { Box, Center, Heading, VStack, Image, Button, Divider } from "native-base"

const RecipeCard = props => {
    const { image, label, navigation, source, uri} = props
    return(
        <Box borderWidth={1} borderRadius='md' pb={5} mb='10'>
            <VStack space ={4} divider={<Divider />}>
                <Center>
                    <Heading size='xs'>{label}</Heading>
                </Center>
            </VStack>

            <Box>
                <Image alt={label} source={{ uri:image }} size='2xl'/> 
            </Box>

            <Box px={4} pb={4}>
                <Button variant='ghost'>
                    View
                </Button>
            </Box>
        </Box>
    )
}

export default RecipeCard