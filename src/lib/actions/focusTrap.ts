import * as _focusTrap from 'focus-trap';

export function focusTrap(element: HTMLElement, options) {
    //console.log('element-->' + element);

   const trap = _focusTrap.createFocusTrap(element, 
        {
            clickOutsideDeactivates: true,
            ...options
        });
   trap.activate();

   return {
    destroy() {
        // the node has been removed from the DOM
        trap.deactivate();
    }
};
}