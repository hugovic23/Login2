import React from 'react';
import { Container,Card, CardItem,Text } from 'native-base';

const Items = ({items}) => {
    return(
        <Container>
            {items.map((item) => (
                <Card key={item.id}> 
                    <CardItem>
                       <Text>{item.volumeInfo.title}</Text>
                    </CardItem> 
            </Card>
            ))}
        </Container>

            
    )
};
export default Items