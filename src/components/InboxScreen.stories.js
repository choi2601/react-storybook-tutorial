import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { PureInboxScreen } from './InboxScreen';
import * as TaskListStories from './TaskList.stories';

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
}

export default {
    component: PureInboxScreen,
     // Presentation Component인 PureInboxScreen은 자체적으로 데이터를 수급받는 컴포넌트는 아니지만 해당 컴포넌트 내에 TaskList 컴포넌트는 state값을 받아야하는 컴포넌트이기 때문에 컨텍스트를 제공
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'InboxScreen'
}

const Template = args => <PureInboxScreen {...args}/>;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something'
}

