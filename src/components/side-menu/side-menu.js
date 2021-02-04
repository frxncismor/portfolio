const sideMenu = () => {
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
                        <a target="_blank" href="https://twitter.com/frxncismor"
                            ><img src="https://img.icons8.com/android/24/2d4059/twitter.png"
                        /></a>
                    </li>
                    <li class="soc__log">
                        <a target="_blank" href="https://github.com/frxncismor"
                            ><img src="https://img.icons8.com/ios-glyphs/30/2d4059/github-2.png"
                        /></a>
                    </li>
                    <li class="soc__log">
                        <a target="_blank" href="https://www.linkedin.com/in/frxncismor/"
                            ><img src="https://img.icons8.com/ios-glyphs/30/2d4059/linkedin-2.png"
                        /></a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    `
}

export default module = sideMenu;