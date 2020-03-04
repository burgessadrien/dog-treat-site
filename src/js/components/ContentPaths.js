import DefaultContent from './content/Default';
import Blog from './content/Blog';
import Menu from './content/Menu';
import About from './content/About';
import Contact from './content/Contact';
import Checkout from './content/checkout/Checkout';
import Error from './content/Error';

export default [
    {
        path: "/",
        label: "Default",
        ContentComponent: DefaultContent,
        exact: true
    },
    {
        path: "/menu",
        label: "Menu",
        ContentComponent: Menu,
        isMenuItem: true
    },
    {
        path: "/blog",
        label: "Blog",
        ContentComponent: Blog,
        isMenuItem: false
    },
    {
        path: "/about",
        label: "About",
        ContentComponent: About,
        isMenuItem: true
    },
    {
        path: "/contact",
        label: "Contact",
        ContentComponent: Contact,
        isMenuItem: true
    },
    {
        path: "/checkout",
        label: "Checkout",
        ContentComponent: Checkout
    },
    {
        ContentComponent: Error // Make sure is last item
    }
]
