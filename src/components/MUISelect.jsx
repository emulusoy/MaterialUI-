import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function MUISelect() {
    const[currency,setCurrency]=useState('')
  return (
    <div>
       <FormControl sx={{width:"200px",border:'1px solid red'}}>
        {/* ui da sx ile style verebiliiriz! */}
        <InputLabel sx={{BorderColor:'red'}}>Para Birimi</InputLabel>
        <Select value={currency}onChange={(e)=>setCurrency(e.target.value)}>
            <MenuItem value="TRY">Türk Lirası</MenuItem>
            <MenuItem value="USD">Dolar</MenuItem>
            <MenuItem value="EUR">Euro</MenuItem>
        </Select>
       </FormControl>
    </div>
  )
}

export default MUISelect