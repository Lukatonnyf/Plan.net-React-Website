import styled from "styled-components";


export const ContainerLogin = styled.div`
    width:100%;
    max-height:100%;
    height:100vh;
    display:flex;
    align-itens:center;
    justify-content:center;
    flex-direction:column;

    
    

// ESTILIZANDO O FORMULARIO

form {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:20px;


        input[type="file"]{
        display:none;
        }

        label{
            width:100px;
            height:100px;
            display:flex;
            text-align:center;
            align-content:center;
            align-items:center;
            justify-content:center;
            text-transform:uppercase;
            color:#fff;
            border:1px solid #262629;    
            border-radius:50%;
            font-size:50px;
        }


        & input{        
            all:unset;
            opacity:0;
            padding:15px 15px;
            border:1px solid #262629;    
            border-radius:5px;
            background:#09090b;
            color:#a1a1aa;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
        }


        .input-name{
             transform: translateY(50px);            
             width:300px;
        }

        .input-password{
             transform: translateY(50px);            
             width:300px;
        }

        .input-email{
             transform: translateY(50px);            
             width:300px;
        }

        .user-picture{
             opacity:0;
            transform: translateY(-50px);  
         }


        button{
            opacity:0;
            position:absolute;
            bottom:50px;
            padding:5px 20px;
            border:none;
            font-size:15px;
            font-family: "Inter", serif;
            font-weight: 500;
            letter-spacing:0.5px;
            line-height:auto;
            border-radius:5px;
            color:#f9fcff;
            background: #782cd9;
        }


`