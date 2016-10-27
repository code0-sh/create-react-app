import React from 'react';
import marked from 'marked';

class Comment extends React.Component {
  rawMarkup() {
    return { __html: marked(this.props.children.toString(), { sanitize: true }) };
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

Comment.propTypes = {
  author: React.PropTypes.string,
  children: React.PropTypes.string,
};

export default Comment;
