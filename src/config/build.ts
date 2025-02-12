import bundlerRollup from "./vanilla/rolldown.js";
import transformCodeSWC from "./vanilla/swc.js";


export default function build(framework: 'react' | 'svelte' | 'vanilla' | 'vue') {
  switch (framework) {
    case "vanilla": {
      bundlerRollup()
      transformCodeSWC()
      break;
    }
  
    default: {
      break;
    }
  }
}
