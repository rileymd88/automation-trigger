import { useElement, useLayout, useEffect, useApp } from '@nebula.js/stardust';
import { applyExecutionToken } from './services/backend';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';

let rendered = false
let firstAutomationId = ''

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const app = useApp()
      const el = useElement()
      const layout = useLayout()
      const getData = function () {
        return layout.qHyperCube.qDataPages
      }
      useEffect(async () => {
        if(!rendered) {
          rendered = true
          firstAutomationId = layout.blend.id
        }
        else {
          if (layout.blend.id.length > 1 && firstAutomationId !== layout.blend.id) {
            await applyExecutionToken(app, layout.blend.id, layout.qInfo.qId)
          }
        }
      }, [layout.blend.id]);
      
      useEffect(async () => {
        const blendGlobalTheme = layout.blendGlobalTheme
        const blend = layout.blend
        blend.app = app
        if (layout.items.length > 0) {
          blend.buttonHeightAuto = true
        }

        const formItems = layout.items
        const refs = layout.items.map(i => i.ref)
        const requiredItems = layout.items.filter(i => i.required).map(i => i.ref)
        const dialog = {
          app: layout.blend.app,
          id: layout.blend.id,
          executionToken: layout.blend.executionToken,
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
          enabledCondition: layout.blend.enabledCondition,
          useEnabledCondition: layout.blend.useEnabledCondition
        }
        render(el, formItems, blendGlobalTheme, blend, refs, getData, requiredItems, dialog);
      }, [layout]);
    },
  };
}
