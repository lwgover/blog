<script>
    import { fly, blur } from "svelte/transition";
    import { quintOut } from "svelte/easing";
</script>
<div
    class="skew"
    style="padding-top:5px"
    in:fly={{
        delay: 75,
        duration: 500,
        x: 0,
        y: 700,
        opacity: 0.5,
        easing: quintOut,
    }}
    out:blur={{ amount: 5 }}
>

</div>

<style>

</style>