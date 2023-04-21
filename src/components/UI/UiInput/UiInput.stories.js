import { useState } from 'react';
import UiInput from './UiInput';

export default {
    title: 'Ui-Kit/UiInput',
    component: UiInput
};

const Template = (arg) => {
    const [value, setValue] = useState('');

    const handleInputValue = value => {
        setValue(value);
    }

    return (
        <UiInput
            {...arg}
            value={value}
            handleInputValue={handleInputValue}
        />
    )
}

const props = {
    value: '',
    handleInputValue: () => console.log('Input Change'),
    placeholder: 'Placeholder',
    classes: '',
}

export const Default = Template.bind({});
Default.args = {
    ...props
};