/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOM  from "react-dom";
import RemoveDialog from "../cart/RemoveDialog";
import {render,cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer";
afterEach(cleanup);
it("renders dialogue box without crash",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<RemoveDialog></RemoveDialog>,div); 
})
it("renders dialogue box correctly",()=>{
    const {getByTestId} = render(<RemoveDialog/>)
    const box = getByTestId("dialogue")
    expect(box).not.toHaveClass()

})

it("matches snapshot 1",()=>{
    const item = renderer.create(<RemoveDialog></RemoveDialog>).toJSON();
    expect(item).toMatchSnapshot();
})