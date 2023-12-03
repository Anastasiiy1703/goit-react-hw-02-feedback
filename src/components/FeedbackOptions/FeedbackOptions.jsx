import React, { Component } from 'react';
import FeedbackOptionsCss from '../FeedbackOptions/FeedbackOptionsCss.module.css'
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ul className={FeedbackOptionsCss.buttonList}>
        {options.map((option) => (
          <li key={option} className={FeedbackOptionsCss.liButton}>
            <button type="button" className={FeedbackOptionsCss.button} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;

// import FriendListItem from '../FriendList/FriendListItem';
// import FriendsListCss from './FriendList.module.css'
// const FriendList = ({ friendData }) => {
//   return (
//     <ul className={FriendsListCss.friendList}>
//       {friendData.map((friend) => (
//         <FriendListItem key={friend.id} friend={friend} />
//       ))}
//     </ul>
//   );
// };

// export default FriendList;