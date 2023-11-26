<script>
  import {colorSwitch} from '$lib/global/stores.js';
  export let height = "100px";
  export let width = "100px";

  let colorProgress = $colorSwitch;
</script>
<svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle 1 -->
  <circle cx={`${70 + (60*$colorProgress)}`} cy="100" r="70" fill="#d81159" style='transition: all 0.1s' />

  <!-- Circle 2 -->
  <circle cx={`${130 - (60*$colorProgress)}`} cy="100" r="70" fill="#218380" style='transition: all 0.1s' />

  <!-- Intersection -->
  <g>
    <clipPath id="intersection">
      <circle cx={`${70 + (60*$colorProgress)}`} cy="100" r="70" style='transition: all 0.1s' />
    </clipPath>
    <circle cx={`${130 - (60*$colorProgress)}`} cy="100" r="70" fill="var(--header-color)" clip-path="url(#intersection)" style='transition: all 0.1s, fill 0.5s' />
  </g>
</svg>