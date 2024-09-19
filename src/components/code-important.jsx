<Card border="dark" className='principal-coffee'>
<Card.Body>
    <div className='tittle-content'>
        <h1 >Our Collection</h1>
        <h4 className='text-content'>Introducing our Coffee Collection, a selection of unique coffees <br />
            from different roast types and origins expertly roasted in small <br />
            batches and shipped fresh weekly.
        </h4>
        <NavLink to="/">
            <Button className='style-button'> All Products </Button>
        </NavLink>

        <NavLink to="/availableNow">
            <Button className='style-button'> Available Now </Button>
        </NavLink>
    </div>
    <div className='Coffee-cards'>
        {coffee.map((coffees) =>
        <div>
            
        </div>
        )}

    </div>
</Card.Body>
</Card>