import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Comment } from '../img/message-circle.svg';
import { ReactComponent as Heart } from '../img/heart.svg';
import { ReactComponent as Play } from '../img/play.svg';

const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;

  &:hover {
    ${ImgMeta} {
      display: flex !important;
    }
  }
`;
 
const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
 
  svg {
    margin-right: 10px;
  }
`;
 

 
const Img = styled.img`
  cursor: pointer;
  width: 100%;
`;
 
function Image({ post }) {
  return (
    <ImgContainer>
      <Img src={post.source} />
      <ImgMeta>
        <ImgIcons>
          {post.isVideo ? <Play /> : <Heart />} {post.likes}
        </ImgIcons>
        <ImgIcons>
          <Comment /> {post.comments}
        </ImgIcons>
      </ImgMeta>
    </ImgContainer>
  );
}

export default Image;