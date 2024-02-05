import ApartmentIcon from '@mui/icons-material/Apartment';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const MainMenu = [
        {
            title: "Cities",
            icon: <ApartmentIcon color='primary.contrastText' />,
            path: "cities",
            nestedMenu: null
        },
        {
            title: "Currencies",
            icon: <CurrencyExchangeIcon color='primary.contrastText' />,
            path: "currency",
            nestedMenu: null
        }
]

export default MainMenu;