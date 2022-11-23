import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState } from 'react';

import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { selectorContext } from '../../Context/Context.tsx';
import contextProps from '../../Context/interfaces';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems:string[] = ['Inicio','Servicios','Flota','Presupuestos','Contacto'];
const navItemsEn:string[] =['Home','Services','Fleet','Budgets','Contact']
const navItemsFr:string[] =['Accueil','Services','Flotte','Budgets','Contact']
const routesName:string[] = ['/', 'Services', 'Cars', 'Budget', 'Contact']

function NavBar(props: Props) {
  const {language,selector, setSelector} = useContext<contextProps>(selectorContext);
  const { window } = props;
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  // const [selector, setSelector] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', paddingRight:'1rem', paddingLeft:'1rem', paddingTop:'1rem' }}>
      <img className={styles.navBar__img} src="../../../Segobus2005-removebg-preview.png" alt="segobus"/>
      <Divider />
      <List>
        {
        (language === 'es' ? navItems : language === 'en' ? navItemsEn : navItemsFr).map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <ListItemText primary={item} onClick={() => {setSelector(index); index === 0 ? navigate('/') : navigate(`/${routesName[index]}`)}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height:'4rem'}}>
      <AppBar component="nav" sx={{backgroundColor:'white'}}>
        <Toolbar sx={{display: 'flex', justifyContent:'space-between', width:'95%'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:'black'}}/>
          </IconButton>
          <img className={styles.navBar__img} src="../../../Segobus2005-removebg-preview.png" alt="segobus"/>
          <Box sx={{ display: { xs: 'none', sm: 'flex'} }}>
            {
            (language === 'es' ? navItems : language === 'en' ? navItemsEn : navItemsFr).map((item, index) => (
              <Button key={item} sx={{ color: 'black', display:'flex', flexDirection:'column'}} onClick={() => {setSelector(index); index === 0 ? navigate('/') : navigate(`/${routesName[index]}`)}}>
                <span className={styles.box}>{item}</span>
                <span className={index === selector && styles.span__selector_navBar} id={`${index}_button`}></span>
              </Button>
            ))
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box'}
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default NavBar