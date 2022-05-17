import React from "react";
import {ImageList, ImageListItem} from '@mui/material';

const UserImage = ({imageUrl}) => {
    return (
        <ImageList>
            {imageUrl.map((item) => (
                <ImageListItem key={item.thumbnailUrl}>
                    <img
                        style={{"height":"600px", "margin": "50px 120px"}}
                        src={`${item.thumbnailUrl}?w=164&h=164&fit=crop&auto=format`}
                        alt="Image"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default UserImage
