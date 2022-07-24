import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Detail = () =>{

  const location = useLocation();

  return (
    <div>
        <Alert style={{
                textAlign: 'center'
            }} key='primary' variant='primary'>
                Character Detail
        </Alert>
        <Card style={{
            height: '750px',
            border: 'None'
        }}>
        <Card.Body>
            <Card.Img style={{
                width: '200px',
                height: '200px',
                margin: '10%',
                marginLeft: '20%',
            }} src={location.state.image}/>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#bbeebb'
            }}>Name:</Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#fff099'
            }}>{location.state.name}</Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#bbeebb'
            }}>
                Tvshows/film:
            </Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#fff099'
            }}>{location.state.tvshow}</Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#fff099'
            }}>{location.state.film}</Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#fff099'
            }}>{location.state.shortfilm}</Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#bbeebb'
            }}>
                Games:
            </Card.Title>

            <Card.Title className='font1' style={{
                textAlign: 'center',
                backgroundColor: '#fff099'
            }}>{location.state.game}</Card.Title>

            <Link to='/list'>
                <Button variant="primary" style={{
                    marginLeft: '30%',
                    marginTop: '10%'
                }} >Back to List Page</Button>
            </Link>
        </Card.Body>
        </Card>
    </div>
  )

} 

export default Detail;