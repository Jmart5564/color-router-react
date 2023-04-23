import { NavLink } from 'react-router-dom';


export default function NavLinks() {
  return (
    <header>
      <nav>
        <NavLink className='forest-green' to='/rgb/34/139/34'>
            Forest Green
        </NavLink>
        <NavLink className='maroon' to='/rgb/128/0/0'>
            Maroon
        </NavLink>
        <NavLink className='orchid' to='/rgb/218/112/214'>
            Orchid
        </NavLink>
      </nav>
    </header>
  );
}