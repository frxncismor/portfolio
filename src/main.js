import './style.scss';

const db = firebase.firestore();

const getProjects = () => {
	db.collection('projects').onSnapshot((collection) => {
		const projectsItems = document.getElementById('projects');
		let resp = collection.docs
			.map((project) => {
				let data = project.data();

				return `
				<div class="projects__item">
					<figure class="projects__item--image" >
						<img src="${data.image}">
					</figure>
					<div class="projects__item--information">
						<h2>${data.name}</h2>
						<p>${data.description}</p>
						<p class="information__link">Repo <a href="${data.repo_link}" target="_blank">here</a></p>
						<p class="information__link">You can see the project <a href="${data.project_link}" target="_blank">here</a></p>
						<p class="information__technologies">${data.technologies.join(', ')}</p>
					</div>
				</div>
				`;
			})
			.join('');
		projectsItems.innerHTML = resp;
	});
};

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

window.addEventListener('DOMContentLoaded', getProjects);
