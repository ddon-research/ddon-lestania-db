import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import {noto_serif} from "../fonts";
import * as React from "react";

export default function Navbar() {
    return (
        <AppBar position="fixed" sx={{zIndex: 2000,}}>
            <Toolbar sx={{
                // backgroundColor: 'background.paper'
                backgroundImage: "url('/images/official/headerVisual_bg.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto"
            }}>
                <Image src='/images/official/logo/logo_ddo.png' width="67" height="38" alt="Logo"/>
                <Typography variant="h5" color="transparent"
                            sx={{
                                background: "linear-gradient(to bottom, #bebebe, #887746)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                p: 1
                            }}>
                    LestaniaDB
                </Typography>
                <Typography color="white" fontFamily={noto_serif.style.fontFamily}>
                    ver.
                </Typography>
                <Typography color="white" fontFamily={noto_serif.style.fontFamily} fontStyle="italic">
                    β
                </Typography>
            </Toolbar>
        </AppBar>
    );
};