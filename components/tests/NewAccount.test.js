import React from 'react'
import renderer from 'react-test-renderer'
import BarcodeScanner from '../BarcodeScanner.js'
import { enableFetchMocks } from 'jest-fetch-mock'

global.fetch = jest.fn()
// beforeEach(() => {
//     fetch.resetMocks()
// })

describe("BarcodeScanner", () => {
    it('BarcodeScanner has 1 child only', () => {
        const tree = renderer.create(<BarcodeScanner />).toJSON();
        expect(tree.children.length).toBe(1);
    })    
})
