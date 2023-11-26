<script>
  import { colorSwitch, vennSwitch } from "$lib/global/stores.js";
  export let height = "100px";
  export let width = "100px";

  let colorProgress = $colorSwitch;
  let vennProgress = $vennSwitch;
</script>

<svg
  role="img"
  aria-label="Interactive SVG"
  {width}
  {height}
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  on:mouseenter={function () {
    vennProgress.set(1.2);
  }}
  on:mouseleave={function () {
    vennProgress.set(0);
  }}
>
  <!-- Circle 1 -->
  <circle
    cx={`${
      70 +
      60 * $colorProgress +
      ($colorProgress > 0.5 ? -1 : 1) * $vennProgress * 30
    }`}
    cy="100"
    r="70"
    fill="#d81159"
    style="transition: all 0.1s"
  />

  <!-- Circle 2 -->
  <circle
    cx={`${
      130 -
      60 * $colorProgress -
      ($colorProgress > 0.5 ? -1 : 1) * $vennProgress * 30
    }`}
    cy="100"
    r="70"
    fill="#218380"
    style="transition: all 0.1s"
  />

  <!-- Intersection -->
  <g>
    <clipPath id="intersection">
      <circle
        cx={`${
          70 +
          60 * $colorProgress +
          ($colorProgress > 0.5 ? -1 : 1) * $vennProgress * 30
        }`}
        cy="100"
        r="70"
        style="transition: all 0.1s"
      />
    </clipPath>
    <circle
      cx={`${
        130 -
        60 * $colorProgress -
        ($colorProgress > 0.5 ? -1 : 1) * $vennProgress * 30
      }`}
      cy="100"
      r="70"
      fill="var(--header-color)"
      clip-path="url(#intersection)"
      style="transition: all 0.1s, fill 0.5s"
    />
  </g>
</svg>
