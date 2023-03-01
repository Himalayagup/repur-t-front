<template>
    <div class="app">
        <button class="navbar-toggler nav_toggle" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="material-icons">Menu</span>
        </button>
        <layoutTheSidebar />
        <div class="container-fluid">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.app {
    display: flex;

    main {
        flex: 1 1 0;
        padding: 2rem;

        @media (max-width: 1024px) {
            padding-left: 6rem;
        }
    }
}

.nav_toggle {
    position: absolute;
    top: 10px;
    right: 20px;
    display: none;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none !important;
        border: none !important;
        box-shadow: none !important;
    }

    @media (max-width:900px) {
        display: block;
    }
}
</style>