import './style.scss';
import './components/side-menu/side-menu.scss';
import './components/header-content/header-content.scss';
import sideMenu from './components/side-menu/side-menu';
import routes from './routes';
import Router from './router';

const router = new Router(routes);
const renderProject = (router) => {
	sideMenu(router);
};

window.addEventListener('DOMContentLoaded', renderProject(router));
