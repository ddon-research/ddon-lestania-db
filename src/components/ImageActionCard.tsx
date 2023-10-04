import * as React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Image from "next/image";

export type ImageActionCardProps = {
    heading: string,
    headingIconUrl?: string,
    text: string,
    imageUrl: string
};

const ImageActionCardStyle = {
    maxWidth: 320
};

const ImageActionCardImageStyle = {
    maxWidth: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 'auto',
    width: 'auto'
};

export default function ImageActionCard({heading, text, headingIconUrl, imageUrl}: ImageActionCardProps) {
    return (
        <Card sx={ImageActionCardStyle}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={imageUrl}
                    alt="Image"
                    sx={ImageActionCardImageStyle}
                />
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        {
                            headingIconUrl && <Image src={headingIconUrl} width="26" height="30" alt="Icon"/>
                        }
                        <Typography gutterBottom variant="h5" component="div">
                            {heading}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}