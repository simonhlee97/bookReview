import React, { Component } from "react";
import '../styles/Home.css';
import { Card, Image, Button } from 'semantic-ui-react';
import logo from '../images/logo.png';


const BookCards = () => (
  <Card.Group itemsPerRow={4}>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
        <Card raised>
            <Image src={logo} size="small" />
            <Card.Content>
                <Card.Header>
                    Matthew Smith
                </Card.Header>
            <Card.Meta>
                <span className='date'>
                    Joined in 2015
                </span>
            </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
        </Card>
  </Card.Group>
)

class Dashboard extends Component {
  render() {
    return (
      <div className="dash">
        <h1> Your Dashboard </h1>
        <Button>Add Review</Button>

        <BookCards />     

      </div>
    );
  }
}

export default Dashboard;