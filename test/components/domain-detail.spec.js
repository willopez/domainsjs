import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DomainDetailView from '../../shared/components/domain-detail/domain-detail';

function setup() {
  const props = {
    domainDetail: {
      id: 1,
      name: 'newthought.org',
      name_server: 'Uniregistry',
      private_whois: false,
      expiring_date: 'Fri Jan 06 2017',
      registered_date: 'Sun Dec 25 2016',
      record: [
        {
          id: 1,
          hostname: 'newthought.org',
          ip_address: '176.222.125.161',
          ttl: 300,
          type: 'A',
        },
      ],
    },
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<DomainDetailView {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('components', () => {
  describe('DomainDetailView', () => {
    it('should render correctly', () => {
      const { output } = setup();
      const [ , headerWrapper ] = output.props.children;

      // Test header content
      expect(headerWrapper.props.children.type).toBe('h3');
      expect(headerWrapper.props.children.props.children).toBe('newthought.org');

      // Get detail view data table
      const [ , , , table ] = output.props.children;
      const [ , , , ipAdressCell ] = table.props.children;
      expect(ipAdressCell.props.cell.props.data[0].ip_address).toBe('176.222.125.161');
    });
  });
});
