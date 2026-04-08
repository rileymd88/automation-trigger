import { useElement, useLayout, useEffect, useApp, useConstraints, useModel } from '@nebula.js/stardust';
import { applyExecutionToken, applyExecutionTokenMigration, getAutomations } from './services/backend';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';

let rendered = false

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const app = useApp()
      const model = useModel()
      const el = useElement()
      const layout = useLayout()
      const { active } = useConstraints()
      const getData = function () {
        return layout.qHyperCube
      }
      useEffect(async () => {
        if(!rendered) {
          rendered = true
        }
        else {
          if (layout.blend.id.length > 1 && active) {
            const automations = await getAutomations()
            const ids = automations.map(a=>a.value)
            if(ids.includes(layout.blend.id)) {
              if(typeof layout.blend.executionToken === 'undefined') {
                await applyExecutionTokenMigration(model, layout.blend.id, layout.blend)
              }
              else {
                await applyExecutionToken(model, layout.blend.id, layout.blend.executionToken)
              }
            }
          }
        }
      }, [layout.blend.id]);
      
      useEffect(async () => {
        const blendGlobalTheme = layout.blendGlobalTheme
        const blend = { ...layout.blend, app }
        if (layout.items.length > 0) {
          blend.buttonHeightAuto = true
        }

        const formItems = layout.items
        const refs = layout.items.map(i => i.ref)
        const dialog = {
          app,
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
        render(el, formItems, blendGlobalTheme, blend, refs, getData, dialog, app, model);
      }, [layout]);
    },
  };
}
