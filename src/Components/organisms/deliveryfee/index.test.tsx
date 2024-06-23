import {fireEvent, render, screen} from "@testing-library/react";
import DeliveryFee from "./index";


describe("DeliveryFee Organism",()=>{
    test('renders correctly', ()=>{
        render(<DeliveryFee/>)
        const textElement1 = screen.getByText('Select speed delivery');
        expect(textElement1).toBeInTheDocument();
        const DeliveryIconElement = screen.getByAltText('Delivery Icon')
        expect(DeliveryIconElement).toBeInTheDocument();
        const InstantElement = screen.getByText('Instant : 2-5 min')
        expect(InstantElement).toBeInTheDocument();
        const InstantFeeElement = screen.getByText("transaction fees : 0.001 BTC")
        expect(InstantFeeElement).toBeInTheDocument();
        const ChevronIconElement = screen.getByAltText('Chevron');
        expect(ChevronIconElement).toBeInTheDocument();
        const buttonElement = screen.getByTestId('button')
        expect(buttonElement).toBeInTheDocument();
         fireEvent.click(buttonElement);
        const fasterElement = screen.getByText('Faster : 4 hours');
        expect(fasterElement).toBeInTheDocument();
        const fasterFeeElement = screen.getByText('Delivery fees : 0.0001 BTC')
        expect(fasterFeeElement).toBeInTheDocument();
        const fastElement = screen.getByText('Fast : 120 hours')
        expect(fastElement).toBeInTheDocument();
        const fastFeeElement = screen.getByText('Delivery fees : 0.00001 BTC')
        expect(fastFeeElement).toBeInTheDocument();
        const noneElement = screen.getByText('None');
        expect(noneElement).toBeInTheDocument();
        const option1Element = screen.getByTestId('option-1')
        expect(option1Element).toBeInTheDocument();
        fireEvent.click(option1Element);
       
        const option2Element = screen.getByTestId('option-2')
        expect(option2Element).toBeInTheDocument();
        fireEvent.click(option2Element);
        
        const option3Element = screen.getByTestId('option-3')
        expect(option3Element).toBeInTheDocument();
        fireEvent.click(option3Element);
       
        const option4Element = screen.getByTestId('option-4')
        expect(option4Element).toBeInTheDocument();
        fireEvent.click(option4Element);
       

        })
})