import React, {Component} from 'react';
import { View, TextInput, Text, Alert} from 'react-native';
import { Button, Container, Header, Content, Input, Item } from 'native-base';
import Axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            UserNameL:'',
            UserPassL:''
        }
    }   
    login = () =>{   
        const { UserNameL } = this.state;
        const { UserPassL } = this.state;

        
        const conf = {
            url: 'http://192.168.1.74/iot/data/login.php',
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:{
                usuario: UserNameL,
                pass: UserPassL,
            }
        };

        
        Axios(conf)
        .then(response => {
            Alert
            .alert(
                "Bienvenido Usuario", 
                UserNameL, 
                [{ 
                    text: "Siguiente", 
                    onPress: () => this.props.navigation.navigate('Principal', { usuario: UserNameL, pass: UserPassL })
                
                }]
            );
        })
        .catch(error => {
            Alert.alert("Usuario No existente o contraseña Incorrecta","", [{text: "Volver a intentar", onPress: () => this.props.navigation.navigate('Login')}]);
        });
    }
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
                <Header />
                <Content>    
                    <Item>
                        <Input placeholder='Usuario' onChangeText={(UserNameL) => this.setState({UserNameL})}/>
                    </Item>
                    <Item>
                        <Input placeholder="Contraseña" onChangeText={(UserPassL) => this.setState({UserPassL})}/>
                    </Item> 
                        <Button primary onPress=  {() => {this.login()}}>
                            <Text>Ingresar</Text>
                        </Button>
                        <Button primary onPress=  {() => {navegar.navigate('Registro')}}>
                            <Text>Crear Cuenta</Text>
                        </Button>
                </Content>
            </Container>

    );
    }
}
export default Login;