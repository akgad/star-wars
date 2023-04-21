import UiButtons from './UiButtons'

export default {
    title: 'Ui-Kit/UiButtons',
    component: UiButtons
}


const Template = (args) => <UiButtons {...args} />;

const props = {
    text: 'Hello',
    disabled: false,
    theme: 'light',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'dark'
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'light'
}

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
}