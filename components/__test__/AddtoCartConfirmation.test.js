/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import AddtoCartConfirmation from "../product/AddToCartConfirmation";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders addtocart without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<AddtoCartConfirmation></AddtoCartConfirmation>,div); 
 })
 it("renders addtocart correctly",()=>{
     const {getByTestId} = render(<AddtoCartConfirmation/>)
     const box = getByTestId("atc")
     expect(box).not.toHaveClass()
 
 })
 
 it("matches snapshot 8",()=>{
     const item = renderer.create(<AddtoCartConfirmation></AddtoCartConfirmation>).toJSON();
     expect(item).toMatchSnapshot();
 })