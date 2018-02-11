import React, { Component } from 'react';

class CommentItem extends Component {

  render(){
    const { comment } = this.props;

    return(
      <li key={comment.id} style={{marginBottom: '5px'}}>
        <p style={{fontSize: '13px', lineHeight: '18px'}}>
            <span style={{fontWeight: 'bold'}}>{comment.owner.username}</span>
            &nbsp;{comment.trimmedText ? <span><span>{comment.trimmedText}</span><span> <a style={{color: '#999'}} onClick={() => this.props.revealCompleteComment(comment.id)}>{'more'}</a></span></span> : comment.text}
        </p>
    </li>
    )
  }
}

export default CommentItem;