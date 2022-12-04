/**
 * @jest-environment jsdom
 */
 import React from "react";
 import ReactDOM  from "react-dom";
 import Search from "../search/Search";
 import {render,cleanup} from '@testing-library/react';
 import "@testing-library/jest-dom/extend-expect"
 import renderer from "react-test-renderer";
 afterEach(cleanup);
 it("renders search without crash",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<Search></Search>,div); 
 })
 it("renders search correctly",()=>{
    const {getByTestId} = render(<Search/>)
    const box = getByTestId("search")
    expect(box).not.toHaveClass()

})

it("matches snapshot 3",()=>{
    const item = renderer.create(<Search></Search>).toJSON();
    expect(item).toMatchSnapshot();
})