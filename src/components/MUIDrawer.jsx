import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';

function MUIDrawer() {
    const [open,setOpen]=useState(false);
  return (
    <div>
        <hr />
        <Button onClick={()=>setOpen(true)}>Menu</Button>
      
        <Drawer open={open} onClose={()=>setOpen(false)}>
        <Box sx={{width:'500px',textAlign:'center'}}>
                <h1>BaşlıkEkle</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Box>
        </Drawer>
    </div>
  )
}

export default MUIDrawer