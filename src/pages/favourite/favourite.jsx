import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';
import { ALL_CHARACTER } from '../../lib/queries/AllCharacter'
import { useQuery } from '@apollo/client/react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Favourite = () => {
    const [fav,setfav] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    if(fav!=location.state.favo){
        setfav(location.state.favo);
    }

    const {loading, error, data} = useQuery(ALL_CHARACTER);

    const parseData = (imagelink, nama, Tvshows, films, shortfilms, games) =>{
        navigate('/detail',{state:{image:imagelink, name: nama, tvshow: Tvshows, film: films, shortfilm: shortfilms, game: games}});
    }
    
    if(loading) return <Alert className='font1' key='primary' style={{
        textAlign: 'center'
    }}>Loading...</Alert>
    
    return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#" style={{
                marginLeft: '11%'
            }}>Dizney</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Search</Nav.Link>
                <Nav.Link href="/list">List</Nav.Link>
                <Nav.Link className='active' href="/favourite">Favourite</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

        <div>{data.characters.items.map((m)=>{
            var count=0;
            {fav.map((f)=>{
                if(m._id==f){
                    count++;
                }
            })}
            if(count>0){
                return <div key={m._id}>
                    <Card className='font1' style={{ width: '18rem', margin: '10%', marginLeft: '10%' }}>
                    <Card.Img style={{
                        width: '200px',
                        height: '200px',
                        margin: '10%',
                        marginLeft: '15%'
                    }} variant="top" src={m.imageUrl} />
                    <Card.Body style={{
                        backgroundColor: "#F3CC64"
                    }}>
                        <Card.Title style={{
                            textAlign: 'center',
                        }}>Character Name : {m.name}</Card.Title>
                        <Button style={{
                            marginLeft: '30%'
                        }} onClick={()=>{parseData(m.imageUrl, m.name, m.tvShow, m.films, m.shortFilms, m.videoGames)}} variant="warning">See Details</Button>
                    </Card.Body>
                    </Card>
                </div> 
            }
        })}</div>
    </div>
    )
}

export default Favourite;