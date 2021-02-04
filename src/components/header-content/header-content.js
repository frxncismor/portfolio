import './header-content.scss';
const headerContent = (title, description) => {
    let headerContent = document.getElementById('header');
    headerContent.innerHTML = `
        <div class="m-h__txt">
            <h1>${title}</h1>
            <p>${description}</p>
            <a class="btn">Hire me</a>
        </div>
    `
}

export default module = headerContent;