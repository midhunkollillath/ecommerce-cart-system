import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ProductsIcon from '@mui/icons-material/ShoppingCart'; 
import CustomersIcon from '@mui/icons-material/People';

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerContent = (
    <List>
      <ListItem button component="a" href="/products">
        <ProductsIcon sx={{ mr: 2 }} /> 
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component="a" href="/customers">
        <CustomersIcon sx={{ mr: 2 }} />
        <ListItemText primary="Customers" />
      </ListItem>
    </List>
  );

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawerContent}
      </Drawer>
      
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
