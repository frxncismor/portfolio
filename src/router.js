import contact from './pages/contact/contact';
import home from './pages/home/home';
import portfolio from './pages/portfolio/portfolio';

class Router {
	constructor(routes) {
		this.routes = routes;
		this._loadInitialRoute();
	}

	loadRoute(path) {
		const matchedRoute = this._matchUrlToRoute(path);
		history.pushState({}, 'works', matchedRoute);
		switch (matchedRoute) {
			case '/':
				home();
				break;
			case '/portfolio':
				portfolio();
				break;
			case '/contact':
				contact();
				break;
			default:
				break;
		}
	}

	_matchUrlToRoute(path) {
		const matchedRoute = this.routes.find((route) => {
			return (path === '' ? '/' : `${path}`) === route.path;
		});
		return matchedRoute.path;
	}

	_loadInitialRoute() {
		// Esto que uso en el replace es una expresion regular. Simplemente devuelve el pathname sin el (/)
		const path = window.location.pathname.replace(/^\/(\w+)/, '$1');
		this.loadRoute(path);
	}
}

export default Router;
