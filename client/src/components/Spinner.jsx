import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material'

const Component = styled(CircularProgress)`
    position: absolute;
    top: 50%;
    left: 50%;
`

export default function Spinner() {
  return <Component disableShrink />;
}