import { render,screen } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "../pages/Login/Login"

describe("Testing the login component",()=>{
    test("render the login  component with one button",async()=>{
        render(
        <Router>
            <Login/>
        </Router>
        
        
        )
        const buttonList = await screen.findAllByRole("button");
        console.log(buttonList);
        expect(buttonList).toHaveLength(2)
    })

})
