import React from 'react';

class MountImage extends React.Component {
  render() {
    const {foundAt, name} = this.props;    
    return (
      <figure>
        {foundAt.map((obj, index) => 
          <div className='imgMap'>
            <figure>              
            <img className='imgLocation' src={obj.map} alt={name} />                                 
            </figure> 
            <figcaption>{obj.location}</figcaption>          
          </div>          
        )}
      </figure>              
    )
  }
}

export default MountImage;
