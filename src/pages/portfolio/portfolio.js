import headerContent from '../../components/header-content/header-content';
import mainContent from '../../components/main-content/main-content';
import './portfolio.scss';

const portfolioView = `
	<div class="m-c__fts">
        <ul>
			<li class="fts ave">All</li>
        </ul>
    </div>
    <div id="projects" class="pto"></div>
`;

const portfolioPage = () => {
	let message = 'Welcome to my portfolio. Here you will be able to look for my projects since the beginning of my career.';
	headerContent('portfolio', message);
	mainContent(portfolioView);
	getProjects();
};

const getProjects = () => {
	const db = firebase.firestore();
	db.collection('projects').onSnapshot((collection) => {
		const projectsItems = document.getElementById('projects');
		let resp = collection.docs
			.map((project) => {
				let data = project.data();

				return `
				<div class="pto__itm">
					<figure class="pto__itm--img" >
						<img alt="${data.name + 'image'}" src="${data.image}">
					</figure>
					<div class="pto__itm--inf">
						<h2>${data.name}</h2>
						<p class="inf__des">${data.description}</p>
						<p class="inf__l">Repo <a rel="noopener" href="${data.repo_link}" target="_blank">here</a></p>
						<p class="inf__l">You can see the project <a rel="noopener" href="${data.project_link}" target="_blank">here</a></p>
						<p class="inf__tec">${data.technologies.join(', ')}</p>
					</div>
				</div>
				`;
			})
			.join('');
		projectsItems.innerHTML = resp;
	});
};

export default module = portfolioPage;
