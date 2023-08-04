import { render, screen } from '@testing-library/react';
import TextField from './TextField';

describe('Renders TextField Component',() => {
    test('input renders correct value',() => {
        const textFieldProps = {
            value: 'test',
            label: 'test label',
            onChange: () => {}
        } 
            
        render(<TextField {...textFieldProps}/>);
        const input = document.querySelector('input');
        expect(input.value).toEqual(textFieldProps.value);
    })
})
