import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../styles/Home.css';
import logo from '../images/logo.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
          visibility: false
        };
      }
      handleToggleVisibility() {
        this.setState((prevState) => {
          return {
            visibility: !prevState.visibility
          };
        });
      }
      render() {
        return (
            <div className='login-form'>
     
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo} />
            {' '}Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
              <Button onClick={this.handleToggleVisibility} color='teal' fluid size='large'>{this.state.visibility ? 'Sign Up' : 'Login'}
              </Button>
            </Segment>
          </Form>
          <Message>
            <Button color='blue' fluid size='large' onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Login' : 'Sign Up'}
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    )
    }
}
  export default Login;
  