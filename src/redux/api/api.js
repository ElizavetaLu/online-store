import axios from "axios";

export function requestGetData(name){
  return axios.request({
    method: 'get',
    url: `https://fakestoreapi.com/${name}`
  })
}


export function requestGetIp(){
  return axios.request({
    method: 'get',
    url: 'https://geolocation-db.com/json/'
  })
}

export function requestGetLocation(ip){
  return axios.request({
    method: 'get',
    url: `https://ipapi.co/${ip}/json/`
  })
}