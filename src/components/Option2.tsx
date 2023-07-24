import React, { useState } from "react";
import styled from "styled-components";

interface OptionBoxProps {
    active?: boolean;
}

const OptionBox = styled.div<OptionBoxProps>`
  background-color: ${props => props.active ? 'blue' : 'none'};
  padding: 10px;
  width: 25%;
  border-radius: 25px;
`;

interface Props {
  children: string;
  maxChars?: number;
}

const Option2 = ({ children, maxChars = 2 }: Props) => {
const [ selectedIndex, setSelectedIndex] = useState(0)

  if (children.length <= maxChars)
    return <OptionBox>nope, wont do it</OptionBox>;
  return <OptionBox active>{children}</OptionBox>;
};

export default Option2;
