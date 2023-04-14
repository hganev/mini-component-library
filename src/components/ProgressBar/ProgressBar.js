/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height : 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height : 12,
    padding: 0,
    radius: 4
  },
  large: {
    height : 16,
    padding: 4,
    radius: 8
  }
};


const ProgressBar = ({ value, size }) => {

const height = size === 'small' ? 8 : 12;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: 100%;
  padding: var(--padding);
  border-radius: var(--radius);
`
  
const BarWrapper = styled.div`
  border-radius: 4px;
  /*  trim off corners when the progress is near full */
  overflow: hidden;
`
const styles = STYLES[size];

if (!styles) {
  throw new Error('No styles defined for size: ' + size);
}

return  <Wrapper role="progressbar" aria-labelledby="loadinglabel" aria-valuenow={value} style={{ '--padding': styles.padding + 'px', '--radius': styles.radius + 'px'}}>
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
              <Bar style={{ '--width': value + '%', '--height': styles.height + 'px' }}/>
            </BarWrapper>
        </Wrapper>
};

export default ProgressBar;
