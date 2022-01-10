import React from 'react';
import styled from "styled-components";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';

const EmailandSupport = () => {
    return (
        <Wrapper>
            <DivContainer>
                <MailOutlineIcon className='Icons' />
                <h3>Email: example@gmail.com</h3>
            </DivContainer>
            <DivContainer1>
                <PersonIcon className='Icons' />
                <h3>Support: +91 123 456 7890</h3>
            </DivContainer1>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display:flex;
`;
const DivContainer =styled.div`
    background-color:#D8721C;
    padding: 30px 0px;
    width: 50%;
    text-align:center;
    color: white;
    .Icons{
        font-size: 80px;
        position:absolute;
        color: rgba(0,0,0,0.2);
        display: flex;
        margin-left:10%;
    };
    > h3 {
        font-weight: 700;
    }
`;
const DivContainer1 =styled.div`
    background-color: #f68220;
    padding: 30px 0px;
    width: 50%;
    text-align:center;
    color: white;
    .Icons{
        font-size: 80px;
        position:absolute;
        color: rgba(0,0,0,0.2);
        display: flex;
        margin-left:10%;
    };
    > h3 {
        font-weight: 700;
    }
`;

export default EmailandSupport;