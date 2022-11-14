import {Workbox} from 'workbox-window';

export function registerServiceWorker() {
  
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js')
    
    wb.addEventListener('installed', event => {
      if (event.isUpdate ) {
        if (confirm('new app update is available, click to ok to refresh')) {
          window.location.reload();
        }
      }
    })
    
    wb.register();
  }
}