import React from 'react'
import styled from 'styled-components'

import StyledLink from '../common/StyledLink'

const Image = styled.div`
  background: url(${props => props.imageUrl}) center center / cover no-repeat;
  width: 100%;
  padding-top: 100%;
  max-height: 200px;
`

const Title = styled.div`
  margin: 5px;
  margin-top: 10px;
  font-weight: bold;
  text-align: ${props => props.align || 'left'};
`

const Desc = styled.div`
  margin: 5px;
  color: grey;
  font-size: 13px;
  text-align: ${props => props.align || 'left'};
`

const Product = props => {
  return (
    <div {...props}>
      <StyledLink to="/">
        <Image className="img-fluid" imageUrl={props.imageUrl} />
      </StyledLink>
      <StyledLink to="/">
        <Title align={props.align}>{props.title}</Title>
      </StyledLink>
      <StyledLink to="/">
        <Desc align={props.align}>{props.desc}</Desc>
      </StyledLink>
    </div>
  )
}

export default Product