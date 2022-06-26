import React, { useContext } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import About from '../../pages/About';
import Error from '../../pages/Error';
import PostIdPage from '../../pages/PostIdPage';
import Posts from '../../pages/Posts';
import { publicRoutes, privateRoutes } from '../../router/routes';
import Loader from './Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    } 
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact} />
                )}
                <Route path='/*' element={<Navigate replace to='/posts'/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        element={<route.component />}
                        path={route.path}
                        exact={route.exact} />
                )}
                <Route path='/*' element={<Navigate replace to='/login'/>}/>
            </Routes>



    );
};

export default AppRouter;