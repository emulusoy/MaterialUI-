import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
function MUIText() {
  return (
    <div>
        <hr />
        <div style={{marginBottom:'30px'}}>
         <TextField label="İsim" variant="outlined"/>
         <TextField label="İsim" variant="filled"/>
         <TextField label="İsim" variant="standard" color="error"/>
        </div>
        <div style={{marginBottom:'30px'}}>
         <TextField  variant="outlined" helperText="Şifrenizi Paylaşmayınız" inputProps={{readOnly:true}} value="isim"/>
         <TextField label="İsim" variant="outlined" />
        </div>
        
    </div>
  )
}

export default MUIText