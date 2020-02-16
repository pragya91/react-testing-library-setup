import React from 'react'
import {render} from '@testing-library/react'
import RedBox from './RedBox'

describe('This will test RedBox component', () => {
    test('renders message', () => {   
        const { queryByTestId } = render(<RedBox firstName="John"lastName="Doe"/>)
        
        const boxElement = queryByTestId('box')
        expect(boxElement).toBeInTheDocument()
        expect(boxElement.innerHTML).toBe('Hi John Doe')
    })
})
