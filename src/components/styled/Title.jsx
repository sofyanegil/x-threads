import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: ${(props) => {
    switch (props.variant) {
      case 'title':
        return '1.5em';
      case 'subtitle':
        return '1.3em';
      case 'subsubtitle':
        return '1.1em';
      default:
        return '1em';
    }
  }};
  color: ${(props) => (props.color === 'secondary' ? '#888' : '#333')};
  margin-bottom: 10px;
`;

export default function Title({ variant, color, children, ...props }) {
  return (
    <StyledTitle variant={variant} color={color} {...props}>
      {children}
    </StyledTitle>
  );
}

Title.propTypes = {
  variant: PropTypes.oneOf(['title', 'subtitle', 'subsubtitle']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  variant: 'title',
  color: 'primary',
};
