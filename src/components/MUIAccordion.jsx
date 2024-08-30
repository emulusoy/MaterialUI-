import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
function MUIAccordion() {

    const [expanded,setExpanded]=useState(''|false)//şimdi aşağıda panel 1 değerini
    //string olarak ifade ettik ama state içinde sadece false  booolen değer 
    //vardı bunu değiştirdik sana ya string değer ya da boolen değer gelebilir diyoruz!

    const handleChange=(panelName)=>(event,expanded)=>{
        setExpanded(expanded ? panelName : false);
    }
  return (
    <div>
      <Accordion expanded={expanded==='panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          İçerik l
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem quo
          culpa suscipit doloribus quibusdam porro molestias recusandae sit ipsa
          voluptas, possimus omnis deserunt, quia dolores nulla perferendis esse
          animi architecto itaque incidunt quaerat. Qui, recusandae.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          İçerik 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          distinctio numquam voluptatum omnis excepturi velit! Quaerat sunt odio
          voluptatibus?
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          İçerik 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          consectetur mollitia distinctio, reiciendis deleniti repudiandae, unde
          perspiciatis, modi dolorum asperiores doloremque nihil?
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MUIAccordion;
