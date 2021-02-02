import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';
import { removeItem } from './states/formsSlice'

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const el = useElement();
      const layout = useLayout();

      useEffect(() => {

      }, []);
      
      const button = {
        ref: 'actionButton',
        component: 'button',
        label: 'Run blend!',
        loadingMsg: 'Running blend...',
        width: '100%',
        blend: layout.blend
      }
      const formItems = layout.items
      const index = formItems.findIndex(f => f.component === 'button')
      if (index === -1) {
        formItems.push(button)
      }
      render(el, formItems);
    },
  };
}
