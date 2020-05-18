import React from 'react';
import {Card} from 'react-bootstrap';
import PostData from "./posts.json";



export default class MyPosts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            data: [] 
        }
    }


      render(){
     
        return (
  <div className="page posts body-bg">
    <div className="container">
      <div className="row m-0">
      <div className="heading">
        <h2>Posts</h2>
      </div>
      </div>
      <div className="row m-0">
        {PostData.map((post) => {
        return (
        <Card key={post.id} className="col-3">
          <Card.Img variant="top" src={post.thumbnailUrl} />
          <Card.Body>
            <Card.Title> {post.name}</Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </Card.Body>
        </Card>)
        }) }


    
      </div>
    
    </div>
    </div>
        )
    }
}