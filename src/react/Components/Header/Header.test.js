import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Header from "./Header";

describe("Header", ()=>{
    it("should render Header with display = true  props", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Header display={true} />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });


    it("should render Header with display = false props", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<Header display={false} />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });
});