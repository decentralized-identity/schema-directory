
import { DOM } from './dom.js';

DOM.delegateEvent('pointerdown', 'table:has(~ h2:not(#schemas)) td a', (e, node) => {
  node.setAttribute('target', '_blank');
})

document.querySelectorAll('#schema_tables table').forEach(table => {
  console.log(table);
  table.firstElementChild.firstElementChild.lastElementChild.setAttribute('data-sort-method', 'none');
  new Tablesort(table);
})
