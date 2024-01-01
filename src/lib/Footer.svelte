<script>
    /**
     * @type {String}
     */
     export let image;
</script>
<div class="footer-content">
    <div
        class={`topography-texture ${image != null ? "possibly-an-image" : ""}`}
        style={image != null ? `background-image: url(${image})` : ""}
    >
        <div
            class="contrast-filter"
            style={image == null ? `background-color: transparent` : ""}
        ></div>
    </div>
</div>
<div class="footer-text">
    <div class="footer-thanks">Thanks for Reading!</div>
    <ul class="footer-list">
        <li class="footer-li">
            <a class="footer-link" href="https://www.lucasgover.com"
                >Portfolio</a
            >
        </li>
        <li class="footer-li">
            <a class="footer-link" href="mailto:lucasgover@gmail.com"
                >email me!</a
            >
        </li>
        <li class="footer-li">
            <a class="footer-link" href="https://github.com/lwgover">Github</a>
        </li>
    </ul>
</div>

<style>
    .footer-link {
        text-decoration: none;
    }
    .footer-list {
        width: fit-content;
        margin: auto;
        list-style: none;
        padding: 0px;
    }
    .footer-thanks {
        display: inline-block;
        width: fit-content;
        margin: 5px;
        padding: 2px;
        color: white;
        font-weight: 550;
        letter-spacing: 3px;
        font-size: 30px;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    }
    .footer-li {
        display: inline-block;
        width: fit-content;
        margin: 5px;
        background-color: white;
        padding: 4px;
        color: #218380;
        font-weight: 550;
        letter-spacing: 2px;
        font-size: 24px;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }
    .footer-li:hover {
        transform: scale(1.05);
    }
    .footer-text {
        z-index: 250;
        margin-top: -140px;
        text-align: center;
    }
    .footer-content {
        display: flex; /* Use flex display to enable vertical alignment */
        flex-direction: column; /* Set flex direction to column */
        justify-content: flex-end; /* Align items to the bottom of the container */
        align-items: center; /* Center items horizontally */
        width: 100vw;
        height: 40vh;
        background-image: linear-gradient(
            -47deg,
            var(--title-color),
            var(--middle-color),
            var(--accent-color)
        );
        margin-top: calc((50vw * tan(-7deg)));
    } 
    .possibly-an-image {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .contrast-filter {
        width: 100%;
        height: 100%;
        background-color: rgba(var(--background-color-rgb), 0.4);
        transition: 0.5s;
    }
</style>