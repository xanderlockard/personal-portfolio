import { Link, Outlet, useLocation } from "react-router-dom";
import { DEFAULT_TEXT_COLOR, SECONDARY_COLOR } from "../../const";
import {useState, useEffect} from 'react'
import {
    MenuContent,
    MenuRoot,
    MenuTrigger,
  } from "../ui/menu";
import { Button } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

function Layout() {
    const location = useLocation();

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27445D',
        listStyleType: 'none',
        padding: 0,
        margin: 0
    };

    const menuNavStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#27445D',
        listStyleType: 'none',
        padding: '1rem 0',
        margin: 0
    };

    const menuContentStyle = {
        backgroundColor: '#27445D',
        border: '2px solid #1B3A4B',
        borderRadius: '8px',
        padding: '0.5rem',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const liStyle = {
        margin: '0.5rem 0',
        cursor: 'pointer',
        padding: '0.75rem 1.5rem',
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const getLinkColor = (path) => {
        return location.pathname === path ? SECONDARY_COLOR : DEFAULT_TEXT_COLOR;
    };

    return (
        <main>
            <ul style={navStyle}>
                {windowWidth > 600 ? (<><li style={{ ...liStyle, color: getLinkColor('/') }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </li>
                <li style={{ ...liStyle, color: getLinkColor('/experience') }}>
                    <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>Experience</Link>
                </li>
                <li style={{ ...liStyle, color: getLinkColor('/projects') }}>
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link>
                </li></>): (<>
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button variant="plain" size="sm" style={{ margin: '2% 2% 2% 90%', border: 0 }}>
                            <RxHamburgerMenu color={SECONDARY_COLOR}/>
                        </Button>
                    </MenuTrigger>
                    <MenuContent style={menuContentStyle}>
                        <ul style={menuNavStyle}>
                            <li style={{ ...liStyle, color: getLinkColor('/') }}>
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                            </li>
                            <li style={{ ...liStyle, color: getLinkColor('/experience') }}>
                                <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>Experience</Link>
                            </li>
                            <li style={{ ...liStyle, color: getLinkColor('/projects') }}>
                                <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link>
                            </li>
                        </ul>
                    </MenuContent>
                </MenuRoot></>)}
            </ul>
            <Outlet />
        </main>
    );
}

export {
    Layout as Navbar
};