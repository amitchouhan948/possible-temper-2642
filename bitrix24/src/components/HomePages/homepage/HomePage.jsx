import React from "react";
import WhyImage from "./home-images/features.png.webp";
import SectionOnPremise from "./home-images/section_on_premise.jpg.webp"
import 
{ 
  CompanyCount, 
  CompanyCountGrid, 
  CompanyCountGridItemLeft, 
  CompanyCountGridItemRight, 
  CompanywhyContent, 
  CompanywhyContentItem, 
  CompanywhyContentWrapepr, 
  CompanywhyContentWrapepr_,
  CompanywhyContent_,
  CompanywhyContentItem_,
  HeaderGrid, 
  HeaderGridItem, 
  MenuMiddle, 
  MenuMiddleItem, 
  MenuRight, 
  MenuRightItem, 
  Wrapper, 
  ReadyComponent,
  ReadyComponentItem,
  PublicationWrapper,
  PublicationContainer,
  PublicationText,
  PublicationGrid,
  PublicationGridItem,
  TermContainer,
  TermContainerItemLeft,
  TermContainerItemRight,
  TermContainerWrapper,
  FooterEnd,
  CarouselContainer,
  CarouselItem,
  CarouselParent
} from "../styled-components/app.styles";

import BitrixLogo from "./home-images/Bitrix24Logo.svg";
import RightGreen from "./home-images/RightGreen.svg";
import RightBlue from "./home-images/RightBlue.svg"
import Forbes from "./home-images/color_forbes.png.webp"
import PCMag from "./home-images/color_pcmag.png.webp"
import PCWorld from "./home-images/color_pcworld.png.webp"
import TechRadar from "./home-images/color_techradar.png.webp"
import Zdnet from "./home-images/color_zdnet.png.webp"
import ReactDOM from 'react-dom';
import Footer from "../footer/Footer";
import AppStore from "./home-images/AppStore.svg"
import GooglePlay from "./home-images/GooglePlay.svg"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Link }  from "react-router-dom";
import { Box, Heading, Image } from "@chakra-ui/react";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginBottom: '0px',
  opacity: '0'
};

