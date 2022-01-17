import React from 'react';
import ReletedPhotoes from './ReletedPhotoes/ReletedPhotoes';

const ServicesSelected = ({item}) => {
    // destracturing data from selected services ;
    const {category, title, cover, information,totalDoctors, reletedPhotoes} = item;
    return (
        <>
        {/* show all data in ui */}
            <div className='row mt-3 mb-5'>
            <div className='col-lg-6'>
                <h1>{title}</h1>
                <p className='mb-0'><b>Category : </b>{category}</p>
                <p className='mb-4'><b>Available Docotor's : </b>{totalDoctors}</p>
                <p>{information}</p>
            </div>
            <div className='col-lg-6'>
                <img className='img-fluid' src={cover} />
            </div>
            </div>
            <h3 className='mb-3'>Related Photo</h3>

            {/* show some releted photo */}
            <div className='relaed_images_container mb-5'>
                {
                    reletedPhotoes.map(image => <ReletedPhotoes key ={image.itemID} image = {image}></ReletedPhotoes>)
                }
            </div>
        </>
    );
};

export default ServicesSelected;