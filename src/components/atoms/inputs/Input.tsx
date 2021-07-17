import styled from 'styled-components';

const Input = () => {
  return <SInput type='text' placeholder='タスクを入力してください' />;
};

const SInput = styled.input`
  padding: 5px;
`;

export default Input;
