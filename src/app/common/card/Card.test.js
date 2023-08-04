import { getByAltText, render, screen } from '@testing-library/react';
import Card from './Card'

describe('Renders Card Component',() => {
    
    test('renders icon', () => {
        const cardProps = {
            body: 'test-1',
            backgroundColor: '#99999',
            title: 'test-1',
            iconSrc: '',
            footer: 'test-1'
        }

        const card = render(<Card {...cardProps}/>);
        expect(card.queryByRole('img')).toBeNull();
    })

    test('Does not render icon', () => {
        const cardProps = {
            body: 'test-1',
            backgroundColor: '#99999',
            title: 'test-1',
            iconSrc: 'log.png',
            footer: 'test-1'
        }

        render(<Card {...cardProps}/>);
        const input = screen.getByRole('img');
        expect(input).toBeInTheDocument();
    })

    test('img src contains the correct value',() => {
        const cardProps = {
            body: 'test-1',
            backgroundColor: '#99999',
            title: 'test-1',
            iconSrc: 'log.png',
            footer: 'test-1'
        }
        
        render(<Card {...cardProps}/>);
        const testIconSrc = screen.getByRole('img');
        expect(testIconSrc.src).toContain('log.png');
    })
})

