import { readable } from 'svelte/store';
import { spring,tweened } from 'svelte/motion';

export const colorSwitch = readable(spring(0));
export const vennSwitch = readable(spring(0));