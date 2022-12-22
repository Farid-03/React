import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, Link } from "react-router-dom";

const drawerWidth = 240;
function Sidebar() {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="static"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            API React
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <List>
                        {['View All'].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <Link to={`/`}>
                                        <ListItemText primary={text}></ListItemText>
                                    </Link>

                                </ListItemButton>
                            </ListItem>
                        ))
                        }
                    </List>
                    <List>
                        {['Add'].map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                    <Link to={`/add`}>
                                        <ListItemText primary={text}></ListItemText>
                                    </Link>

                                </ListItemButton>
                            </ListItem>
                        ))
                        }
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}></Box>
            </Box>
        </div>
    )
}

export default Sidebar