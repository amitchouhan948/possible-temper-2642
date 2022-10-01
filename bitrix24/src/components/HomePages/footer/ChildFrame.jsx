import React from "react";
import styled, { css } from "styled-components";

const ChildFrame = ( { arr } ) => {
    return(
        <ChildFrameWrapper>
            <Heading>
                {
                    arr[0]
                }
            </Heading>
            <ChildFrameContent>
                {
                    arr.map( (_, idx) => 
                        (
                            <Text>
                                { arr[idx + 1] }
                            </Text>
                        )
                    )
                }
            </ChildFrameContent>
        </ChildFrameWrapper>
    )
}


const Text = styled.div`
    line-height: 16.2px;
    white-space: nowrap;
    color: white;
    padding-top:10px;
`

const Heading = styled.div`
    font-weight: 400;
    color:#B8EAFC;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;

`
const generalCSS = css`
    color:white;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
`

const ChildFrameContent = styled.div`
    ${generalCSS}
    display: flex;
    flex-direction: column;
    width: min-content;
    height: min-content;
    align-items: flex-start;
    gap: 15px;
`

const ChildFrameWrapper = styled.div`
    background-color: #3AAEF2;
    display: flex;
    flex-direction: column;
    
`
export default ChildFrame