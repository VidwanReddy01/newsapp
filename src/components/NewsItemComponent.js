import React, { Component } from 'react'

export default class NewsItemComponent extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{maxHeight:'28rem', minHeight:'28rem'}}>
        <img src={imageUrl} className="card-img-top" style={{maxHeight:'15rem', minHeight:'15rem'}} alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}


