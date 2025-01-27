import styled from "styled-components";

export const Aa = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
max-height:100%;
height:100vh;


`

export const Box = styled.div`
    opacity:0;
    text-align:center;
    max-width:540px;
    padding:5px 50px;
    color:#efefef;
    backdrop-filter: blur(10px);    /* Efeito de desfoque */
    -webkit-backdrop-filter: blur(10px); /* Suporte para navegadores WebKit */
    border-radius:2px;
    scale:0.8;


    h1{
    font-family: "Smooch Sans", serif;
    font-optical-sizing: auto;
    font-weight: 600;
    letter-spacing:1px;
    font-style: normal;
    display:flex;
    flex-direcion:row;
    font-size:26px;
    gap:5px;

        span{
        letter-spacing:1px;
        }
    }



`