import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/card-Styles.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import bgcafe from '../assets/Images/bg-cafe.jpg'
import star from '../assets/Icons/Star.svg'
import star_fill from '../assets/Icons/Star_fill.svg'
import vector from '../assets/Icons/vector.svg'
import review from '../assets/Icons/preReview.svg'
import ModalOpen from '../components/modal-Open';

const style = {
    position: 'absolute',
    top: '50%',
    color: '#111315',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 5,
    p: 4,
};

function AvailableNow() {
    const [open, setOpen] = useState(false);
    const [coffee, setCoffee] = useState([]);
    const [selectedCoffees, setSelectedCoffees] = useState(null);

    const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

    useEffect(() => {
        axios.get(url)
            .then((resp) => {
                setCoffee(resp.data);
            });
    }, [setCoffee]);

    const handleOpen = (coffees) => {
        setSelectedCoffees(coffees);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCoffees(null);
    };


    return (
        <div>
            <header>
                <img src={bgcafe} alt="cafe" className='principal-image' height={350} />
            </header>

            <div className='encabezado'>

                <div>
                    <img src={vector} alt="Vector" className='vector' />
                </div>
                <div className='tittle-content'>
                    <h1>Our Collection</h1>
                    <h4 className='text-content'>
                        Introducing our Coffee Collection, a selection of unique coffees <br />
                        from different roast types and origins expertly roasted in small
                        batches and shipped fresh weekly.
                    </h4>
                    <NavLink to="/">
                        <Button className='style-button'>All Products</Button>
                    </NavLink>

                    <NavLink to="/availableNow">
                        <Button className='style-button'>Available Now</Button>
                    </NavLink>
                </div>
                <div className='principal-coffee'>
                    {coffee.map((coffees) =>
                        coffees.available ? (  // Este es el operador condicional que revisa si "available" es true
                            <div key={coffees.id}>
                                <Card sx={{ maxWidth: 345 }} className='coffee-cards'>
                                    <div className='controller-popular-div'>
                                        <CardMedia
                                            className='img-content'
                                            image={coffees.image}
                                            title={coffees.name}
                                        />
                                        {coffees.popular && (
                                            <div className='controller-popular'>Popular</div>
                                        )}
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom className='controller-content'>
                                            <div className='controller-name-coffee'>{coffees.name}</div>
                                            <div className='controller-price'>{coffees.price}</div>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {coffees.rating ? <img src={star_fill} alt="Star_fill" className='controller-star' /> : <img src={star} alt="Star" className='controller-star' />}

                                            <div className='controller-rating'>
                                                <div style={{ color: coffees?.rating ? '#FEF7EE' : '#6F757C' }}>
                                                    {coffees?.rating ? coffees.rating : 'No rating'}
                                                </div>
                                                <div className='controller-votes'>{coffees?.votes ? <div>({coffees.votes} votes)</div> : null}</div>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <div>
                                            <Button size="small" onClick={() => handleOpen(coffees)} className='bottom-modal'> <img src={review} alt="PreReview" height={30} width={30} /> </Button>
                                        </div>
                                    </CardActions>
                                </Card>
                            </div>
                        ) : null // Si "available" es false, no se renderiza nada (null)
                    )}
                </div>
                <ModalOpen
                    open={open}
                    handleClose={handleClose}
                    selectedCoffee={selectedCoffees}
                />
            </div>
        </div>
    );
}

export default AvailableNow;
