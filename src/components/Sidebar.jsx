import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import {Home , Pages , Group , Person , Shop , Settings , AccountBox, ModeNight} from '@mui/icons-material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex='1' p={2}
    sx={{ display:{xs: "none" , sm: "block"}}}>
    <Box position='fixed'>
     <List>
      <ListItem disablePadding>
       <ListItemButton component="a" href='#home'>
         <ListItemIcon>
          <Home />
        </ListItemIcon>
          <ListItemText primary="Homepage">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#pages'>
         <ListItemIcon>
          <Pages />
        </ListItemIcon>
          <ListItemText primary="Pages">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#group'>
         <ListItemIcon>
          <Group />
         </ListItemIcon>
          <ListItemText primary="Groups">
         </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#market'>
         <ListItemIcon>
          <Shop />
        </ListItemIcon>
          <ListItemText primary="Marketplace">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#person'>
         <ListItemIcon>
          <Person />
        </ListItemIcon>
          <ListItemText primary="Friends">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#settings'>
         <ListItemIcon>
          <Settings />
        </ListItemIcon>
          <ListItemText primary="Setting">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#profile'>
         <ListItemIcon>
          <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile">
          </ListItemText>
       </ListItemButton> 
      </ListItem>

      <ListItem disablePadding>
       <ListItemButton component="a" href='#switch'>
         <ListItemIcon>
          <ModeNight />
          </ListItemIcon>
          <Switch />
       </ListItemButton> 
      </ListItem>
     </List>
     </Box>
     </Box>
  )
}

export default Sidebar