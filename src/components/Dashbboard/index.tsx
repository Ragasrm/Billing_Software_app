import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
type Props = {}

export default function Dashboard({}: Props) {

    const iconComponents:any = {
        Inventory2Icon: Inventory2Icon,
        ReceiptLongIcon: ReceiptLongIcon,
      };

 const DASHBOARD = [
    {
        id: 1,
        name: 'Stocks',
        icon: 'Inventory2Icon',
        path: '/stocks',
    },
    {
        id: 2,
        name: 'Billing',
        icon: 'ReceiptLongIcon',
        path: '/billing',
    }
]


  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {DASHBOARD.map((_, index) => {

        const Icon = iconComponents[_.icon];
        
        return(
       
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
           <Link href={_.path} style={{textDecoration: 'none'}}><Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'linear-gradient(45deg, rgb(24,118,209) 30%, rgb(66,133,244) 90%)',
              color: theme => theme.palette.common.white,
              
            }}
          >
            { Icon && <Icon style={{ fontSize: 40, color: 'white' }} />}
            <Box mt={2}>{_.name}</Box>
          </Paper>
          </Link>
        </Grid>
      )})}
    </Grid>
  </Box>
  )
}