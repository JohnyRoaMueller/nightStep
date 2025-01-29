import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import { menuIconHide } from './appbarMenuStyles';
import { Link } from 'react-router-dom';


export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MenuIcon sx={menuIconHide}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      </MenuIcon>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/home">home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/find">find</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contact">contact</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/test">test</Link>
        </MenuItem>
      </Menu>
    </>
  );
}