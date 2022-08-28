import axios from "axios";

//indian Page
export default function getIndiaPage(){
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=d5c75a6144e440f8a5165703eeb4a845`)
}

// world news https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d5c75a6144e440f8a5165703eeb4a845

export function getWorldNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=world`)
}

//City page

export function getCityNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/cities?city=values(chennai,mumbai,delhi)`)
}

//latestNews

export function getLatestNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=latest`)
}

//sportsNews
export function getSportsNews(){
    return axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=d5c75a6144e440f8a5165703eeb4a845`)
}

//covidNews

export function getCovidNews(){
    return axios.get(`https://newsapi.org/v2/top-headlines?q=covid&apiKey=d5c75a6144e440f8a5165703eeb4a845`)
}

//ScienceNews https://ndtvnews-api.herokuapp.com/general?category=science
export function getScienceNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=science`)
}

//OffbeatNews https://ndtvnews-api.herokuapp.com/general?category=offbeat
export function getOffbeatNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=offbeat`)
}

//Entertainment https://ndtvnews-api.herokuapp.com/general?category=entertainment
export function getEntertainNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=entertainment`)
}

//live https://newsapi.org/v2/top-headlines?q=live&apiKey=d5c75a6144e440f8a5165703eeb4a845
export function getLiveNews(){
    return axios.get(`https://newsapi.org/v2/top-headlines?q=live&apiKey=d5c75a6144e440f8a5165703eeb4a845`)
}


//buisness https://ndtvnews-api.herokuapp.com/general?category=business
export function getBuisnessNews(){
    return axios.get(`https://ndtvnews-api.herokuapp.com/general?category=business`)
    
}
