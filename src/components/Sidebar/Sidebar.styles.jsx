import styled from "styled-components";


export const SidebarWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding-left: 38px;
  height: 100%;
  width:100%;
  transition: background 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 65px;
  z-index: 1000;
  background: ${props => props.isOpen
    ? 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8))'
    : 'rgba(0, 0, 0, 0)'};
`;

export const MenuItem = styled.div`
  .row{
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    max-width: 312px;
    width: 100%;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  .activeRow{
    display: flex;
    align-items: center;
    padding: 15px;
    cursor: pointer;
    max-width: 312px;
    width: 100%;
    background: #3B486D;
    border-radius: 50px;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 50px;
    margin-left: 22px;
  }
  .name{
    opacity: ${props => (props.isOpen ?  1 : 0)};
    color: #F1F1F1;
    font-size: 36px;
    white-space: nowrap;
    transition: opacity 0.3s ease;
  }
  .activeName{
    opacity: ${props => (props.isOpen ?  1 : 0)};
    font-size: 36px;
    color: #F1F1F1;
    font-family: Tajawal_Bold, sans-serif !important;
    white-space: nowrap;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const ProfileInfo = styled.div`
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => (props.isOpen ?  1 : 0)};
  margin-bottom: 44px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
  img{
    width: 82px;
    height: 82px;
    border-radius: 100%;
  }
  span{
    color:  #F1F1F1;
    font-family: Tajawal_Bold, sans-serif;
    font-size: 32px;
  } 
`;

export const AdditionalMenu = styled.div`
  transition: opacity 0.3s ease;
  opacity: ${props => (props.isOpen ? 1 :0 )};
    display: flex;
    flex-direction: column;
    gap: 16px;
  span {
    font-family: Tajawal_Bold, sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    color: #858688;
    cursor: pointer;
  }
`;