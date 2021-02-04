const mainContent = (content) => {
    let mainContent = document.getElementById('content');
    mainContent.innerHTML = `
        <div>
            ${content}
        </div>
    `
}

export default module = mainContent;