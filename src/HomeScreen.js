import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner"
import Row from "./Row"
import requests from "./Requests";

function HomeScreen() {
    return (<div className="homeScreen"> 
    <Nav />
   
    <Banner />
    

    
    <Row title="Top Series" 
    fetchUrl={requests.fetchPopularInSeries}
    isLargeRow />
    <Row 
    title="Top Movies" 
    fetchUrl={requests.fetchPopularInMovies}
    isLargeRow
    />
    <Row title="Top For Kids" 
    fetchUrl={requests.fetchForKids}
    isLargeRow
    />
    <Row title="Top Adventure" 
    fetchUrl={requests.fetchAdventure}
    isLargeRow
     />
    <Row title="Top Comedy" 
    fetchUrl={requests.fetchComedy}
    isLargeRow
    />
    <Row title="Top Drama" 
    fetchUrl={requests.fetchDrama}
    isLargeRow
     />
    <Row title="Top Mystery" 
    fetchUrl={requests.fetchMystery}
    isLargeRow
     />
    </div>);
    
}

export default HomeScreen