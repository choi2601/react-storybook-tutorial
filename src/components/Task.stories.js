import React from 'react';
import Task from './Task';

export default {
    component: Task,
    title: 'Task'
}

// 각각의 디자인 인터렉션에 대한 스토리들을 정의하고 해당 액션 시에 랜더링되는 디자인을 확인할 수 있음

const Template = args => <Task {...args} />

export const Default = Template.bind({}); // story
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updateAt: new Date(2018, 0, 1, 9, 0)
    }
}

export const Pinned = Template.bind({}); // story
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    }
}

export const Archived = Template.bind({}); // story
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    }
}
