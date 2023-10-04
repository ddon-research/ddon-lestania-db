import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {APP_VERSION} from "@/constants";
import {noto_serif} from "@/fonts";

const NavbarStyle = {
    zIndex: 2000
};

const NavbarToolbarStyle = {
    backgroundImage: "url('/images/lestania-db/background/headerVisual_bg.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto"
};

const NavbarTitleStyle = {
    color: "transparent",
    background: "linear-gradient(to bottom, #bebebe, #887746)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    p: 1
};

export default function Navbar() {
    return (
        <AppBar position="fixed" sx={NavbarStyle}>
            <Toolbar sx={NavbarToolbarStyle}>
                <Image src='/images/lestania-db/logo/logo_ddo.png' width="67" height="38" alt="Logo"/>
                <Typography variant="h5" sx={NavbarTitleStyle}>
                    LestaniaDB
                </Typography>
                <Typography color="white" fontFamily={noto_serif.style.fontFamily}>
                    ver.
                </Typography>
                <Typography color="white" fontFamily={noto_serif.style.fontFamily} fontStyle="italic">
                    β ({APP_VERSION})
                </Typography>
            </Toolbar>
        </AppBar>
    );
};