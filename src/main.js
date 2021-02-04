import './style.scss';
import './components/side-menu/side-menu.scss';
import './components/header-content/header-content.scss';
import sideMenu from './components/side-menu/side-menu';
import portfolio from './pages/portfolio/portfolio';


const getProject = (project) => {
	db.collection('projects')
		.doc(project)
		.get()
		.then((doc) => {
			if (doc.exists) {
				console.log('Project data', doc.data());
			} else {
				console.log('No such document');
			}
		})
		.catch((error) => {
			console.error('Error getting document', error);
		});
};

const renderProject = () => {
	sideMenu();
};

const renderRoute = () => {
	let route = window.location.pathname;
	switch (route) {
		case '/':
			return portfolio();
			break;
		default:
			break;
	}
};

renderProject();
window.addEventListener('DOMContentLoaded', renderRoute());

