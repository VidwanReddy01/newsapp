import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'

export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5   //when the pageSize is not passed in App.js in NewsComponent component, this default value is taken
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
    }
  constructor(){
    super()
    console.log('This is in constructor')
    this.state = {
      articles : [],
      loading: false,
      page: 1,
      country: 'us',
      category: ''
    }
  }

  // //To work in local START
  // async componentDidMount(){
  //   this.fetchData()
  // }

  // fetchData = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=fa1de05a901446959341d884be639149&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData)
  //   this.setState({articles: parsedData.articles})
  //   this.setState({totalResults: parsedData.totalResults})
  //   this.setState({loading:false})
  // }
  // //To work in local END

  // To work in vercel app START
  async componentDidMount() {
    this.fetchData();
 }

  fetchData = async () => {
      let url = `/api/news?country=${this.state.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData)
      this.setState({articles: parsedData.articles})
      this.setState({totalResults: parsedData.totalResults})
      this.setState({loading:false})
}
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
          if (this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)){

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
        {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>
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
              <button disabled={this.state.page>= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-outline-primary">Next</button>  {/* //this.handleNextClick, here we are using this. becase we are use class based component */}
            </div>
          </div>
        
      </div>
    )
  }
}
