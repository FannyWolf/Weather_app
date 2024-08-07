import React from 'react';

import { Navigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { useAppSelector } from '../../redux/hooks';

interface IProps {
    // Вместо outlet будут приходить компоненты, которые мы будем пробрасывать в 
    // эту обертку-фильтр
    outlet: JSX.Element;
}

export default function ProtectedRoute({ outlet }: IProps) {
    const { user, isLoading } = useAppSelector(store => store.user);
    const token = localStorage.getItem('user-token');

    if (isLoading) {
        return <Loader />;
    }

    if (token !== null && user.username) {
        return outlet;
    }

    // Через Navigate из библиотеки react-router-dom мы делаем навигацию
    return <Navigate to="/login" />;
}
