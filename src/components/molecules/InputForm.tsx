import styled from 'styled-components';
import Button from '../atoms/buttons/Button';
import Input from '../atoms/inputs/Input';

const InputForm = () => {
  return (
    <>
      <SWrapper>
        <Input />
        <Button title={'追加'} />
        <Button title={'削除'} />
      </SWrapper>
    </>
  );
};

export default InputForm;

const SWrapper = styled.div`
  display: flex;
  width: 30vw;
  margin: 0 auto;
  padding: 10px;
  background-color: khaki;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
