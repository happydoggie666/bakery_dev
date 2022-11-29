import React from "react";
//Not used, just put it here as a way for me to fetch data from api

//I modify the json file provided in the studio
export default class FetchData extends React.Component{
    state = {
        loading:true,
        person:null,
    };

    async componentDidMount(){
        const url = "put_link_here"; 
        const response = await fetch(url);
        const data = await response.json();    // a json list of data
        this.setState({person:data.results[0], loading:false});
        console.log(data.result[0]);
    }

  
    

    render(){
        return(
            <div>
                {this.state.loading || !this.state.person?
                (<div>loading...</div>
                ) : (
                <div>
                <img src = {this.state.person.picture.large} />
                </div>
                )}
            </div>
        )
    }
}