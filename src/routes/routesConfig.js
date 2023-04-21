import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import FavoritesPerson from '@containers/FavoritesPerson';
import SearchPage from '@containers/SearchPage';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [

    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/favorites',
        element: <FavoritesPerson />
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]

export default routesConfig