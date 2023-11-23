<script>
  export let height = "100px";
  export let width = "100px";
</script>
<svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle 1 -->
  <circle cx="70" cy="100" r="70" fill="#d81159" />

  <!-- Circle 2 -->
  <circle cx="130" cy="100" r="70" fill="#218380" />

  <!-- Intersection -->
  <g>
    <clipPath id="intersection">
      <circle cx="70" cy="100" r="70" />
    </clipPath>
    <circle cx="130" cy="100" r="70" fill="#ffffff" clip-path="url(#intersection)" />
  </g>
</svg>