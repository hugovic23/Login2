import React, {Component} from 'react';
import { View, TextInput, Text, Alert} from 'react-native';
import { Button, Container, Header, Content, Input, Item,Card, CardItem } from 'native-base';
import Axios from 'axios';
import Items from '../components/items';

class Principal extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount(){

        const conf={
            url:'https://www.googleapis.com/books/v1/volumes?q=quilting',
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        Axios(conf)
        .then(response=>{
            this.setState({items: response.data.items});
            console.log(this.state);
        })

    } 
    render(){
        return(
            <Container>
                <Header />
                <Content>
                    <Text>Bienvenido</Text>  
                    <Text>Usuario: { this.props.route.params.usuario }</Text>
                    <Text>Contraseña: { this.props.route.params.pass }</Text>
                    <Text>TITLES OF BOOKS FROM GOOGLE</Text>
                    <Items items={this.state.items}/>
                </Content>
            </Container>

    );
    }
}
export default Principal;