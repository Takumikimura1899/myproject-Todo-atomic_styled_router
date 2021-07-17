import styled from 'styled-components';

const Button = ({ title }) => {
  return <SButton>{title}</SButton>;
};

const SButton = styled.button`
  margin-left: 4px;
  border-radius: 50%;
`;

export default Button;
