import { Link, Outlet, useLocation } from "react-router-dom";
import { DEFAULT_TEXT_COLOR, SECONDARY_COLOR } from "../../const";

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

    const liStyle = {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '1%',
        marginBottom: '1%',
        cursor: 'pointer',
        padding: '10px 20px',
    };

    const getLinkColor = (path) => {
        return location.pathname === path ? SECONDARY_COLOR : DEFAULT_TEXT_COLOR;
    };

    return (
        <main>
            <ul style={navStyle}>
                <li 
                    style={{
                        ...liStyle,
                        color: getLinkColor('/'),
                    }}
                >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                </li>
                <li 
                    style={{
                        ...liStyle,
                        color: getLinkColor('/experience'),
                    }}
                >
                    <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>Experience</Link>
                </li>
                <li 
                    style={{
                        ...liStyle,
                        color: getLinkColor('/projects'),
                    }}
                >
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    );
}

export {
    Layout as Navbar
};