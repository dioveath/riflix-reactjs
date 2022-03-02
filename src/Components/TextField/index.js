import styled from 'styled-components';

const TextField = styled.input`
border: 1px solid gray;
padding: 8px 10px;
border-radius: 20px;
outline: none;
height: 30px;

&:placeholder { 
color: blue;
}

&:focus { 
border: 1px solid darkblue;
}


`;

export default TextField;
