import './MarketPlace.css'
import burger from '../assets/burger.png'
import { testimonials } from '../data/data.js';
function MarketPlace() {
    return (
        <>
        <div className="market-menu">
            <h2>Market Place</h2>
                <div className="content">
                        {testimonials.map( (blog) => {
                        <div className="testimonial-card" key={blog.id}>
                            <h3>{blog.name}</h3>;
                            <p>{blog.text}</p>
                            <img src={blog.image} alt="image" />
                            <p>{blog.rate}</p>        
                        </div>
                    })}
                </div>
        </div>
        </>
    )
}


// function a() {
//     return(
//         <>
 
//         </>
//     )
// }
export default MarketPlace