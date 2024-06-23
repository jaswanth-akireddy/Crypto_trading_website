import { render,screen } from '@testing-library/react'
import Divider from './index'

describe('Divider tests',()=>{
test('Divider renders correctly',()=>{
    render(<Divider variant='fullWidth' orientation='horizontal'/>)
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toBeInTheDocument()

})

test('Inset Divider renders correctly',()=>{
    render(<Divider variant='inset' orientation='horizontal'/>)
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toBeInTheDocument()
    
})

test('Middle Divider renders correctly',()=>{
    render(<Divider variant='middle' orientation='horizontal'/>)
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toBeInTheDocument()
    
})

test('Dashed Divider renders correctly',()=>{
    render(<Divider variant='middle' orientation='horizontal' sx={{borderStyle:'dashed'}}/>)
    const dividerElement = screen.getByRole('separator');
    expect(dividerElement).toBeInTheDocument()
    expect(dividerElement).toHaveStyle({borderStyle:'dashed'});
})
})