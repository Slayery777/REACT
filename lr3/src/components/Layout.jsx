import { Outlet,Link } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/posts">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
        </header>

        <main className="container">
            <Outlet />
        </main>

        </>
    )
}

export {Layout}
