import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
  faMagnifyingGlass,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const LoginWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled.div`
  width: 36px;
  height: 36px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ShopNumber = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -5px;
  right: -5px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBottom = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AllMenu = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

const Menu = styled.div`
  font-size: 16px;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #fa5500;
`;

const UpBar = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const SearchWrap = styled.form`
  all: unset;
  width: 360px;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

const Search = styled.input`
  all: unset;
`;

const Header = () => {
  return (
    <Container>
      <HeaderTop>
        <Logo>
          <h1>W CONCEPT</h1>
        </Logo>
        <LoginWrap>
          <Login>
            <FontAwesomeIcon icon={faRightToBracket} />
          </Login>
          <Login>
            <FontAwesomeIcon icon={faHeart} />
          </Login>
          <Login>
            <FontAwesomeIcon icon={faUser} />
          </Login>
          <Login>
            <FontAwesomeIcon icon={faBagShopping} />
            <ShopNumber>0</ShopNumber>
          </Login>
        </LoginWrap>
      </HeaderTop>
      <HeaderBottom>
        <MenuWrap>
          <AllMenu>
            <FontAwesomeIcon icon={faBars} />
          </AllMenu>
          <Menu id="focus">
            베스트
            <Dot></Dot>
          </Menu>
          <Menu>세일</Menu>
          <Menu>신상</Menu>
          <Menu>추천</Menu>
          <Menu>단독</Menu>
          <UpBar></UpBar>
          <Menu>여성</Menu>
          <Menu>남성</Menu>
        </MenuWrap>
        <SearchWrap>
          <Search placeholder="신년맞이, 2025설을 검색하세요!"></Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchWrap>
      </HeaderBottom>
    </Container>
  );
};

export default Header;
