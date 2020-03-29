import React       from 'react';
import styles      from './ChatList.module.scss'
import ListItem    from "../ListItem";
import { connect } from "react-redux";

const ChatList = ( props ) => {

  const { chatList: { list, isFetching, error } } = props;

  return (
    <div className={styles.container}>
      <ul>
        {
          isFetching
          ? ( <li>LOADING...</li> )
          : list.map( ( chat ) => ( <ListItem key={chat._id}
                                              name={chat.name}
                                              id={chat._id}
                                              chatListFlag={true}
                                              chatItemClassName={styles.itemContainer}/> ) )
        }
      </ul>
    </div>
  );
};


export default ChatList;