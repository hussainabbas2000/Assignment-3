/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import ReportError from "../reportError";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders reportError without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<ReportError></ReportError>,div); 
 })
 it("renders reportError correctly",()=>{
    const {getByTestId} = render(<ReportError/>)
    const box = getByTestId("reportErr")
    expect(box).not.toHaveClass()

})

it("matches snapshot 4",()=>{
    const item = renderer.create(<ReportError></ReportError>).toJSON();
    expect(item).toMatchSnapshot();
})