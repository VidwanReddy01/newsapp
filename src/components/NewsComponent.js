import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import NoResults from './NoResults.js'
// import Navbar from './Navbar.js'

export default class NewsComponent extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5   //when the pageSize is not passed in App.js in NewsComponent component, this default value is taken
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
    }
  constructor(props){
    super(props)
    // console.log('This is in constructor')
    this.state = {
      articles : [],
      loading: false,
      page: 1,
      country: 'us',
      category: '',
      noResult: false
    }
    document.title = `Thisisnews - ${this.props.category === '' ? 'Home' : this.props.category}`;
  }

  // //To work in local START
  // async componentDidMount(){
  //   this.fetchData()
  // }

  // fetchData = async (searchQuery) => {
  //   console.log(searchQuery,'searchQuery*****')
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=fa1de05a901446959341d884be639149&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${searchQuery === undefined ? '' : searchQuery}`;
  //   console.log(url,'this is url')
  //   this.setState({loading:true})
  //   try{
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   if (parsedData.totalResults !== 0){
  //     this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading:false,
  //     noResult: false
  //   });
  //   }
  //   else{
  //     this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //       loading:false,
  //       noResult: true
  //     });
  //     console.log('Nothing to show here!')
  //   }
  // }
  // catch (error) {
  //         console.error('Error fetching data:', error);
  //         this.setState({
  //             loading: false,
  //             noResult: true,
  //             errorMessage: 'An error occurred while fetching the data.',
  //         });
  //       }
  // }
  // //To work in local END



  // To work in vercel app START
  async componentDidMount() {
    this.fetchData();
 }

  fetchData = async (searchQuery) => {
      console.log(searchQuery,'searchQuery*****')
      let url = `/api/news?country=${this.state.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${searchQuery === undefined ? '' : searchQuery}`;
      console.log(url,'this is url')
      this.setState({loading:true})

      try {
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.totalResults !== 0){
        this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading:false,
        noResult: false
      });
      }
      else{
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading:false,
          noResult: true
        });
        console.log('Nothing to show here!')
      }
      }
    catch (error) {
      console.error('Error fetching data:', error);
      this.setState({
          loading: false,
          noResult: true,
          errorMessage: 'An error occurred while fetching the data.',
      });
    }
    }
  //To work in vercel app END

  // Call fetchData on component mount and when searchQuery prop changes
  componentDidUpdate(prevProps) {  //The method receives the previous props (prevProps) and state (prevState) as arguments.
    console.log('componentDidUpdate called')
    // Check if the search query prop has changed
    if (this.props.searchQuery !== prevProps.searchQuery) {
      console.log(this.props.searchQuery, 'searchQuery prop changed');
      this.fetchData(this.props.searchQuery);
    }
  }



  handlePrevClick = ()=> {
    console.log("Previous button clicked!")
    this.setState(
      { page: this.state.page - 1 },
      () => {
        this.fetchData(); // Ensures `fetchData` is called after the state has updated
      }
    );
  }

  handleNextClick = ()=> {
    console.log("Next button clicked!")
    this.setState(
      { page: this.state.page + 1 },
      () => {
        this.fetchData(); // Ensures `fetchData` is called after the state has updated
      }
    );
  }

  render() {
    console.log('NewsComponent')
    return (
      <div className='container my-3'>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        
        <h2 className='my-4'>Top headlines - {this.props.category === '' ? 'Home' : this.props.category}</h2>
        {this.state.loading && <Spinner/>}
          <div className="row">
          {!this.state.loading && !this.state.noResult && this.state.articles.map((element)=>
            { return <div className='col-md-4' key={element.url} style={{maxHeight:'35rem', minHeight:'35rem'}}>
              <NewsItemComponent 
              title={element.title?element.title.slice(0,45):"No title found"} 
              description={element.description?element.description.slice(0,60):"No description found"} 
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              publishedAt={element.publishedAt}
              source={element.source.name}
              mode={this.props.mode}/>
              {/* <Navbar category={this.props.category}/> */}
              </div>
            }
                                  ) 
          }    
          </div>

          {!this.state.loading && this.state.noResult && (
                // <p style={{ textAlign: 'center', marginTop: '20px' }}>No results found</p>
                <NoResults/>
            )}


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
