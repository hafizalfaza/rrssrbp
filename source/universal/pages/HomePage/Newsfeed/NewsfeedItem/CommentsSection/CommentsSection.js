import React, { Component } from 'react';
import CommentItem from './CommentItem';
import { connect } from 'react-redux';  
import { revealCompleteComment, loadMoreComments } from 'universal/actions/newsfeedAction';

class CommentsSection extends Component {

  revealCompleteComment = (commentId) => {
    const data = {
      newsfeed_id: this.props.newsfeedId,
      comment_id: commentId
    }
    
    this.props.revealCompleteComment(data);
  }


  loadMoreComments = () => {
    const data = {
      newsfeed_id: this.props.newsfeedId,
    }

    this.props.loadMoreComments(data);
  }


  render(){
    const { hasMoreComments } = this.props;
    const commentEl = this.props.comments.map((comment) => {
      return (
        <CommentItem key={comment.id} comment={comment} revealCompleteComment={this.revealCompleteComment}/>
      )
    })

    if(hasMoreComments){
      commentEl.splice(1, 0, <li key={new Date().toISOString()} onClick={() => this.loadMoreComments()} style={{color: '#999', fontSize: '13px', marginBottom: '5px', lineHeight: '18px'}}>load more comments</li>);
      commentEl.join();
    }

    return (
      <ul>
        {commentEl}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsfeedItems: state.newsfeed.newsfeedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    revealCompleteComment: (data) => {dispatch(revealCompleteComment(data))},
    loadMoreComments: (data) => {dispatch(loadMoreComments(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);