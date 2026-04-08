import React from 'react';
import * as SproutIcons from '@qlik/sprout-icons/react';

const iconAliases = {
  back: 'GoToStartIcon',
  cogwheel: 'SettingsIcon',
  export: 'ExportIcon',
  filterpane: 'FilterPaneIcon',
  forward: 'GoToEndIcon',
  import: 'ImportIcon',
  minus: 'MinusIcon',
  plus: 'AddIcon',
  remove: 'DeleteIcon',
  search: 'FindIcon',
  settings: 'SettingsIcon',
  star: 'FavoritedIcon',
  tick: 'CheckIcon',
};

function toComponentName(iconType) {
  return `${iconType
    .split('-')
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('')}Icon`;
}

export default function CustomIcon({ iconType }) {
  if (!iconType) {
    return null;
  }

  const componentName = iconAliases[iconType] || toComponentName(iconType);
  const IconComponent = SproutIcons[componentName] || SproutIcons.DefaultIcon;

  return <IconComponent aria-hidden="true" height={undefined} width={undefined} />;
}
