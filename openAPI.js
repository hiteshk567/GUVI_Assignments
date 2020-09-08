
const request = new XMLHttpRequest();
const url = "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
const proxy = "https://guarded-mesa-39300.herokuapp.com/";

fetch(proxy + url)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log("Something went wrong"));
