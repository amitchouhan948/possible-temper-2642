import React, { Fragment } from "react";
import styled from "styled-components";
import { FooterParentWrapper } from "../styled-components/app.styles";
import ChildFrame from "./ChildFrame";
import { columnArrF, columnArrSe, columnArrT, columnArrFo, columnArrFi, columnArrS } from './data'

const Footer = ( ) => 
{
    
    return(
        <FooterParentWrapper>

            <FooterWrapper>
                <ChildFrame arr={columnArrF}/>
                <ChildFrame arr={columnArrSe}/>
                <ChildFrame arr={columnArrT}/>
                <ChildFrame arr={columnArrFo}/>
                <ChildFrame arr={columnArrFi}/>
                <ChildFrame arr={columnArrS}/>
            </FooterWrapper>   
        </FooterParentWrapper>
    )
}

const Rights = styled.div`
    background-color: #3AAEF2;
    color:#2c1338;
    font-size: 14px;
    font-weight:400px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
`

const FooterExtra_ = styled.div`
    background-color: #3AAEF2;
    & img{
        display: block;
        margin: auto;
    }
`

const FooterExtra = styled.div`
    padding-left: 30px;
    background-color: #3AAEF2;
    padding-bottom: 40px;
    & img{
        width: 184px;
        height: 28px;
    }
`
const FooterWrapper = styled.div`
    display: grid;
    width: 90%;
    margin: auto;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    background-color: #3AAEF2;
    
    padding-top: 20px;
    border-bottom: 2px solid #9BDBFA;
`
export default Footer

