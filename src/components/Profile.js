import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import feedsource from './feedsource';



const ProfileContainer = styled.div `
  max-width: 1010px;
  width: 100%;
  margin: 20px auto; 
  font-family: sans-serif;
`;

const ProfileDetails = styled.div `
 display: flex;
`;

const ProfileDetailsLeft = styled.div `
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  padding: 5px;
  object-fit: cover;
`;

const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
 
const HeadingThreeText = styled.h3``;
 
const ParagraphText = styled.p`
  margin-right: 25px;
`;
 
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
 
const ProfileDetailsName = styled.div`
  text-align: left;
`;
 
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

function Profile() {
    return(
        <ProfileContainer>
            <ProfileDetails>
                <ProfileDetailsLeft>
                    <ProfileImage src="https://images.pexels.com/photos/5804257/pexels-photo-5804257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                </ProfileDetailsLeft>

                <ProfileDetailsRight>
                    <ProfileDetailsUsername>
                        <HeadingThreeText>yomieluwande</HeadingThreeText>
                        <EditProfileButton>Edit profile</EditProfileButton>
                    </ProfileDetailsUsername>

                    <ProfileDetailsMeta>
                        <ParagraphText>
                            <strong>5</strong> posts
                        </ParagraphText>
                        <ParagraphText>
                            <strong>296</strong> followers
                        </ParagraphText>
                        <ParagraphText>
                            <strong>269</strong> following
                        </ParagraphText>
                    </ProfileDetailsMeta>
        
                    <ProfileDetailsName>
                        <ParagraphText>
                            <strong>Yomi</strong>
                        </ParagraphText>
                    </ProfileDetailsName>
                </ProfileDetailsRight>
            </ProfileDetails>

            <ImagesWrapper>
                {feedsource.map(item => (
                <Image post={item} key={item.id} />
                ))}
            </ImagesWrapper>
        </ProfileContainer>
    );
}

export default Profile;