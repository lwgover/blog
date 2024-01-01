<script>
    import { spring, tweened } from "svelte/motion";
    import { onMount } from "svelte";
    let colorProgress = spring(1);
    function toggle() {
        if (document.body.classList.contains("dark-mode")) {
            colorProgress.set(1);
        } else {
            colorProgress.set(0);
        }
        window.document.body.classList.toggle("dark-mode");
    }
    onMount(() => colorProgress.set($colorProgress))
    // 100 and 80
</script>

<button on:click={toggle}>
    <svg
        width="50px"
        height="50px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={`transform: rotate(${-90 * $colorProgress}deg) scale(${
            1 - 0.2 * $colorProgress
        }); transition: all 0.1s;`}
    >
        <defs>
            <!-- Define a mask with the first circle -->
            <mask id="mask" maskUnits="userSpaceOnUse">
                <rect width="100%" height="100%" fill="#ffffff" />
                <!-- White rectangle to reset the mask -->
                <circle
                    cx={`${125 - 25 * $colorProgress}`}
                    cy={`${75 + 25 * $colorProgress}`}
                    r={`${55 - 15 * $colorProgress}`}
                    fill="#000000"
                />
                <!-- Black circle to subtract from the mask -->
            </mask>
        </defs>

        <!-- Draw the second circle with the mask applied and fill-rule set to evenodd -->
        <circle
            cx="100"
            cy="100"
            r={`${70 - 15 * $colorProgress}`}
            fill="var(--header-color)"
            mask="url(#mask)"
            fill-rule="evenodd"
        />

        <!-- Sun Rays -->
        <line
            x1="100"
            y1="30"
            x2="100"
            y2="5"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="100"
            y1="170"
            x2="100"
            y2="195"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="30"
            y1="100"
            x2="5"
            y2="100"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="170"
            y1="100"
            x2="195"
            y2="100"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />

        <line
            x1="50"
            y1="50"
            x2="30"
            y2="30"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="150"
            y1="150"
            x2="170"
            y2="170"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="50"
            y1="150"
            x2="30"
            y2="170"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
        <line
            x1="150"
            y1="50"
            x2="170"
            y2="30"
            stroke="var(--text-color)"
            stroke-width="15"
            opacity={`${$colorProgress}`}
        />
    </svg>
</button>

<style>
    button {
        background-color: transparent;
        width: 50px;
        height: 50px;
        outline: none;
        border: 0px;
        cursor: pointer;
    }
    button,
    button:active,
    button:focus {
        outline: none;
    }
    :global(body.dark-mode) {
        --background-color: #30303f;
        --title-color: #d81159;
        --accent-color: #218380;
        --header-color: #ffffff;
        --text-color: #ffffff;
        --article-text-color: #cfcfcf;
        --background-color-rgb: 18, 18, 24;
        --background-accent-color: #242436;
    }
</style>
