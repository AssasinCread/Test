import React from "react";
import { ApiKey } from "../../api/const";
import MovieCard from "../../components/MovieCard";



class Home extends React.Component{
    state = {
        list: [],
        
    }
   
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)    
        .then((response)=>{
            return response.json();
        })
        .then((data) => this.setState({list: data.results}));
        
    }
    render(){
        const { list } = this.state;
        return (
            <div>
                {list.map((item) => (
                    <MovieCard {...item} />
                 ))}
            </div>
        );
    }
}
export default Home;
