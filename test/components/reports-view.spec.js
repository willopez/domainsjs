import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReportsView from '../../shared/components/reports-view/reports-view';

function setup() {
  const props = {
    domainReport: {
      data: {
        chart: {
          type: 'pie',
        },
        series: [{
          name: 'Top Level Domains',
          data: [{
            name: '.COM',
            y: 56.33,
          }, {
            name: '.ORG',
            y: 24.03,
            }, {
              name: '.NET',
              y: 10.38
            }, {
              name: '.BIZ',
              y: 4.77
            }, {
              name: '.INFO',
              y: 0.91
            }, {
              name: '.CO',
              y: 0.2
            }]
        }]
      }
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<ReportsView {...props} />);
  const output = renderer.getRenderOutput();

  return {
    output,
  };
}

describe('components', () => {
  describe('ReportsView', () => {
    it('should render a pie chart depicting top level domains by type.', () => {
      const { output } = setup();

      // Test header is rendering correctly,
      expect(output.props.children[0].props.children.props.children).toBe('Reports');

      // Ensure the correct type is rendered for the highchart component.
      expect(output.props.children[2].type.displayName).toBe('HighchartsChart');
    });
  });
});
