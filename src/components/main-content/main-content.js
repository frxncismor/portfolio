import './main-content.scss';
const mainContent = (content) => {
    let mainContent = document.getElementById('content');
    mainContent.innerHTML = `
        <div class="con">
            ${content}
        </div>
    `
}

export default module = mainContent;