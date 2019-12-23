import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from "./Footer";

describe("Footer", ()=>{
    it("should render Footer", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Footer/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result).toEqual(<div className="Footer"><nav><ul><li>Contact Us</li><li>About Us</li></ul></nav></div>);
    });
});