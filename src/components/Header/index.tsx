import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav';
import { useSidebarDrawler } from '../../context/SidebarContext'
import { RiMenuLine } from 'react-icons/ri'

export function Header(){
    const { onOpen } = useSidebarDrawler();
 
    const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
    })

    return (
        <Flex
          as="header"
          width="100%"
          maxWidth={1480}
          height="20"
          mx="auto"
          marginTop="4"
          px="6"
          alignItems="center"
        >

            { !isWideVersion && (
              <IconButton 
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine}/>}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
                mr="2"
              >
                  
              </IconButton>
            )}

            <Logo/>

            {isWideVersion && <SearchBox />}


            <Flex alignItems="center" ml="auto">

              <NotificationsNav/>

              <Profile showProfileData={isWideVersion}/>

            </Flex>
        </Flex>
    )
}