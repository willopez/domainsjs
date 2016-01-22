import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainView from '../../shared/components/main-view/main-view';

function setup() {
  const props = {
    domain: {
      data: [
        {
          id: 1,
          name: 'newthought.org',
          name_server: 'Uniregistry',
          private_whois: false,
          expiring_date: 'Fri Jan 06 2017',
          registered_date: 'Sun Dec 25 2016',
        },
      ],
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<MainView {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('components', () => {
  describe('MainView', () => {
    it('should render correctly', () => {
      const { output } = setup();

      // Get main view data table
      const table = output.props.children[2];
      // Get content of name column's first cell.
      const firstCell = table.props.children[0].props.cell.props.data[0].name;
      expect(firstCell).toBe('newthought.org');
    });
  });
});
