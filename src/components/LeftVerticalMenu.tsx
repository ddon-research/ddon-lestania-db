import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {DRAWER_WIDTH} from "../constants";

import {useTranslations} from 'next-intl';

const HEADER_LINKS = [
    {key: 'search', href: '/'},
    {key: 'job', href: '/job'},
    {key: 'character', href: '/character'}
];

const FOOTER_LINKS = [
    {key: 'settings', icon: SettingsIcon}
];

export default function LeftVerticalMenu() {
    const translations = useTranslations('VerticalMenu');

    let menuHeaderLinks = HEADER_LINKS;
    let menuFooterLinks = FOOTER_LINKS;

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    top: ['48px', '56px', '64px'],
                    height: 'auto',
                    bottom: 0,
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Divider/>
            <List>
                {menuHeaderLinks.map(({key, href}) => (
                    <ListItem key={href} disablePadding>
                        <ListItemButton component={Link} href={href}>
                            <ListItemText primary={translations(key)}
                                          primaryTypographyProps={{
                                              style: {
                                                  textTransform: 'uppercase'
                                              }
                                          }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{mt: 'auto'}}/>
            <List>
                {menuFooterLinks.map(({key, icon: Icon}) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon/>
                            </ListItemIcon>
                            <ListItemText primary={translations(key)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};