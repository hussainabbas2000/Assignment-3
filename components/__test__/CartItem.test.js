/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import CartItem from "../cart/CartItem";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders cartItem without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<CartItem></CartItem>,div); 
 })
 it("renders cartItem correctly",()=>{
     const {getByTestId} = render(<CartItem/>)
     const box = getByTestId("cartItem")
     expect(box).not.toHaveClass()
 
 })
 
 it("matches snapshot 7",()=>{
     const item = renderer.create(<CartItem></CartItem>).toJSON();
     expect(item).toMatchSnapshot();
 })