/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import Checkout from "../../pages/checkout";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders checkout without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<Checkout></Checkout>,div); 
 })
 it("renders checkout correctly",()=>{
     const {getByTestId} = render(<Checkout/>)
     const box = getByTestId("checkout")
     expect(box).not.toHaveClass()
 
 })
 
 it("matches snapshot 6",()=>{
     const item = renderer.create(<Checkout></Checkout>).toJSON();
     expect(item).toMatchSnapshot();
 })