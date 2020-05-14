import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Messages extends React.Component {
  componentWillMount() {
    this.setState({messages : []});
  }

  reply(){
    return {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      }
    };
  }


  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(GiftedChat.append(previousState.messages, messages), this.reply()),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
            _id: 1,
            name: 'you',
            avater: 'https://placeimg.com/140/140/any'
        }}
      />
    );
  }
}