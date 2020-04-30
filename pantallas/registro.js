import React, {Component} from 'react';
import { View, TextInput, Text} from 'react-native';
import { Button, Container, Header, Content, Input, Item } from 'native-base';
import Axios from 'axios';
class Registro extends Component{
    constructor(props){
        super(props)
        this.state = {
            UserName:'',
            UserEmail:'',
            UserPass:''
        }
    }   
    register = () =>{   
        const { UserName } = this.state;
        const { UserEmail } = this.state;
        const { UserPass } = this.state;
        console.log(this.state)

        
        const conf = {
            url: 'http://192.168.1.74/iot/data/registro.php',
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:{
                usuario: UserName,
                pass: UserPass,
                correo: UserEmail
            }
        };
        
        Axios(conf)
        .then(response => {console.log(response.data)})
        .catch(error => {console.log(JSON.stringify(error))});
        


    }
    render(){
        return(
            <Container>
                <Header />
                <Content>    
                    <Item>
                        <Input placeholder='Usuario' onChangeText={(UserName) => this.setState({UserName})}/>
                    </Item>
                    <Item>
                        <Input placeholder="Contraseña" onChangeText={(UserPass) => this.setState({UserPass})}/>
                    </Item>
                    <Item>
                        <Input placeholder="Correo" onChangeText={(UserEmail) => this.setState({UserEmail})}/>
                    </Item>   
                        <Button onPress=  {() => {this.register()}}>
                            <Text>Registrarse</Text>
                        </Button>
                </Content>
            </Container>

    );
    }
}
export default Registro;