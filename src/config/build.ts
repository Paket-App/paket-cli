import insertScriptAndCSS from "./insert-scripts.js";
import bundlerRollup from "./vanilla/rolldown.js";
import transformCodeSWC from "./vanilla/swc.js";


export default function build(framework: 'react' | 'svelte' | 'vanilla' | 'vue') {
  switch (framework) {
    case "vanilla": {
      bundlerRollup()
      transformCodeSWC()
      insertScriptAndCSS()
      break;
    }
  
    default: {
      break;
    }
  }
}
