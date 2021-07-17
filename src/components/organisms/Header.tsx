import styled from 'styled-components';
import HeaderLogo from '../atoms/logos/HeaderLogo';

const Header = () => {
  return (
    <>
      <SWrapper>
        <HeaderLogo />
      </SWrapper>
    </>
  );
};

export default Header;

const SWrapper = styled.div`
  background-color: #3399cc;
  padding: 1px;
  margin-bottom: 20px;
`;
