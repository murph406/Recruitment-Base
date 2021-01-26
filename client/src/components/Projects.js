import React from 'react';
import { ProjectDetails } from '../data/data';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <div className="stripe-xl  bg-grey1 " >
      {/* <div className="grid-template-columns grid distribute-center  bg-brown"> */}
      <div className="grid grid-auto-row grid-template-columns distribute-center required">
        
        {ProjectDetails.map((project, index) => {
          return (
            <Box data={project} key={index} />
          )
        })}
      </div>
    </div>
  );
}



const Box = (props) => {
  const { slug, client, thumbnail } = props.data
  return (
    <Link
      to={'/projects/' + slug}
      className="card mt-1 mb-1 mr-1 ml-1 required">
      
        <div className={"bg " + slug}>
          <h2>{client}</h2>
        </div>
        <img src={thumbnail} />

    </Link>
  )
}