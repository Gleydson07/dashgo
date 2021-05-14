import { Box } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawler } from "../../context/SidebarContext";
import { NavSidebar } from "./NavSidebar";

export function Sidebar(){
    const { isOpen, onClose } = useSidebarDrawler();

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })
    if(isDrawerSidebar){
        return (
        <Drawer 
            isOpen={isOpen} 
            placement="left" 
            onClose={onClose}
        >
            <DrawerOverlay>
                <DrawerContent bg="gray.800" p="4">
                    <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>
                        <DrawerBody>
                            <NavSidebar/>
                        </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>)
    }
    return (
        <Box as="aside" width="64" mr="8">
            <NavSidebar/>
        </Box>
    )
}