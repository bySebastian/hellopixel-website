<script lang="ts">
    import { page } from "$app/stores";
    let path:string;

    const getPath = (currentPath:string) => {
        path = currentPath;
    }

    $: getPath($page.url.pathname);
</script>

<header class="site-header">
    <a class="site-logo" href="/">
        <img src="src/lib/assets/images/logo-hellopixel.png" alt="logo Hello Pixel" />
    </a>

    <nav>
        <ul class="nav nav-primary">
            <!-- <li>
                <a href="/articles">Artikels</a>
            </li> -->
            <!-- <li>
                <a href="/notes">Notities</a>
            </li> -->
            <li class="nav-item">
                <a href="/services" class={path === "/services" ? "nav-link active" : "nav-link"}>Services</a>
            </li>
            <li class="nav-item">
                <a href="/about" class={path === "/about" ? "nav-link active" : "nav-link"}>About</a>
            </li>
            <li class="nav-item">
                <a href="/contact" class={path === "/contact" ? "nav-link active" : "nav-link"}>Contact</a>
            </li>
        </ul>
    </nav>
</header>