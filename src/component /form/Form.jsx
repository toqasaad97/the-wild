import styled, { css } from "styled-components";
import PropTypes from 'prop-types';

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

Form.propTypes = {
  type: PropTypes.oneOf(["regular", "modal"])
};

export default Form;