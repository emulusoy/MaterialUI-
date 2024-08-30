import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { useState } from "react";

function MUICheckbox() {


    const[confirm,setConfirm]=useState(false);

    const submit=()=>{
        if(!confirm){
            alert("Sözleşmeyi Onaylıyınız!")
        }
        else{
            alert("Gönderildi")

        }
    }
  return (
    <div style={{marginTop:"10px"}}>
        <hr />
      <FormControl component={"fieldset"}>
        <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup>
            <FormControlLabel
              
              control={<Checkbox defaultChecked disabled/>}
              label="İlkokul"
              labelPlacement="end"
            />
            <FormControlLabel
              
              control={<Checkbox/>}
              label="Lise"
              labelPlacement="end"
            />
            <FormControlLabel
              
              control={<Checkbox />}
              label="Üniversite"
              labelPlacement="end"
            />
          </FormGroup>
      </FormControl>

      <FormControl component={"fieldset"}>
          <FormGroup>
            <FormControlLabel
              
              control={<Checkbox checked={confirm} onChange={(e)=>setConfirm(e.target.checked)} />}
              label="Kullanım kşullarını kabul ediyorum !"
              labelPlacement="end"
            />
            <Button onClick={submit} variant="contained">Formu Gönder</Button>
          </FormGroup>
      </FormControl>
    </div>
  );
}

export default MUICheckbox;
