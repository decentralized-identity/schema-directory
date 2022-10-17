
import { DOM } from './dom.js';

DOM.delegateEvent('pointerdown', 'tbody td:first-child a', (e, node) => {
  node.setAttribute('target', '_blank');
})
