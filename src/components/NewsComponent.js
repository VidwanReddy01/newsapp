import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export default class NewsComponent extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-4'>Thisisnews - Top headlines</h2>
          <div className="row">
              <div className='col-md-4'>
              <NewsItemComponent title="myTitle" description="myDescription"/>
              </div>
              <div className='col-md-4'>
              <NewsItemComponent title="myTitle" description="myDescription"/>
              </div>
              <div className='col-md-4'>
              <NewsItemComponent title="myTitle" description="myDescription"/>
              </div>
          </div>
        
      </div>
    )
  }
}
