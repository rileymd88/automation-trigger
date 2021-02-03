import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems, setItem, removeItem } from './states/formsSlice'

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const el = useElement();
      const layout = useLayout();
      //const allItems = useSelector(selectAllItems)

      useEffect(() => {
        const button = {
          ref: 'actionButton',
          component: 'button',
          blend: layout.blend.id
        }
        const blendGlobalTheme = layout.blendGlobalTheme
        const blend = layout.blend
        const formItems = layout.items
        const index = formItems.findIndex(f => f.component === 'button')
        if (index === -1) {
          formItems.push(button)
        }
        render(el, formItems, blendGlobalTheme, blend);
      }, [layout]);

      /* useEffect(() => {
        layout.items.map(function(item){
          // new key
          if(typeof allItems[item.ref] === 'undefined') {
            dispatch(setItem(item.ref, item.defaultValue))
          }
        })
        allItems.map(function(item){
          // key no longer exists
          if(typeof layout.items[item.ref] === 'undefined') {
            dispatch(removeItem(item.ref))
          }
        })
      }, [...layout.items.map(i => i.ref)]); */
    },
  };
}
