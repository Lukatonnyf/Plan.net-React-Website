import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    max-width: 100%px;
    max-height:50vh;
    padding:5px;
    color:#a1a1aa;
    gap:10px;
    font-size:13px;
    font-family: "Inter", serif;
    font-optical-sizing: auto;
    font-weight: regular;
    letter-spacing:-2%;
    font-style: normal;
`

export const CardListen = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:30px;
    width:370px;
    max-height:35vh;
    height:200px;
    line-height:auto;
    overflow: scroll;

    ul{
        width:100%;
        display:flex;
        align-items:center;
        flex-direction:column;
        gap:10px;
        justify-content:space-between;

    }
    
    li{
        
        width:100%;
        list-style:none;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:#18181b;
        padding:15px 25px;
        border-radius:5px;
        border:1px solid #262629;    
        
        &   span {
                display:flex;
                align-items:center;
                gap:5px;
        }
 
        &   p {
                display:flex;
                flex-direction:column;
                align-items:end;
            
        }
        
        }
`

export const AditionActivity = styled.button`
    padding:5px 20px;
    border:none;
    font-size:15px;
    font-family: "Inter", serif;
    font-weight: 500;
    letter-spacing:0.5px;
    line-height:auto;
    border-radius:5px;
    background:#8234e9;
    color:#ffffff;
    margin-top:20px;


    
    `

// CARD PARA ADICIONAR AS TAREFAS

export const AdicionarTarefa = styled.div`
    position:absolute;
    bottom:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    max-width:100%;
    max-height: 400px;
     width:100%;
    height:100%;
    padding:10px;
    background:#18181b;

div{
        width:100%;
        height:25px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:20px;
        letter-spacing:2px;
         
        .fechar-btn{
            position:absolute;
            top:20px;
            left:20px;
            background:none;
            border:none;
            color:#efefef;
            font-size:15px;
        }
}

    form {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:20px;



        & input{
            all:unset;
            width:300px;
            padding:15px 15px;
            border:1px solid #262629;    
            border-radius:5px;
            background:#09090b;
            color:#a1a1aa;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;

        }


        & input:focus{
          outline: none;
          border-color: #782cd9;}
        
          & button {
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



            input::-webkit-clear-button,
            input::-webkit-inner-spin-button,
            input::-webkit-calendar-picker-indicator {
            display: none; /* Remove botões extras no Chrome */
            }
            

    }

`