import headerContent from '../../components/header-content/header-content';
import mainContent from '../../components/main-content/main-content';

const homeView = `
	<h1>Home works</h1>
`;

const homePage = () => {
	let message = 'Welcome to my home.';
	headerContent('home', message);
	mainContent(homeView);
};

export default module = homePage;
