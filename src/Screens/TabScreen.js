import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './Tab1';

import Tab2 from './Tab2';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#fffff'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'Black'}}>Wallpaper </Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#fffff'}} activeTabStyle={{backgroundColor:'#fffff'}} textStyle={{color:'Black'}} activeTextStyle={{color:'Black'}} heading="Simple">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#fffff'}} activeTabStyle={{backgroundColor:'#fffff'}} textStyle={{color:'Black'}} activeTextStyle={{color:'Black'}} heading="Dark">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}