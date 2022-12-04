/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import NavBar from "../NavBar";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders navbar without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<NavBar></NavBar>,div); 
 })
 it("renders navbar correctly",()=>{
     const {getByTestId} = render(<NavBar/>)
     const box = getByTestId("nav")
     expect(box).not.toHaveClass()
 
 })
 
 it("matches snapshot 5",()=>{
     const item = renderer.create(<NavBar></NavBar>).toJSON();
     expect(item).toMatchSnapshot();
 })