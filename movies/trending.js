const trendingMovies=async ()=>{
    try{

    
    let res= await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a41d7c7f3e1bc2c143e0042c2bb121f6`);
    let data2= await res.json(); 
    let actual_data= data2.results
    appendMovies(actual_data);
    console.log(actual_data)
    console.log(data2)

    }catch(err){
        console.log("err:",err)
    }
}



const appendMovies= (data)=>{

if(data===undefined){
    return false
}


let data_div=document.getElementById("Trending");

data_div.innerHTML=null;
data.forEach(function(el,index){
    let div = document.createElement("div")
    let p_name=document.createElement("p");
    p_name.style.color="white"
    p_name.style.marginTop="10px"
    p_name.innerHTML=`Name: ${el.title}`;

    let p_rating = document.createElement("p");
    p_rating.style.color="white"
    p_rating.style.marginTop="10px"


    p_rating.innerHTML=`Year:${el.release_date}`;

    let img = document.createElement("img")
    
    img.id = 'poster'
    img.style.width="300px"
    img.src =  `https://image.tmdb.org/t/p/original${el.poster_path}`

    img.addEventListener("click",function (){

        localStorage.setItem("trendingparticular",JSON.stringify(data[index]))
        
    })


    div.append(img,p_name,p_rating)

    data_div.append(div)
})
}

let id;
const debounce=(func,delay)=>{
   
    if(id){
        clearTimeout(id)
    }

  id =  setTimeout(function(){
        
        func();

    },delay);

}  

    const backtohome=()=>{
        window.location.href="index.html"
    }

    const gotosub=()=>{
      window.location.href="signup.html"

    }