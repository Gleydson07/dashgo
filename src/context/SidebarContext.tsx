import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawlerProviderProps{
    children: ReactNode;
}

type SidebarDrawlerContextData = UseDisclosureReturn;

const SidebarDrawlerContext = createContext({} as SidebarDrawlerContextData);

export function SidebarDrawlerContextProvider({ children }:SidebarDrawlerProviderProps){
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawlerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawlerContext.Provider>
    )
};

export const useSidebarDrawler = () => useContext(SidebarDrawlerContext);