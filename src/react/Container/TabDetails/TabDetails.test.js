import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabDetails from "./TabDetails";

describe("TabDetails", ()=>{
    it("should render TabDetails when username and selected name is not passed or not equal ", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<TabDetails  />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([<div className="List"><span>undefined, undefined</span></div>,
            <div className="ListBody" style={{ "display": "flex"}}>
                <div className="CloseIcon" />
                <img alt="" className="ListImage" />
                <div className="ListDetails">
                    <div><span>Username: </span>
                        <span /></div>
                    <div><span>Phone: </span><span />
                    </div>
                    <div><span>Street: </span><span /></div>
                    <div><span>City: </span><span /></div>
                    <div><span>State: </span><span /></div>
                    <div><span>Postcode: </span>
                        <span /></div>
                    <div><span>Email: </span><span /></div>
                </div>
            </div>]);
    });

    it("should render TabDetails when username and selected name is equal ", ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<TabDetails username={'abc'} slected={'abc'}  />);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([<div className="List"><span>undefined, undefined</span></div>,
            <div className="ListBody" style={{ "display": "none"}}>
                <div className="CloseIcon" />
                <img alt="" className="ListImage" />
                <div className="ListDetails">
                    <div><span>Username: </span>
                        <span>
                        abc
                        </span></div>
                    <div><span>Phone: </span><span />
                    </div>
                    <div><span>Street: </span><span /></div>
                    <div><span>City: </span><span /></div>
                    <div><span>State: </span><span /></div>
                    <div><span>Postcode: </span>
                        <span /></div>
                    <div><span>Email: </span><span /></div>
                </div>
            </div>]);
    });
});