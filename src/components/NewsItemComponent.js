import React, { Component } from 'react'

export default class NewsItemComponent extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{maxHeight:'28rem', minHeight:'28rem'}}>
        <img src={!imageUrl?"https://img.freepik.com/free-vector/breaking-news-information-concept_52683-36243.jpg?t=st=1734939706~exp=1734943306~hmac=f6ae2a2257119fb9ce69d4690ab43eeb415dae85bdbe1c81b22ccdc22acc86e0&w=2000": imageUrl} className="card-img-top" style={{maxHeight:'15rem', minHeight:'15rem'}} alt="..." />
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


