const React = require('react');

const posts = [
    {id: 1,img:'https://i.ytimg.com/vi/dmZ-jmxJi1A/maxresdefault.jpg', title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2,img:'https://i.ytimg.com/vi/dmZ-jmxJi1A/maxresdefault.jpg', title: 'Installation', content: 'You can install React from npm.'}
  ];

  function Footer(props) {
    return (
      <footer>
      Copyright Кристина Ветрова
    </footer>
    )
  }
  
  function SideBar(props) {
    return (
      <div className="vertical-menu">
        <a href="#" className="active">Home</a>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a href="#">Link 4</a>
      </div>
    )
  }

class Post extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = posts;
    }

    render () {
    let content = this.state.map((post) =>
    <div key={post.id}>
      <h1>{post.title}</h1>
      <img src={post.img}/>
      <p>{post.content}</p>
    </div>);
    return (
        <div>
          <div className = 'layout'>
          <div className='article'>
      {content}
      </div>
      <SideBar/>

          </div>

      <Footer/>
    </div>
    )
  
}

}










// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
// function Post(props) {
//     const content = props.posts.map((post)=>
//         <div key={post.route.id}>
//             <h3>{post.route.title}</h3>
//             <p>{post.route.content}</p>
//         </div>
//         )
//     return (
//         <div>
         
//             {content}
//         </div>
//     );
        
// }

module.exports = Post;