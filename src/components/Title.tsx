import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export const Title = styled(Typography)<any>`
  // color: red;
  color: #000000;
  // font-family: ui-monospace, Menlo, Monaco, monospace;
  // font-size: 13.6px;
`;

const BoxFlex = styled(Box)<any>`
  display: flex;
`;

export const LargeBox = styled(BoxFlex)<any>`
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;
export const SmallBox = styled(BoxFlex)<any>`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;
export const TextBox = styled(Typography)<any>`
  margin-top: 20px
  text-transform: uppercase;
`;
export const TextAnother = styled(TextBox)<any>`
  margin-top: 20px;
  margin-bottom: 15px;
`;
