import Drawer from "@mui/material/Drawer";
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
    {key: 'vocation', href: '/vocation'},
    {key: 'character', href: '/character'},
    {key: 'monster', href: '/monster'},
    {key: 'item', href: '/item'}
];

const FOOTER_LINKS = [
    {key: 'settings', icon: SettingsIcon}
];

export default function LeftVerticalMenu() {
    const tHeader = useTranslations('LeftVerticalMenu.header');
    const tFooter = useTranslations('LeftVerticalMenu.footer');

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
            <List>
                {HEADER_LINKS.map(({key, href}) => (
                    <ListItem key={href} disablePadding>
                        <ListItemButton component={Link} href={href}>
                            <ListItemText primary={tHeader(key)}
                                          primaryTypographyProps={{
                                              style: {
                                                  textTransform: 'uppercase'
                                              }
                                          }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List sx={{mt: 'auto'}}>
                {FOOTER_LINKS.map(({key, icon: Icon}) => (
                    <ListItem key={key} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon/>
                            </ListItemIcon>
                            <ListItemText primary={tFooter(key)}
                                          primaryTypographyProps={{
                                              style: {
                                                  textTransform: 'uppercase'
                                              }
                                          }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};