import {Button} from "@mui/material"
import AcUnitIcon from '@mui/icons-material/AcUnit';
function MUIButton() {
  return (
    <div>
        <div style={{marginBottom:'50px'}}>
        <Button variant="text">KAYDOL</Button>
        <Button variant="contained">KAYDOL</Button>
        <Button variant="outlined">KAYDOL</Button>
        </div>
        <div style={{marginBottom:'50px'}}>
        <Button color="error" variant="contained" endIcon={<AcUnitIcon/>} startIcon={<AcUnitIcon/>}>KAYDOL</Button>
        
        </div>

    </div>
  )
}

export default MUIButton