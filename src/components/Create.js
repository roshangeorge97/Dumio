import React, { Component } from 'react';

class Create extends Component {

render() { 
    return(

    <div className='share-container w-75'>
<h5 className='h3 mb-3'><b>Upload Video</b></h5>
            <form onSubmit={(event) => {
              event.preventDefault()
              const title = this.videoTitle.value
              this.props.uploadVideo(title)
            }} >
              &nbsp;
              <input id="inputGroupFile02" class="form-control mb-2 m-2 p-5 text-light rounded" type='file' accept=".mp4, .mkv .ogg .wmv" onChange={this.props.captureFile} style={{ width: '400px', height:'200px',backgroundColor:'green'}} />
                <div className="form-group mr-sm-2 m-2 mb-5">
                  <input
                   style={{ width: '400px',borderRadius:'10px',height:'40px'}}
                    id="videoTitle"
                    type="text"
                    ref={(input) => { this.videoTitle = input }}
                    className="form-control-sm"
                    placeholder="Title"
                    required />
                </div>
              <button type="submit" className="btn btn-submit btn-block btn-lg bg-success text-light">Upload!</button>
              &nbsp;
            </form>
            </div>
  
)}
        }

export default Create