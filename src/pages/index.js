import React from 'react';
import Users from '../data/users.json';
import {
  Page,
  Navbar,
  BlockTitle,
  List,
  Link,
  ListItem,
  Icon,
  ListGroup,
  Toggle,
  BlockFooter,
  Block,
} from 'framework7-react';


export default function Home() {
  const listItems = Users.map((el) =>
    <ListItem link={'/im/'+ el.id}  title={el.name} footer="last message">
      <Icon slot="media" icon="demo-list-icon"></Icon>
    </ListItem>)
    
  return(
    <Page>
      <Navbar title="Chats">
        <Link slot="left" panelOpen="left">
            <Icon ios="f7:menu" md="material:menu" />
        </Link>
      </Navbar>
      <BlockTitle>My Friends</BlockTitle>
      <List>
        {listItems}
      </List>
    </Page>
  );
};