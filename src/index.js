import { useElement, useLayout, useEffect, useApp, useConstraints } from '@nebula.js/stardust';
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
      const el = useElement()
      const layout = useLayout()
      const { active } = useConstraints()
      const edit = active ? active : false
      const getData = function () {
        return layout.qHyperCube.qDataPages
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
                await applyExecutionTokenMigration(app, layout.blend.id, layout.qInfo.qId, layout.blend)
              }
              else {
                await applyExecutionToken(app, layout.blend.id, layout.qInfo.qId)
              }
            }
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
        render(el, formItems, blendGlobalTheme, blend, refs, getData, dialog, app, layout.qInfo.qId);
      }, [layout]);
    },
  };
}
