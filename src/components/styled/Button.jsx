import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${(props) => {
    switch (props.variant) {
      case 'success':
        return '#198754';
      case 'dark':
        return '#212529';
      case 'danger':
        return '#dc3545';
      case 'warning':
        return '#ffc107';
      default:
        return '#198754';
    }
  }};

  color: ${(props) => {
    switch (props.variant) {
      case 'warning':
        return 'black';
      default:
        return '#ffff';
    }
  }};
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '0.875rem';
      case 'lg':
        return '1.25rem';
      default:
        return '1rem';
    }
  }};
  &:hover {
    filter: brightness(1.1);
  }
`;

export default function Button({ type, variant, size, children, ...props }) {
  return (
    <StyledButton type={type} variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['success', 'dark', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  variant: 'dark',
  size: 'md',
};
