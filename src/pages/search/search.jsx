import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CARI_CHARACTER } from '../../lib/queries/CariCharacter'
import { useQuery } from '@apollo/client/react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import QM from './qm.png';
import { useState, useEffect } from 'react';

const Search = () => {
    const [temp,settemp] = useState("");
    const [result,setresult] = useState("");

    const {loading, error, data} = useQuery(CARI_CHARACTER,{
        variables:{
            names:result
        }
    });

    const navigate = useNavigate();
    const parseData = (imagelink, nama, Tvshows, films, shortfilms, games) => {
      navigate('/find',{state:{image:imagelink, name: nama, tvshow: Tvshows, film: films, shortfilm: shortfilms, game: games}});
    }
    
    const handlechangedata = (event) => {
      event.preventDefault();
      settemp(event.target.value);
    }

    const handleinputdata = () => {
      setresult(temp);
      parseData(data.characterByName.imageUrl,data.characterByName.name,data.characterByName.tvShows,data.characterByName.films,data.characterByName.shortFilms,data.characterByName.videoGames)
    } 
    
    const handlefavouritePage = () => {
      navigate('/favourite',{state:{favo:[]}});
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
              <Nav.Link className='active' href="/">Search</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link onClick={handlefavouritePage}>Favourite</Nav.Link>
          </Nav>
          </Container>
      </Navbar>

        <InputGroup style={{
            width: "96%",
            margin: "2%"
        }}>
        <Form.Control 
          onChange={handlechangedata}
          placeholder="Character Name.."
          aria-describedby="basic-addon2"
          value={temp}
        />
        <Button onClick={handleinputdata} variant="outline-dark">Search</Button>
      </InputGroup>

    <Card style={{
      border: 'None',
      marginTop: '15%'
    }} className="text-center">
      <Card.Body>
        <Card.Title style={{
          marginBottom: '5%'
        }}>Search For Character</Card.Title>
        <Card.Img style={{
          height: '150px',
          width: '200px'
        }} src={QM}/>
        <Card.Text style={{
          marginTop: '5%'
        }}>
          Please double click the search button due to reload page
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
}

export default Search;