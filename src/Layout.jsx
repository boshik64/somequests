
import { grey } from '@mui/material/colors';
import { NavLink, Outlet } from 'react-router-dom';



function Layout() {

    return (
        <div>

            <header style={{ width: 'max-content', padding: 20, marginBottom: 50, background: 'grey', fontWeight: 'bold' }}>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })} to="/">Home</NavLink> <br />
                <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })} to="/Profile">Profile</NavLink> <br />
                <NavLink style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })} to="/Dialogs">Dialogs</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer style={{ width: '100%', background: 'grey', position: 'absolute', bottom: 0 }}>
                <p style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>footer</p>
            </footer>


        </div >
    )


}

export default Layout;
