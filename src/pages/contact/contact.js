import headerContent from '../../components/header-content/header-content';
import mainContent from '../../components/main-content/main-content';

const contactView = `
	<h1>Contact works</h1>
`;

const contactPage = () => {
	let message = 'Welcome to my contact.';
	headerContent('contact', message);
	mainContent(contactView);
};

export default module = contactPage;
