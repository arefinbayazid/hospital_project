import React from 'react';
import './RelatedPhotoes.css'
const ReletedPhotoes = ({image}) => {
    const {urlImage} = image;
    return (
        <div className=''>
            <img height={250} width={'100%'} src={urlImage} />
        </div>
    );
};

export default ReletedPhotoes;