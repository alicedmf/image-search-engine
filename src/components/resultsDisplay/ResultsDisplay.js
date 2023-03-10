import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import { ImageListItem } from '@material-ui/core';

function ResultsDisplay(pics) {
    let imageListContent = null;

    if (pics.length == 0) {
        imageListContent = (
            <div class="mx-auto text-center mt-4">
                <h2 className="font-bold center">Aucun resultat</h2>
            </div>
        )
    } else {
        imageListContent = (
            <div class="mx-auto text-center mt-4">
                <ImageList cols={3} >
                    {pics.map(img => (
                        <ImageListItem class="w-full aspect-square "> key={img.id}
                            <img src={img.largeImageURL} alt="" />
                        </ImageListItem>

                    ))}
                </ImageList>
            </div>
        )
    }
    return imageListContent;
}


export default ResultsDisplay;