import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Tab from "./Tab";

describe("Tab", ()=>{
    it("should Render Tab when name and selected is same ", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Tab name={'a'} selected={'a'} />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([<div className="TabName">a</div>, <div className="TabCount" />]);
    });


    it("should Render Tab  when name and selected is not same ", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Tab name={'a'} selected={'b'} />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([<div className="TabName">a</div>, <div className="TabCount" />]);
    });


    it("should Render Tab  when name and totalCount is passed ", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Tab name={'a'} totalCount={5} />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });
});