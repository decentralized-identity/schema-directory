
import { DOM } from './dom.js';

DOM.delegateEvent('pointerover', 'tbody tr', (e, node) => {
  console.log(node);
})
