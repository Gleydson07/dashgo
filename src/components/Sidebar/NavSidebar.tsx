import { Stack } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function NavSidebar(){
    return (
        <Stack spacing="12" alignItems="flex-start">
            <NavSection title="GERAL">
                <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink href="/users" icon={RiContactsLine}>Usuários</NavLink>
            </NavSection>
            
            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink href="/automation" icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}