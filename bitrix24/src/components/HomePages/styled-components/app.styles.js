import styled  from "styled-components";

export const Wrapper = styled.div``;
export const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    padding: 20px 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 2px 0px;
    grid-gap: 70px;
    background-color: white;
    position: fixed;
    z-index: 100;
`;

export const HeaderGridItem = styled.div``;

export const BitrixLogo = styled.div`
    & img {}
`;

export const MenuMiddle = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 100%;
    gap: 20px;
    
    & div:hover {
        color: #3AAEF2;
        cursor: pointer;
    }
`;

export const MenuMiddleItem = styled.div`
    text-transform: uppercase;
    place-self: center;
    font-size: 13px;
    font-weight: 600;
`;

export const MenuRight = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    height: 100%;
`;

export const MenuRightItem = styled.div`
    text-transform: uppercase;
    place-self: center;
    font-size: 12px;
    font-weight: 400;

    & button {
        color:#262626;
        background-color: #BDF300;
        font-size:12px;
        font-weight:bold;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 15px;
        padding-right: 15px;
        text-transform: uppercase;
        border: none;
        border-radius: 20px;
    }
`;

export const CompanyCount = styled.div`
    background-color: #3AAEF2;
    grid-template-columns: 2fr 1fr;
`;

export const CompanyCountGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const CompanyCountGridItemLeft = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    & div {
        color: #FFFFFF;
        font-size: 22px;
        font-weight: bold;
    }
    & div:nth-child(1) {
        margin-left: 50px;
        justify-self: center;
    }
`;

export const CompanyCountGridItemRight = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-left: 35px;
    color:white;
    & span {
        background-color: #FFFFFF;
        border-radius: 50%;
        color: #0dcaf0;
        padding: px;
    }
`;

export const CompanywhyContentWrapepr = styled.div`
    background-color: #F8F8F8;
`;
export const CompanywhyContent = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 70px;
    padding-bottom: 70px;
    & div:nth-child(2) img {
        width: 502px;
        height: 459px;
    }

    & div:nth-child(1) div h2 {
        font-size:36px;
        font-weight:400;
        margin-bottom: 42px;
    }

    & div:nth-child(1) > div > div > div > img {
        width: 17px;
        height: 17px;
    }

    & div:nth-child(1) > div > div > div {
        font-size: 17px;
        margin-bottom: 16px;
    }

    & div:nth-child(1) > div {
        margin-bottom: 38px;
    }

    & div:nth-child(1) div h2 > span {
        font-size:36px;
        font-weight:bold;
        color: #0dcaf0;
    }

    & div:nth-child(1) > div button {
        background-color: #BDF300;
        color: #262626;
        font-size: 14px;
        border: 0px;
        font-weight: bold;
        padding: 12px 24px;
        border-radius: 20px;
    }
`
export const CompanywhyContentItem = styled.div``;


export const CompanywhyContentWrapepr_ = styled.div`
    background-color: #F8F8F8;
`;

export const CompanywhyContent_ = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 70px;
    padding-bottom: 70px;
    & div:nth-child(1) img {
        width: 502px;
        height: 459px;
    }

    & div:nth-child(2) div h2 {
        font-size:36px;
        font-weight:400;
        margin-bottom: 42px;
    }

    & div:nth-child(2) > div > div {
        margin-bottom: 38px;
    }

    & div:nth-child(2) > div > div > div > img {
        width: 17px;
        height: 17px;
    }

    & div:nth-child(2) > div > div > div {
        font-size: 17px;
        margin-bottom: 16px;
    }

    & div:nth-child(2) > div {
        margin-bottom: 38px;
    }

    & div:nth-child(2) div h2 > span {
        font-size:36px;
        font-weight:bold;
        color: #0dcaf0;
    }

    & div:nth-child(2) > div button {
        background-color: white;
        color: #0dcaf0;
        font-size: 14px;
        border: 0px;
        font-weight: normal;
        padding: 12px 24px;
        border-radius: 20px;
        border: 2px solid #0dcaf0;
    }
`
export const CompanywhyContentItem_ = styled.div``;


export const ReadyComponent = styled.div`
    display: flex;
    padding-top:40px;
    padding-bottom: 40px;
    justify-content: center;
`;

export const ReadyComponentItem = styled.div`
    & div > div{
        color: #262626;
        font-size: 36px;
    }

    & div > div:nth-child(2) > button{
        background-color: #BDF300;
        border: 0px;
        padding: 12px 24px;
        border-radius: 20px;
        display: inline-block;
        margin-left: 10%;
        font-weight: bold;
        font-size: 14px;
    }
`;

export const PublicationWrapper = styled.div`
    padding-top: 74px;
    padding-bottom: 55px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const PublicationContainer = styled.div``;

export const PublicationText = styled.div`
    text-align: center;
    color:#262626;
    font-size: 36px;
    font-weight: normal;
`;

export const PublicationGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 90%;
    margin: auto;
`;

export const FooterParentWrapper = styled.div`
    background-color: #3AAEF2;
    padding-top: 30px;
`;

export const PublicationGridItem = styled.div`
    & img {
        width: 169px;
        height: 168px;
    }
`;

export const TermContainerWrapper = styled.div`
    background-color: #3AAEF2;
`;
export const TermContainer =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: auto;
    background-color: #3AAEF2;
    padding-top: 30px;
    padding-bottom: 30px;
    & div:nth-child(1){
        color: #CEEEFD;
        font-size: 10px;
    }

`;

export const TermContainerItemLeft = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const TermContainerItemRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;


export const FooterEnd = styled.div`
    text-align: center;
    color: #D6F1FD;
    font-size: 12px;
    background-color: #3AAEF2;
    padding-bottom: 30px;
`;


export const CarouselContainer = styled.div`
    & > h2{
        color: #0053AA;
        font-weight: bold;
        font-size: 25px;
        text-align: center;
        padding-top: 20px;
        background-color: white;
    }
`;

export const CarouselParent = styled.div`
    background-color: white;
    padding-top:60px;
`;

export const CarouselItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70%;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: white;

    
    & > div > div {
        display: flex;
        flex-direction: row;
    }

    & div {
        color: #262626;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
    }

    & img{
        padding-right: 20px;
    }

`;