import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';

const CommentBox = props => (
  <div className="commentBox">
    <h1>Comments</h1>
    <CommentList data={props.data} />
    <CommentForm />
  </div>
);

CommentBox.propTypes = {
  data: PropTypes.object,
};

export default CommentBox;
