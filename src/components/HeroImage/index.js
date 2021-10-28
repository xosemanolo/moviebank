import React from 'react';

import { Wrapper, Content, Text } from './HeroImage.styles';

//you pass through information / data with props. you can use props.image, props.title and props.text or you can destructor the object and remove props handle
const HeroImage = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
