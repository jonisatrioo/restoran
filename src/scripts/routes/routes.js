import RestoList from '../view/pages/resto-list';
import Detail from '../view/pages/detail';

const routes = {
  '/': RestoList,
  '/list': RestoList,
  '/detail/:id': Detail,
};

export default routes;
