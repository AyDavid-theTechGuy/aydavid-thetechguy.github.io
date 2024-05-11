const header = document.querySelector(".header");

header.innerHTML = `
    <!--NAVIGATION BAR-->
    <nav class="navbar navbar-expand-lg fixed-top pt-2 pb-2">
        <div class="container-fluid pt-2 pb-2">
            <a class="navbar-brand" href="https://aydavid-thetechguy.github.io">
                <span class="material-icons mi-36">code</span>
                <span class="brand-name">AyDavid</span>
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="material-icons mi-24 def-col">menu</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item nl">
                        <a class="nav-link" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">Web Development</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li>
                                <a class="submenu-item" href="./frontend-projects.html">Frontend Projects</a>
                            </li>
                            <li><a class="submenu-item" href="./website-templates.html">Website Templates</a></li>
                        </ul>
                    </li>
					<li class="nav-item nl">
                        <a class="nav-link" href="./visuals.html">Visuals</a>
                    </li>
                    <li class="nav-item submenu">
                        <span class="nav-link dropdown-btn">
                            <span class="txt">More</span>
                            <span class="material-icons mi-24 drop-icon">expand_more</span>
                        </span>
                        <ul class="dropdown-content m-auto">
                            <li><a class="submenu-item" href="./python.html">Python Basic Projects</a></li>
							<li><a class="submenu-item" href="./index.html#connect">Connect</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <br />
    <!--PROFILE-->
    <div class="profile-card hidden">
        <button class="close-profile">&times;</button>
        <div class="profile-image">
            <img src="./assets/img/aydavid.png" alt="" class="pic" />
        </div>
        <div class="data">
            <h4>Sowunmi Ayoola</h4>
            <p class="text-center">Web Developer and Graphics Designer</p>
        </div>
        <div class="row">
            <span>
				<a href="https://github.com/aydavid-thetechguy">
                    <i class="bi bi-github fs-3 text-dark"></i> 
				</a>&nbsp;
                <a href="https://wa.me/2348084634310">
                    <i class="bi bi-whatsapp fs-3 text-success"></i> 
				</a>&nbsp;
				<a href="https://facebook.com/ayoola.sowunmi.39">
                    <i class="bi bi-facebook fs-3 text-primary"></i> 
				</a>&nbsp;
				<a href="https://x.com/@aydavid01">
                    <i class="bi bi-twitter-x fs-3 text-dark"></i> 
				</a>
			</span>
        </div>
    </div>
    <div class="overlay hidden"></div>
    `;
