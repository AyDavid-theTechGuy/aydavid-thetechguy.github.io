const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container-fluid pt-2 pb-2 px-3">
		<a class="navbar-brand" href="https://aydavidttg.vercel.app">
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
				<li class="nav-item">
					<a class="nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item submenu">
					<span class="nav-link dropdown-btn">
						<span class="txt">Web Development</span>
						<span class="material-icons mi-24 drop-icon">expand_more</span>
					</span>
					<ul class="dropdown-content m-auto">
						<li><a class="submenu-item" href="./website-templates.html">Website Templates</a></li>
						<li>
							<a class="submenu-item" href="./frontend-projects.html">Frontend Projects</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="./graphics.html">Graphics</a>
				</li>
				<li class="nav-item submenu">
					<span class="nav-link dropdown-btn">
						<span class="txt">More</span>
						<span class="material-icons mi-24 drop-icon">expand_more</span>
					</span>
					<ul class="dropdown-content m-auto">
						<!--li>
							<a class="submenu-item" href="./blog.html">Blog</a>
						</li-->
						<li>
							<a class="submenu-item" href="./python.html">Python Basic Projects</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link ct" href="#connect">Connect</a>
				</li>
				</li>
			</ul>
		</div>
	</div>
    `;
