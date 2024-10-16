import styled from "styled-components";
import Cover from '../../assets/images/CoverImage.png'



export const HomeWrap = styled.section`
  .whole{
    width: 100%;
    background-image: url(${Cover}); 
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
  }
  .videoWrapper {
    position: relative;
}
  .backgroundVideo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 50000;
  }
  .inside{
    display: flex;
    flex-direction: column;
    padding-left: 157px;
    justify-content: space-between;
    position: relative;
    z-index: 100000;
  }
  .main{
      display: flex;
      flex-direction: column;
      padding-top: 172px;
      max-width: 820px;
      width: 100%;
  }
  .title{
      max-width: 683px;
      width: 100%;
      margin-bottom: 18px;
  
  }
  .credentials{
    display: flex;
    gap: 18px;
    margin-bottom: 15px;
    margin-top: 18px;
    font-size: 30px;
    color: #F1F1F1;
  }
  h1{
   color: #F1F1F1;
   margin-bottom: 26px;
   font-size: 32px;
  }
  h2{
     margin-bottom: 12px;
     color: #858688;
     font-size: 24px;
     font-family: Tajawal_Bold, sans-serif;
     text-transform: uppercase;
  }
  .btnsDiv{
    display: flex;
    gap:18px;
    align-items: center;
  }
`;

export const Whole = styled.section`
    width: 100%;
    background-image: url(${Cover}); 
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    `;
