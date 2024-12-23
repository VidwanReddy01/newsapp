import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export default class NewsComponent extends Component {
  constructor(){
    super()
    console.log('This is in constructor')
    this.state = {
      articles : []
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dbe57b028aeb41e285a226a94865f7a7";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <h2 className='my-4'>Top headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>
            { return <div className='col-md-4' key={element.url} style={{maxHeight:'30rem', minHeight:'30rem'}}>
              <NewsItemComponent 
              title={element.title?element.title.slice(0,45):"No title found"} 
              description={element.description?element.description.slice(0,60):"No description found"} 
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
              </div>
            }
                                  ) 
          }
             
          </div>
        
      </div>
    )
  }
}
