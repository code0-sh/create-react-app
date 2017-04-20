import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

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
  author: PropTypes.string,
  children: PropTypes.string,
};

export default Comment;
