import React, { useEffect, useState } from "react";
// import '../styles/api.css';

function Api() {
    
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiproject/list')
        .then(response => response.json())
    
        .then(repo => 
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        // .then(repo => console.log(repo))
        .catch(error => console.error(error));
        
    }, []);
    
    return(

        <div className="">
            <img src="images/tanjiro.png" alt="tanjiro" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Web temática anime realizada con Boostrap.</p>
                <button className="btn btn-primary">ver proyecto</button>
            </div>
        </div>

        
    );
    
}

export default Api;


// <div>
                
        //     {repo.map(int => {
        //         return(
        //             <div key={int.id1}>
        //                 <h2>{int.name}</h2>
        //                 <img src={int.image} alt={int.name}/>
        //                 <a href={int.link} target="_blank" rel="noreferrer noopener"><i className="fab fa-github"></i></a>
        //             </div>
        //         )
        //     })}
                
            
        // </div>