import React, {useContext } from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';


const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className='navbar'>
        {isAuth && <MyButton onClick={logout}>Выйти</MyButton> }
        <div className='navbar__links'>
            <Link to='/posts'>Посты</Link>
            <Link to='/about'>О себе</Link>
          </div>
        </div>
    );
};

export default Navbar;