import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav>
				<div class="nav-wrapper">
					<a href="#" class="brand-logo">
						Itravel
					</a>
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li>
							<a href="/auth">Log In With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
