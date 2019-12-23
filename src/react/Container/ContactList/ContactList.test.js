import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import ContactList from "./ContactList";

describe("ContactList", ()=>{
    it("should Render ContactList", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<ContactList />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    });
});