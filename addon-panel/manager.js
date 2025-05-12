import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { Panel } from './panel';

addons.register('my/panel', () => {
  addons.add('my-panel-addon/panel', {
    title: 'ClickUp Tracker',
    type: types.PANEL,
    render: ({ active }) => <Panel active={active} />,
    paramKey: 'clickup',
  });
});