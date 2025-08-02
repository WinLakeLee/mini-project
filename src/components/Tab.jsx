import { Nav, NavDropdown, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Tab = ({ isLoggedIn, newPostCount }) => {
  const navigate = useNavigate();

  return (
    <NavDropdown title={
      <>
        Community
        {newPostCount > 0 && <Badge bg="danger" className="ms-1">{newPostCount}</Badge>}
      </>
    } id="community-dropdown">
      <NavDropdown.Item onClick={() => navigate('/board')}>전체 글 보기</NavDropdown.Item>
      {isLoggedIn && (
        <>
          <NavDropdown.Item onClick={() => navigate('/board?filter=myposts')}>내 글 보기</NavDropdown.Item>
          <NavDropdown.Item onClick={() => navigate('/board?filter=popular')}>인기 글 보기</NavDropdown.Item>
        </>
      )}
      {!isLoggedIn && (
        <NavDropdown.Item onClick={() => navigate('/sign')}>
          로그인하고 더 많은 기능 사용하기
        </NavDropdown.Item>
      )}
    </NavDropdown>
  );
};

export default Tab;