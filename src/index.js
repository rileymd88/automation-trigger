import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const el = useElement();
      const layout = useLayout();
      const getData = function() {
        return layout.qHyperCube.qDataPages
      }
      useEffect(() => {
        
        const blendGlobalTheme = layout.blendGlobalTheme
        const blend = layout.blend
        if(layout.items.length > 0) {
          blend.buttonHeightAuto = true
        }
        const formItems = layout.items
        const refs = layout.items.map(i => i.ref)
        const requiredItems = layout.items.filter(i => i.required).map(i=>i.ref)
        const dialog = {
            id: layout.blend.id,
            show: layout.blendDialog.show,
            buttonWidth: layout.blendDialog.buttonWidth,
            buttonLabel: layout.blendDialog.buttonLabel,
            widthAuto: layout.blendDialog.buttonWidthAuto,
            width: layout.blendDialog.width,
            heightAuto: layout.blendDialog.buttonHeightAuto,
            height: layout.blendDialog.buttonHeight,
            alignment: layout.blendDialog.alignment,
            title: layout.blendDialog.title,
            useIcon: layout.blendDialog.icon.useIcon,
            iconType: layout.blendDialog.icon.iconType,
            iconPosition: layout.blendDialog.icon.position,
            enabledCondition: layout.blend.enableCondition,
            useEnabledCondition: layout.blend.useEnabledCondition
        }
        render(el, formItems, blendGlobalTheme, blend, refs, getData, requiredItems, dialog);
      }, [layout]);
    },
  };
}
