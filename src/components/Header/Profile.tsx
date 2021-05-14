import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true} :ProfileProps){
    return(
        <Flex alignItems="center">
            {showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Gleydson Albuquerque</Text>
                <Text color="gray.300" fontSize="small">
                gassantos.dev@gmail.com
                </Text>
            </Box>)}

            <Avatar
                size="md"
                name="Gleydson Albuquerque"
                src="https://github.com/gleydson07.png"
            />
        </Flex>
    );
}