function HomePage() 
{
  return (
    <Wrapper>
      <HeaderGrid>
        <HeaderGridItem>
          <img src={BitrixLogo} alt="logo"/>
        </HeaderGridItem>
        <HeaderGridItem>
          <MenuMiddle>
            <MenuMiddleItem>
              tools
            </MenuMiddleItem>
          <MenuMiddleItem>
            pricing
          </MenuMiddleItem>
          <MenuMiddleItem>
            solutions
          </MenuMiddleItem>
          <MenuMiddleItem>
            partners
          </MenuMiddleItem>
          <MenuMiddleItem>
            apps
          </MenuMiddleItem>
          <MenuMiddleItem>
            blog
          </MenuMiddleItem>
          <MenuMiddleItem>
            support
          </MenuMiddleItem>
        </MenuMiddle>
      </HeaderGridItem>
      <HeaderGridItem>
        <MenuRight>
          <MenuRightItem>
            <Link to="/Signup">
              <button>start for free</button>
            </Link> 
          </MenuRightItem>
          <MenuRightItem>
            <Link to="/Login"> log in </Link>  
          </MenuRightItem>
          <MenuRightItem>
            en
          </MenuRightItem>
        </MenuRight>
      </HeaderGridItem>
      </HeaderGrid>
      
      <CarouselParent style={{paddingTop:"75px",paddingLeft:"100px"}}>
       <Box bgColor={"white"} >
        <Image src={require("./Crousel.gif")}/>
      </Box>
      </CarouselParent>
     
      


      <CompanyCount>
        <CompanyCountGrid>
          <CompanyCountGridItemLeft>
            <div>
              10,000,000
            </div>
            <div>
              organizations have chosen Bitrix24
            </div>
          </CompanyCountGridItemLeft>
          <CompanyCountGridItemRight>
            <div>
              available in <span style={{padding:"10px",borderRadius:"50px"}}>18</span> languages
            </div>
          </CompanyCountGridItemRight>
        </CompanyCountGrid>
      </CompanyCount>
      
      <CompanywhyContentWrapepr>
        <CompanywhyContent>
          <CompanywhyContentItem>
            <div>
              <h2>
                What makes Bitrix24 
                <span> better than 99% </span> 
                of other solutions on the market?
              </h2>
              <div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/><span> Replaces all your current SaaS solutions</span>
                </div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/> <span> Free forever for unlimited users</span>
                </div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/> <span> Easy to migrate your data from other systems</span>
                </div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/> <span> Integrated with all your favorite services and apps</span>
                </div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/> <span> Used, loved, and trusted by 10,000,000+ users worldwide</span>
                </div>
                <div>
                  <img src={RightGreen} alt="RightGreen"/> <span> <strong>100% flat fee:</strong> predictable costs, no per-user pricing</span>
                </div>
              </div>
              <div>
                <button>START FOR FREE</button>
              </div>
            </div>
          </CompanywhyContentItem>
          <CompanywhyContentItem>
            <img src={WhyImage} alt="Why Image" />
          </CompanywhyContentItem>
          <CompanywhyContentItem>

          </CompanywhyContentItem>
        </CompanywhyContent>
      </CompanywhyContentWrapepr>

      <PublicationWrapper>
        <PublicationContainer>
          <PublicationText>
            Bitrix24 in the Press
          </PublicationText>
          <PublicationGrid>
            <PublicationGridItem>
              <img src={Forbes} alt="image"/>
            </PublicationGridItem>
            <PublicationGridItem>
              <img src={PCMag} alt="image"/>
            </PublicationGridItem>
            <PublicationGridItem>
              <img src={PCWorld} alt="image"/>
            </PublicationGridItem>
            <PublicationGridItem>
              <img src={TechRadar} alt="image"/>
            </PublicationGridItem>
            <PublicationGridItem>
              <img src={Zdnet} alt="image"/>
            </PublicationGridItem>
          </PublicationGrid>
        </PublicationContainer>
      </PublicationWrapper>

      <CompanywhyContentWrapepr_>
        <CompanywhyContent_>
          <CompanywhyContentItem_>
            <img src={SectionOnPremise} alt="Why Image" />
          </CompanywhyContentItem_>
          <CompanywhyContentItem_>
            <div>
              <h2>
                Bitrix24 On-Premise Edition
              </h2>
              <div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/><span> Increased service performance and speed</span>
                </div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/> <span> Hosted on your own server</span>
                </div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/> <span> Enhanced security settings</span>
                </div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/> <span> Fully customizable: fonts, colors, menus, texts, source code, etc.</span>
                </div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/> <span> Easily scalable</span>
                </div>
                <div>
                  <img src={RightBlue} alt="RightGreen"/> <span> 100+ third-party integrations</span>
                </div>
              </div>
              <div>
                <button>LEARN MORE</button>
              </div>
            </div>
          </CompanywhyContentItem_>
          <CompanywhyContentItem_>

          </CompanywhyContentItem_>
        </CompanywhyContent_>
      </CompanywhyContentWrapepr_>

      <ReadyComponent>
        <ReadyComponentItem>
          <div>
            <div style={{color:"white",fontWeight:"bold"}}>
              Ready to try?
            </div>
            <div>
              <button>REGISTER FREE</button>
            </div>
          </div>
        </ReadyComponentItem>
      </ReadyComponent>

      <Footer />
      <TermContainerWrapper>
        <TermContainer>
          <TermContainerItemLeft>
            <div>
              TERMS
            </div>
            <div>
              PRIVACY
            </div>
            <div>
              GDPR
            </div>
            <div>
              SECURITY
            </div>
            <div>
              ABUSE
            </div>
            <div>
              RULES FOR BITRIX24.SITES
            </div>
          </TermContainerItemLeft>
          <TermContainerItemRight>
            <div>
              <img src={AppStore} alt="AppStore"/>
            </div>
            <div>
              <img src={GooglePlay} alt="AppStore"/>
            </div>
          </TermContainerItemRight>
        </TermContainer>
      </TermContainerWrapper>

      <FooterEnd>
        Copyright © 2022 Bitrix24
      </FooterEnd>
    </Wrapper>
  );
}

export default HomePage;