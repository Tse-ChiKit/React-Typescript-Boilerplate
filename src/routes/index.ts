import Home from 'Page/Home';
import ProductList from 'Page/ProductList';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/productList',
    component: ProductList,
  },
];

export default routes;
