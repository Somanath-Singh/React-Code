

export function NetflixRegisterComponent()
{
    return(
       <div>
         <p className="text-center">What is Netflix? Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands .</p>
         <div className="input-group input-group-lg">
            <input type="email" className="form-control"/>
            <button className="btn btn-danger">
                Get Started
                <span className="bi bi-chevron-right"></span>
            </button>
         </div>
       </div>
    );
}