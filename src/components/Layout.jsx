import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

    const location = useLocation()
    //console.log(location)
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-orange-400 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
                <nav className='mt-10 '>
                    <Link className={`${location.pathname === '/' ? 'text-orange-300' : 'text-white'} 
                    text-2xl block mt-2 hover:text-orange-700`} 
                    to="/"> Clientes </Link> 
                    <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-orange-300' : 'text-white'} 
                    text-2xl block mt-2 hover:text-orange-700`} 
                    to="/clientes/nuevo"> Nuevos clientes </Link> 
                </nav>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout