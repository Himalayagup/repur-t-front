<script setup>
const is_expanded = ref(true)

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
}
//hide nav
const hideNav = () => {
	const navbar = document.getElementsByClassName('navbar-collapse')[0]
	navbar.classList.remove('show')
}
</script>

<template>
	<!-- <div> -->
		<aside :class="`${is_expanded ? 'is-expanded' : ''}`"  class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div class="menu-toggle-wrap">
				<p class="menu-toggle" @click="ToggleMenu">
					<span class="material-icons">keyboard_double_arrow_right</span>
				</p>
			</div>

			<h3>Menu</h3>
			<div class="menu">
				<NuxtLink to="/blogs" class="url-link" @click="hideNav">
					<span class="text">Blogs</span>
				</NuxtLink>
				<NuxtLink to="/register" class="url-link" @click="hideNav">
					<span class="text">Register</span>
				</NuxtLink>
				<NuxtLink to="/login" class="url-link" @click="hideNav">
					<span class="text">Login</span>
				</NuxtLink>
			</div>

			<!-- <div class="flex"></div> -->
		</aside>
	<!-- </div> -->
</template>

<style lang="scss" scoped>
@import '~/assets/sass/vendors/bootstrap.scss';

aside {
	display: flex;
	flex-direction: column;

	background-color: $dark;
	color: $light;

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
            cursor: pointer;
			.material-icons {
				font-size: 2rem;
				color: $light;
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: $success;
					transform: translateX(0.5rem);
				}
			}

			@media (max-width: 900px) {
				display: none;
			}
		}
	}

	h3, .url-link .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: $grey;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.url-link {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: $light;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: $light;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: $dark-alt;

				.material-icons, .text {
					color: $success;
				}
			}

			&.router-link-exact-active {
				background-color: $dark-alt;
				border-right: 5px solid $success;

				.material-icons, .text {
					color: $success;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: $grey;
		}
	}

	&.is-expanded {
		width: 250px;

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .url-link .text {
			opacity: 1;
		}

		.url-link {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}

		@media (max-width: 1200px) {
			width: 250px;
		}

		@media (max-width: 900px) {
			width: 190px;
			
		}

		@media (min-width: 901px) {
			display: block;
			position: relative;
			flex-basis: 250px;
			flex-grow: 0;
		}
	}

	

	@media (max-width: 900px) {
		display: block;
		width: 190px;
	}
}
.navbar-collapse{
	z-index: 99;
	position: absolute;

	@media (max-width: 900px) {
		transform: translateX(-200px);
	}
	
	@media (min-width: 901px) {
		position: sticky;
		display: block;
		flex-basis: 65px;
		width: 65px !important;
	}
}

.show{
	@media (max-width: 900px) {
		transform: translateX(0px);
	}
}

</style>