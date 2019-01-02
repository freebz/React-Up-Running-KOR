jest
  .dontMock('../source/components/Actions')
  .dontMock('./Wrap')
;

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Actions = require('../source/components/Actions');
const Wrap = require('./Wrap');

describe('Click some actions', () => {
  it('calls you back', () => {
    const callback = jest.genMockFunction();
    const actions = TestUtils.renderIntoDocumente(
      <Wrap><Actions onAction={callback} /></Wrap>
    );

    TestUtils
      .scryRenderedDOMComponentsWithTag(actions, 'span')
      .forEach(span => TestUtils.Simulate.click(span));

    const calls = callback.mock.calls;
    expect(calls.length).toEqual(3);
    expect(calls[0][0]).toEqual('info');
    expect(calls[1][0]).toEqual('edit');
    expect(calls[2][0]).toEqual('delete');
  });
});
