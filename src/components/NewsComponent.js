import React, { Component } from 'react'
import NewsItemComponent from './NewsItemComponent'

export default class NewsComponent extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Charean Williams",
    "title": "Sunday Night Football: Cooper Rush, CeeDee Lamb have Cowboys leading 23-14 at halftime - NBC Sports",
    "description": "The Cowboys were eliminated earlier in the day.",
    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/sunday-night-football-cooper-rush-ceedee-lamb-have-cowboys-leading-23-14-at-halftime",
    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/163af66/2147483647/strip/true/crop/3114x1752+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F63%2Fcf%2F624830d347df8d5276cacb8a99b5%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2191120369",
    "publishedAt": "2024-12-23T03:00:00Z",
    "content": "The Cowboys were eliminated earlier in the day. They arent playing like an eliminated team.\r\nDallas controlled the first half, outgaining Tampa Bay 243 to 194 to take a 23-14 lead into the locker roo… [+1386 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Patriots.com"
    },
    "author": null,
    "title": "Game Observations: Eight Takeaways From the Patriots Competitive Loss to the Bills in Week 16 - Patriots.com",
    "description": "With many expecting a one-sided affair, the Patriots held tough vs. the Bills in Buffalo on Sunday.",
    "url": "https://www.patriots.com/news/game-observations-eight-takeaways-from-the-patriots-competitive-loss-to-the-bills-in-week-16",
    "urlToImage": "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/patriots/hvlls4gc5w3kjad7iets",
    "publishedAt": "2024-12-23T02:38:16Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Natalie Oganesyan",
    "title": "'Sisterhood Of The Traveling Pants' Co-Stars Support Blake Lively - Deadline",
    "description": "America Ferrera, Amber Rose Tamblyn and Alexis Bledel supported co-star Blake Lively after her suit against 'It Ends With Us' director Justin Baldoni.",
    "url": "http://deadline.com/2024/12/blake-lively-sisterhood-of-the-traveling-pants-solidarity-it-ends-with-us-1236240611/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/12/sisterhood.jpg?w=1024",
    "publishedAt": "2024-12-23T02:19:00Z",
    "content": "True to the bond showcased in their 2005 film The Sisterhood of the Traveling Pants, America Ferrera, Amber Rose Tamblyn and Alexis Bledel have penned a letter in support of co-star Blake Lively foll… [+3115 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Tom Green Engaged to Be Married, 22 Years After Drew Barrymore Divorce - TMZ",
    "description": "Tom Green is ready to give marriage another shot over 2 decades after divorcing Drew Barrymore ... as the comedian recently announced his new engagement.",
    "url": "https://www.tmz.com/2024/12/22/tom-green-engaged-to-be-married-22-years-after-drew-barrymore-divorce/",
    "urlToImage": "https://imagez.tmz.com/image/80/16by9/2024/12/23/8089d6a2da924d34bc267744bcde0748_xl.jpg",
    "publishedAt": "2024-12-23T01:45:00Z",
    "content": "Tom Green is ready to give marriage another shot over 2 decades after divorcing Drew Barrymore ... as the comedian recently announced his new engagement.\r\nThe actor posted on his Instagram feed on Su… [+1193 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Aliza Chasan",
    "title": "Drones collide, fall into crowd at holiday show in Florida, FAA says - CBS News",
    "description": "A holiday drone show just days before Christmas was interrupted when drones collided, officials said.",
    "url": "https://www.cbsnews.com/news/florida-holiday-show-drone-collision-orlando/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/12/22/a32a5bdd-2afa-4b9d-946b-6a3adcae5f56/thumbnail/1200x630/f063a7d90fa9906c6ce11c9737f5d97a/gettyimages-1875483482.jpg?v=fa9977353833f46f40b07abcd9d5240b",
    "publishedAt": "2024-12-23T01:25:20Z",
    "content": "Several small drones collided and then fell into a crowd at a holiday drone show in Florida on Saturday night, the Federal Aviation Administration said. \r\nOne person was injured during the show held … [+2457 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "The Pelicot trial throws up difficult questions about male desire - BBC.com",
    "description": "Are extreme fantasies about dominating women that were once just that - fantasies - now becoming more normalised in reality too?",
    "url": "https://www.bbc.com/news/articles/c20wejy47evo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/77fd/live/22ae0ae0-beee-11ef-aff0-072ce821b6ab.png",
    "publishedAt": "2024-12-23T01:15:25Z",
    "content": "Warning: This story contains descriptions of sexual abuse\r\nThe Pelicot rape trial, which ended in France on Thursday, held a terrible fascination for almost every woman I know. As it unfolded in an A… [+12859 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WEAR"
    },
    "author": "Sha'de Ray",
    "title": "Spectacular fireball seen from Pensacola to Missouri as satellite re-enters atmosphere - NBC 15 WPMI",
    "description": "PENSACOLA, Fla. -- A number of viewers took to social media about a streak of light moving through the sky last night.WEAR News spoke with astronomer Jonathan m",
    "url": "https://weartv.com/news/local/spectacular-fireball-seen-from-pensacola-to-missouri-as-satellite-re-enters-atmosphere",
    "urlToImage": "https://weartv.com/resources/media2/16x9/469/986/0x114/90/cdaa2290-ab6a-4421-b0dc-23be204da6a3-Capture.PNG",
    "publishedAt": "2024-12-23T01:05:01Z",
    "content": "PENSACOLA, Fla. -- A number of viewers took to social media about a streak of light moving through the sky last night.\r\nWEAR News spoke with astronomer Jonathan McDowell.\r\nHe says this wasnt part of … [+885 chars]"
    },
    {
    "source": {
    "id": "entertainment-weekly",
    "name": "Entertainment Weekly"
    },
    "author": "https://www.facebook.com/entertainmentweekly",
    "title": "Sonic the Hedgehog declares victory over Mufasa and more in weekend box office sprint - Entertainment Weekly News",
    "description": "Despite a strong global showing, 'Mufasa' landed in second place at the domestic box office behind 'Sonic the Hedgehog 3,' which also pulled out in front of titans 'Wicked' and 'Moana.'",
    "url": "https://ew.com/sonic-the-hedgehog-declares-victory-over-mufasa-others-weekend-box-office-8765621",
    "urlToImage": "https://ew.com/thmb/bOLcAA79XRRikjQYzIFKV3iUuHs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sonic-122224-625a35fc4ddd45dc8b00bc43ee6e34e4.jpg",
    "publishedAt": "2024-12-23T00:14:53Z",
    "content": "It was an animal-kingdom cage-match at the weekend box office, with Barry Jenkins' live-action Lion Kingprequel Mufasa and Jeff Fowler's Sonic the Hedgehog 3 in contention for the top spot.\r\nWhile Mu… [+4173 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TheWrap"
    },
    "author": "Andi Ortiz",
    "title": "How to Watch the 47th Kennedy Center Honors - TheWrap",
    "description": "Here's everything you need to know about the 47th annual Kennedy Center Honors, and how to watch them this year",
    "url": "https://www.thewrap.com/how-to-watch-kennedy-center-honors-2024/",
    "urlToImage": "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/12/kennedy-center-honors-2024.jpg?fit=1200%2C675&ssl=1",
    "publishedAt": "2024-12-23T00:00:00Z",
    "content": "Its time once again for the Kennedy Center Honors, this year celebrating its 47th class. And its quite the lineup.\r\nEach year, the Kennedy Center Honors recognizes and celebrates individuals whose un… [+1299 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Auzinea Bacon",
    "title": "Starbucks union strike expands to 9 states - CNN",
    "description": "The strike protests a lack of contract negotiations, including wage increases for union baristas.",
    "url": "https://www.cnn.com/2024/12/22/business/starbucks-strike-union-wages/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24355773855789.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-12-22T23:37:00Z",
    "content": "The five-day strike against Starbucks reached nine states on Sunday, according to its union.\r\nThe Starbucks Workers United said union workers in Missouri, New Jersey and New York began their strike S… [+3765 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HuffPost"
    },
    "author": "Taiyler S. Mitchell",
    "title": "Jeff Bezos Shoots Down Claim That He's Spending $600 Million On His Wedding - HuffPost",
    "description": "Bezos' comment comes after The Daily Mail published a report about the wedding.",
    "url": "https://www.huffpost.com/entry/jeff-bezos-wedding-daily-mail_n_676871e0e4b07e8126a4f6c0",
    "urlToImage": "https://img.huffingtonpost.com/asset/676883151b00003f00b85b76.jpeg?cache=j4HjFvRVEb&ops=1200_630",
    "publishedAt": "2024-12-22T23:20:00Z",
    "content": "Billionaire Amazon founder Jeff Bezos discredited a Daily Mail article that claimed he and his fiancée, Lauren Sánchez, are having a $600 million wedding next weekend. \r\nIn a story published on Satur… [+1344 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Haaretz"
    },
    "author": "Haaretz",
    "title": "Report: IDF arrests two Syrian residents in buffer zone suspected of spying for Hezbollah - Haaretz",
    "description": "***",
    "url": "https://www.haaretz.com/israel-news/2024-12-22/ty-article-live/joint-u-s-british-strike-targets-yemens-hodeidah-report-says/00000193-ec5a-d741-a1db-fcfe77090000",
    "urlToImage": "https://img.haarets.co.il/bs/0000018d-9c88-d92c-a9ed-fff9e1210001/90/a0/0309578e4ec9ac722fb4783a3011/final-desktop.png?precrop=1000,581,x0,y0&height=630&width=1200",
    "publishedAt": "2024-12-22T23:15:40Z",
    "content": "Dec 22, 2024Updated: 06:11 a.m. IST\r\nISRAEL: Houthi missile launched from Yemen falls in central Israel, wounding 23, after interceptor failure GAZA: Israeli strikes reportedly kill at least 30 SYRIA… [+349 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SciTechDaily"
    },
    "author": null,
    "title": "Did Earth’s Gravity Give the Moon a Volcanic Makeover? - SciTechDaily",
    "description": "The Moon, our ancient companion, might be older than we think. While lunar rocks suggest an age of 4.35 billion years, new research hints at a hidden past obscured by tidal heating — a cosmic event that \"remelted\" its surface and reset its geological clock. T…",
    "url": "https://scitechdaily.com/did-earths-gravity-give-the-moon-a-volcanic-makeover/",
    "urlToImage": "https://scitechdaily.com/images/Volcanic-Moon-scaled.jpg",
    "publishedAt": "2024-12-22T22:48:48Z",
    "content": "The Moon, our ancient companion, might be older than we think. While lunar rocks suggest an age of 4.35 billion years, new research hints at a hidden past obscured by tidal heating — a cosmic event t… [+6849 chars]"
    },
    {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Jason Ma",
    "title": "This is America’s ‘fatal flaw’ as the US bubble gets ready to pop, market expert warns - Fortune",
    "description": "\"All the classic signs of extreme prices, valuations and sentiment suggest the end is near.\"",
    "url": "https://fortune.com/2024/12/22/mother-of-all-bubbles-us-debt-deficits-fatal-flaw-growth-earnings/",
    "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/12/GettyImages-463103113-e1734901630583.jpg?resize=1200,600",
    "publishedAt": "2024-12-22T22:36:00Z",
    "content": null
    },
    {
    "source": {
    "id": "bleacher-report",
    "name": "Bleacher Report"
    },
    "author": "Scott Polacek",
    "title": "Week 16 NFL Highlights 2024: Live Tracking Top Plays, Box Scores from Sunday Results - Bleacher Report",
    "description": "The Sunday slate of Week 16 of the NFL season isn't as crowded as it could have been seeing how there were two headline games on Saturday pitting the Houston…",
    "url": "https://bleacherreport.com/articles/10147658-week-16-nfl-highlights-2024-live-tracking-top-plays-box-scores-from-sunday-results",
    "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1734469435/ecfwchjw5diog8x0mytn.jpg",
    "publishedAt": "2024-12-22T21:43:14Z",
    "content": "Mitchell Leff/Getty Images\r\nFirst Quarter\r\nThe Eagles forced a turnover on downs on the opening drive against the Washington Commanders.\r\nNFL@NFLEagles get the early fourth down stop!&lt;br&gt;&lt;br… [+8305 chars]"
    }
    ]
  constructor(){
    super()
    console.log('This is in constructor')
    this.state = {
      articles : this.articles
    }
  }
  render() {
    return (
      <div className='container my-3'>
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}

        <h2 className='my-4'>Thisisnews - Top headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>
            { return <div className='col-md-4' key={element.url} style={{maxHeight:'30rem', minHeight:'30rem'}}>
              <NewsItemComponent 
              title={element.title.slice(0,45)} 
              description={element.description.slice(0,60)} 
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
              </div>})
          
          }
             
          </div>
        
      </div>
    )
  }
}
