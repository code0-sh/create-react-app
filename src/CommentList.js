
import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.commentNodes = this.props.data.users.map(
      comment => <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
    );
  }
  render() {
    return (
      <div className="commentList">
        {this.commentNodes}
      </div>
    );
  }
}

CommentList.propTypes = {
  data: React.PropTypes.object,
};

export default CommentList;
