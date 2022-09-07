function ProjectOne() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1 has-text-centered has-text-black">
            Project 1: Snake Game! // add icons for github readme and deployed project
            <h2><a href="https://github.com/roshanak11/" target="_blank" rel="noopener noreferrer">ReadMe</a></h2>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectOne



// <section className="section">
//     <div className="container">
//       <h2 className="title is-2 has-text-centered">All Plants</h2>
//       <div className="columns is-multiline is-mobile">
//         {plant.map((plant, index) => {
//           return <div key={index} className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
//             <Link to={`/plants/${plant._id}`}>
//               <div className="card">
//                 <div className="card-content">
//                   <div className="media">
//                     <div className="media-content">
//                       <p className="title is-4">{plant.name}</p>
//                       <p className="subtitle is-6">{plant.commonName}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-image">
//                   <figure className="image is-1by1">
//                     <img src={plant.image} alt={plant.name} />
//                   </figure>
//                 </div>
//                 <p className="subtitle is-6">{'Price: £' + plant.price}</p>
//               </div>
//             </Link>
//           </div>
//         })}
//       </div>
//     </div>
//     <footer className="has-text-left">
//       <Link className="has-text-success-dark"
//         to="/">← Return to home</Link>
//     </footer>
//   </section>