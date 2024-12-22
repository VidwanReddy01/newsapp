import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export default class NewsComponent extends Component {
  render() {
    return (
      <div>
        This is a News Component
        <NewsItemComponent/>
        <NewsItemComponent/>
        
      </div>
    )
  }
}
