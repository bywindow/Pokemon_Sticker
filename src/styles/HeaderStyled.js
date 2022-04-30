import styled from 'styled-components';
import { mainColor } from './GlobalStyle';


//헤더 밖 컨테이너
export const outsideStyle = styled.div`
    display: flex;
    width: 100%;
    height: 95px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

//헤더
export const header = styled.header`
    width: 100%;
    height: 95px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .dropdown-toggle::after {
        color: #1bc1bb;
        vertical-align: none;
    }
    .dropdown-item.active,
    .dropdown-item {
        &:active {
            background-color: #1bc1bb;
        }
    }
    @media screen and (max-width: 991px) {
        width: 90%;
        margin: 0 auto;
    }
`;

export const logoContainer = styled.div`
    width: 80px;
    height: auto;
    margin: auto 20px;
`;

export const logoStyle = styled.img`
    width: 100%;
    object-fit: contain;
`;