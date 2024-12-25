import Link from "next/link"
import { NavbarWrapper } from "./styles"

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <Link href={"/"}>Home 🏠</Link>
        </NavbarWrapper>
    )
}