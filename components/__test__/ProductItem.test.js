/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import ProductItem from "../product/ProductItem";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders product item without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<ProductItem></ProductItem>,div); 
 })
 it("renders product item correctly",()=>{
     const {getByTestId} = render(<ProductItem/>)
     const box = getByTestId("pI")
     expect(box).not.toHaveClass()
 
 })
 
 it("matches snapshot 9",()=>{
     const item = renderer.create(<ProductItem></ProductItem>).toJSON();
     expect(item).toMatchSnapshot();
 })