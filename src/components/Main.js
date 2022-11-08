import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div className="container-fluid">
          <br></br>
          &nbsp;
          <br></br>
          <div className="row m-auto">
            <div className="col-md-7 m-auto">
              <div className="embed-responsive embed-responsive-16by9 rounded" style={{ maxHeight: '700px'}}>
                <video
                  src={`https://ipfs.io/ipfs/${this.props.currentHash}`}
                  controls
                >
                </video>
              </div>
            <h3 className='vid-title'><b>{this.props.currentTitle}</b></h3>
          </div>
          <div className="col-md-3 text-center m-auto" style={{ maxHeight: '768px', minWidth: '175px' }}>
          
            { this.props.videos.map((video, key) => {
              return(
                <div className="card text-center card-custom m-3" style={{ width: '375px'}} key={key} >
                  <div className="card-title bg-success">
                    <small className="text-white "><b>{video.title}</b></small>
                  </div>
                  <div>
                    <p onClick={() => this.props.changeVideo(video.hash, video.title)}>
                      <video
                        src={`https://ipfs.io/ipfs/${video.hash}`}
                        style={{ width: '300px' }}
                      />
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
