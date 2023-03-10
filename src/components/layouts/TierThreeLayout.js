import styled from 'styled-components'
import React, {useState} from 'react'
import MintBox from '../toolsets/MintBox'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MintBoxMobile from '../toolsets/MintBoxMobile'


function TierThreeLayout({firstSecondQuantity, setFirstSecondQuantity, thirdQuantity, setThirdQuantity, selectedImages, setSelectedImages}) {

    return (
        <>
            <Row>
                <SubtitleCol>
                    Step 3
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol>
                    Mint
                </BookYourSessionCol>
            </Row>
            <br/>
            <MintBox selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            
            {/*(responsive) ? (
                <MintBox selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            ) : (
                <MintBoxMobile selectedImages={selectedImages} setSelectedImages={setSelectedImages} firstSecondQuantity={firstSecondQuantity} setFirstSecondQuantity={setFirstSecondQuantity} thirdQuantity={thirdQuantity} setThirdQuantity={setThirdQuantity}/>
            )*/}
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <SubtitleCol className="flex justify-center">
                    HELP ME MINT
                </SubtitleCol>
            </Row>
            <br/>
            <Row>
                <BookYourSessionCol style={{fontSize: "14px", paddingBottom: "150px"}} className="flex justify-center">
                    See our FAQ section and our How to Mint page for more information
                </BookYourSessionCol>
            </Row>
        </>
    )
}

export default TierThreeLayout



const BookYourSessionCol = styled(Col)`

    /* Subtitle */

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 150%;
    /* identical to box height, or 48px */

    text-transform: uppercase;

    color: #EBEAEB;
`



const SubtitleCol = styled(Col)`

    font-family: 'Alternate Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    /* identical to box height */

    text-transform: uppercase;

    color: #EBEAEB;
`


