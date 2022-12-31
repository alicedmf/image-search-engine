import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import { ImageListItem } from '@material-ui/core';

function ResultsDisplay(pics) {
    let imageListContent = null;

    if (pics.length == 0) {
        imageListContent = (
            <div>
                <h2>Aucun resultat</h2>
            </div>
        )
    } else {
        imageListContent = (
                <ImageList cols={4}>
                    {pics.map(img => (
                        <ImageListItem> key={img.id}
                            <img src={img.largeImageURL} alt="" />
                        </ImageListItem>

                    ))}
                </ImageList>
        )
    }
    return imageListContent;
}


export default ResultsDisplay;