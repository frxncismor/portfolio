const sideMenu = (router) => {
	let sideMenu = document.getElementById('side-menu');
	sideMenu.innerHTML = `
        <h1 class="s-m__tle"><a href="#">Frxncismor</a></h1>
        <div class="s-m__con">
            <div class="con__pro">
                <img
                    src="https://user-images.githubusercontent.com/30633617/106676031-cbd44100-657b-11eb-88d6-d4b7775a047b.png"
                    alt="Frxncismor's photo"
                />
                <div class="con__pro--bio">
                    Hi, my name is Francisco Moreno and I'm a frontend developer. Welcome to my website!
                </div>
                <ul class="con__pro--soc">
                    <li class="soc__log">
                        <a rel="noopener" target="_blank" href="https://twitter.com/frxncismor"
                            ><img alt="twitter logo" src="https://img.icons8.com/android/24/2d4059/twitter.png"
                        /></a>
                    </li>
                    <li class="soc__log">
                        <a rel="noopener" target="_blank" href="https://github.com/frxncismor"
                            ><img alt="github logo" src="https://img.icons8.com/ios-glyphs/30/2d4059/github-2.png"
                        /></a>
                    </li>
                    <li class="soc__log">
                        <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/frxncismor/"
                            ><img alt="linkedin logo" src="https://img.icons8.com/ios-glyphs/30/2d4059/linkedin-2.png"
                        /></a>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li><button id="btnPortfolio">Portafolio</button></li>
                    <li><button id="btnContact">Contact</button></li>
                    <li><button id="btnHome">Home</button></li>
                    </ul>
            </div>
        </div>
    `;

	const $home = document.getElementById('btnHome');
	const $contact = document.getElementById('btnContact');
	const $portfolio = document.getElementById('btnPortfolio');

	$home.addEventListener('click', () => {
		router.loadRoute('');
	});

	$contact.addEventListener('click', () => {
		router.loadRoute('/contact');
	});

	$portfolio.addEventListener('click', () => {
		router.loadRoute('/portfolio');
	});
};

export default module = sideMenu;
