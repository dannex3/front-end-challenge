import React, { useState } from 'react';
import api from '../../api/axios';
import { Search, Button, Container, Box, Divider, BoxItem, NameItem } from './styles';

export function Home() {
  const [products,setProducts] = useState<any[]>([]);
  const [content,setContent] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  };
 
  const handleClick = async () => {
    const response:any = await api.get(`autocomplete?content=${content}&source=nanook`);
    setProducts(response.data.products);
    }

   return (
    <Container>
      <Box>
        <Search placeholder='Digite aqui o que você está procurando' value={content} onChange={handleChange} />
        <Divider>
          <Button id='submit' onClick={handleClick}>
            Buscar
          </Button>

        </Divider>
        <BoxItem>
          {products && products.map((product) => <NameItem>{product.name}</NameItem>)}
        </BoxItem>
      </Box>
    </Container>
  )
} 