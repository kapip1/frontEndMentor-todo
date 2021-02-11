import styled from 'styled-components';

import checked from './assets/icon-check.svg';

export const CheckBoxLabel = styled.label`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border: 0.5px solid grey;
  border-radius: 50%;
`;

export const CheckBoxInput = styled.input`
  display: none;
`;
export const CheckBoxMark = styled.span`
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #57ddff, #c058f3);
  border-radius: 50%;
  display: inline-block;
  &::after {
    position: absolute;
    content: '';
    transform: translate(-50%, -50%);
    left: 53%;
    top: 55%;
    width: 60%;
    height: 60%;
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
