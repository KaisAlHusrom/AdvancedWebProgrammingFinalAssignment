import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'

//pages
import { CitiesPage, ErrorPage, NotFoundPage, MainPage, CurrenciesPage } from '../pages';
import AppCard from '../Components/AppCard';




//Router
const router = createBrowserRouter(
    createRoutesFromElements(
        //All App Routes
        <>
        <Route path='/' element={<AppCard />} errorElement={<ErrorPage />}>
            <Route path="/" element={<MainPage />} />
            <Route path="cities" element={<CitiesPage />} />
            <Route path="currency" element={<CurrenciesPage />} />


            <Route path="*" element={<NotFoundPage />} />
        </Route>
        </>
    )
)


const CustomRouterProvider = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default CustomRouterProvider;