import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export default class NewsComponent extends Component {
  constructor(){
    super()
    console.log('This is in constructor')
    this.state = {
      articles : [],
      loading: false,
      page: 1
    }
  }

  // //To work in local START
  // async componentDidMount(){
  //   // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fa1de05a901446959341d884be639149&page=${this.state.page}&pageSize=10`;
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // // console.log(parsedData)
  //   // this.setState({articles: parsedData.articles})
  //   this.fetchData()
  // }

  // fetchData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fa1de05a901446959341d884be639149&page=${this.state.page}&pageSize=10`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData)
  //   this.setState({articles: parsedData.articles})
  //   this.setState({totalResults: parsedData.totalResults})
  // }
  // //To work in local END

    // To work in vercel app START
  async componentDidMount() {
    // let url = `/api/news?country=us&page=${this.state.page}&pageSize=10`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({articles: parsedData.articles});
    this.fetchData();
 }

    fetchData = async () => {
  let url = `/api/news?country=us&page=${this.state.page}&pageSize=10`;
  let data = await fetch(url);
  let parsedData = await data.json();
  // console.log(parsedData)
  this.setState({articles: parsedData.articles})
  this.setState({totalResults: parsedData.totalResults})
}
  //To work in vercel app END



  //To work in vercel app START
//   async componentDidMount() {
//     let url = "/api/news?country=us"; // Call the serverless function
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     // console.log(parsedData);
//     this.setState({articles: parsedData.articles});
//  }
  //To work in vercel app END


  handlePrevClick = ()=> {
    console.log("Previous button clicked!")
    this.setState(
      (prevState) => ({
          page: prevState.page - 1,
      }),
      () => {
          console.log(this.state.page, "this.state.page previous before");
          this.fetchData();
      }
    );
   console.log(this.state.page, 'this.state.page previous after')
  }

  handleNextClick = ()=> {
    console.log("Next button clicked!")
    this.setState(
      (prevState) => ({
          page: prevState.page + 1,
      }),
      () => {

          console.log(this.state.page, "this.state.page next before");
          this.setState()
          if (this.state.page > Math.ceil(this.state.totalResults/10)){

          }
          else{
          this.fetchData();
          }
      }
    );
    console.log(this.state.page, 'this.state.page next after')
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
          <div className="container d-flex justify-content-end">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-outline-primary">Previous</button>  {/* //this.handlePrevClick, here we are using this. becase we are use class based component */}
              <button disabled={this.state.page>= Math.ceil(this.state.totalResults/10)} type="button" onClick={this.handleNextClick} className="btn btn-outline-primary">Next</button>  {/* //this.handleNextClick, here we are using this. becase we are use class based component */}
            </div>
          </div>
        
      </div>
    )
  }
}
