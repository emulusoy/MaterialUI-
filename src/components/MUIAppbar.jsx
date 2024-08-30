import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

function MUIAppbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = (e) => {
    setAnchorEl(null);
  };
  const openControl = anchorEl ? true : false;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
        <Typography variant="h6">EMU</Typography>

        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }} onClick={openMenu}>
            Ürünler
          </Button>
          <Button sx={{ color: "white" }}>İletişim</Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl}>
          <MenuItem onClick={closeMenu}>Elma</MenuItem>
          <MenuItem onClick={closeMenu}>Armut</MenuItem>
          <MenuItem onClick={closeMenu}>Karpuz</MenuItem>
          <MenuItem onClick={closeMenu}>Domates</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MUIAppbar;
