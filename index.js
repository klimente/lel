import ReactDOM from 'react-dom'
import React from 'react'
import { setInterval } from 'timers';
import { fail } from 'assert';
require('./index.css');
import App from './component/App'


function NavBar(props) {
  return (
    <div className="topnav">
      <a className="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  )
}

function Post(props) {
  return (
    <div className="article">
      
        
        <h1 className='entry-header'>Justin Beaver: Ever since I learned HTML, my life has made a complete 180</h1>
        <img src="https://i.ytimg.com/vi/dmZ-jmxJi1A/maxresdefault.jpg" alt="Justin Beaver's cat is pleased"/>
        <p>Posted by: Damian Wielgosik</p>
      
      <p>Justin Beaver confessed something that even his greatest fans would have never expected of the skilled musicians and lyricist. The young rock-and-roller admitted that since he typed his first title tag, his life became easier. It has been reported by those surrounding the Canadian that Beaver's private mentors, Ryan Loseling and Nicolas Crate, often walk around Los Angeles disputing what a great tool the HTML validator is.</p>
      
        
        Justin Beaver's happy cat
     
      <p>Beaver has already created some websites and does not intend to stop there. 
      <q>I will probably have a song about HTML on my next album,</q> - the artist added.
      </p>
    
    </div>
  )
}

function Center(props) {
  return (
    <div>
      
     </div>
  )
}

function Footer(props) {
  return (
    <footer>
    Copyright Кристина Ветрова
  </footer>
  )
}

function SideBar(props) {
  return (
    <div class="vertical-menu">
      <a href="#" class="active">Home</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </div>
  )
}

function HomePage (props) {
    return (
      <div >
      <NavBar/>
      <div className='layout' >
      <Post/>
      <SideBar/>
      </div>
      <Footer/>
      </div>
    )
}

ReactDOM.render(
  <App/>,
  //<HomePage/>,
  document.getElementById('root')
)