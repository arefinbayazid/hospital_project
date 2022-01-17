import useServices from '../../hooks/useServices';
import Service from './Service/Service';
import './Services.css'
const Services = () => {
    const servicesItems = useServices()
    return (
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-lg-7 col-sm-12 col-md-12 p-0 services_box'>
                    {
                        servicesItems.map(item => <Service key={item.id} item = {item}></Service>)
                    }
                </div>
                <div className='col-lg-5 col-sm-12 col-md-12 p-0'>
                    <img src='https://i.ibb.co/MNPq3hc/Promo-Facebook-Facebook-feed.jpg' className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Services;