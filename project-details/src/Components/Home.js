import { Link } from "react-router-dom"

const Home = ()=>{
    return <>
    <h3 className="pl-3 font-semibold">Project List: </h3>
    <div className="text-blue-500 p-3">
    1) <Link to="project/Y_clone">My-Tube (Youtube Clone)</Link>
    </div>
    <div className="text-blue-500 p-3">
    2) <Link to="project/Y_clone">Foodiest (Swiggy Clone)</Link>
    </div>
    </>
}

export default Home