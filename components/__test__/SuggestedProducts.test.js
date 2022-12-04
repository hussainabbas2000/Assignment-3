/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import SuggestedProducts from "../product/SuggestedProducts";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders Suggested Products without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<SuggestedProducts product = "1"></SuggestedProducts>,div); 
 })
 it("renders Suggested Products correctly",()=>{
     const {getByTestId} = render(<SuggestedProducts product = "1"/>)
     const element = getByTestId("suggested")
     expect(element).not.toHaveClass()
 
 })
 
 it("matches snapshot 2",()=>{
     const item = renderer.create(<SuggestedProducts product = "1"></SuggestedProducts>).toJSON();
     expect(item).toMatchSnapshot();
 })