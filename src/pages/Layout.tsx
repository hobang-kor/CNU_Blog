import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>상진</Name>
          <Description>충남대 학생</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
