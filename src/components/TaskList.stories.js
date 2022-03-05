import React from 'react';
import { PureTaskList } from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: PureTaskList,
    title: 'TaskList',
    decorations: [story => <div style={{padding: '3rem'}}>{story()}</div>] // 스토리에 임의의 래퍼(wrapper)를 제공하는 한 방법
};

const Template = args => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    tasks: [
        {...TaskStories.Default.args.task, id: '1', title: 'Task 1'}, // TaskStories를 가져옴으로써 최소한의 노력으로 스토리 속의 인수를(args)를 합성(compose)
        {...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
        {...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
        {...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
        {...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
        {...TaskStories.Default.args.task, id: '6', title: 'Task 6'}
    ]
}

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ]
}

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
}

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
}