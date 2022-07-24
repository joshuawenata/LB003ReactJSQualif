import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ALL_CHARACTER } from '../../lib/queries/AllCharacter'
import { useQuery } from '@apollo/client/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const List = () => { 
    // const [save,setsave] = useState(fav);
    const [fav,setfav] = useState([]);
    const navigate = useNavigate();

    const handleFav = (query) =>{
      let newArr = [...fav];
      let found = fav.indexOf(query)
      if(found === -1){
          newArr.push(query);
      }else{
          newArr.splice(found,1);
      }
      setfav(newArr);
    }   

    const {loading, error, data} = useQuery(ALL_CHARACTER);

    const parseData = (imagelink, nama, Tvshows, films, shortfilms, games) =>{
        navigate('/detail',{state:{image:imagelink, name: nama, tvshow: Tvshows, film: films, shortfilm: shortfilms, game: games}});
    }

    const handlefavouritePage = () => {
        if(fav.length==0){
            navigate('/favourite',{state:{favo:[]}});
        }
        navigate('/favourite',{state:{favo:fav}});
    }

    if(loading) return <Alert className='font1' key='primary' style={{
        textAlign: 'center'
    }}>Loading...</Alert>

    return <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#" style={{
                    marginLeft: '11%'
                }}>Dizney</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link className='active' href="/list">List</Nav.Link>
                    <Nav.Link onClick={handlefavouritePage}>Favourite</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div>{data.characters.items.map((m)=>{
            let isFav = fav.indexOf(m._id)!== -1
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
                    <button onClick={()=>handleFav(m._id)} style={{marginLeft: "5%", width: '10%', border: "none", backgroundColor: isFav?"#ff0000":"#4db34d", color:"white"}}>{isFav?"-":"+"}</button>
                </Card.Body>
                </Card>
            </div> 
        })}</div> 
    </div>

}

export default List;