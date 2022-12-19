let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("Slides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

    async function searchTrending(){
        
        let query=document.getElementById('query').value
        // console.log(data)

        let res= await fetch(`https://api.themoviedb.org/4/list/1?api_key=b151b9b7`)

        let data=await res.json()
        console.log(data)
    }

    document.querySelector("#sort").addEventListener("change",sortMovies)

    function sortMovies(el){
        let select=document.querySelector("#sort").value;
        if(select=="low"){
            data.sort(function(a,b){
                if(a.rating > b.rating) return 1;
                if(a.rating < b.rating) return -1;  
                return 0;
            })
            append(data);
        }
        if(select=="high"){
            data.sort(function(a,b){
                if(a.rating < b.rating) return 1;
                if(a.rating > b.rating) return -1;
                return 0;
            })
            append(data)
        }
    }

    let moviesData= [
        {
            name: "CHHICHHORE",
            rating: 9,
            img: "https://www.bing.com/th?id=AMMS_373cf1863f6c39a3394ae42820cb99db&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name:'Titanic',
            rating:10,
            img: "https://www.bing.com/th?id=AMMS_b607fba7513e7f15eab170aac1e1400d&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name: "Kaithi",
            rating:8,
            img:"https://www.bing.com/th?id=AMMS_d80de246c1c29f0d57782b89cad259cc&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name:"Hidden Figures",
            rating: 5,
            img:"https://www.bing.com/th?id=AMMS_ca631e9c225f2d13438614ced6a87d34&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name: "Kahani",
            rating: 8.4,
            img: "https://www.bing.com/th?id=AMMS_04a66c238184b792af945503406575d3&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name: "Arjun Reddy",
            rating:8.6,
            img: "https://www.bing.com/th?id=AMMS_f51540e84a9f8ebcf07976b02eff3b42&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name: "Frozen II",
            rating:8,
            img: "https://www.bing.com/th?id=AMMS_6f4e0302cc7e26e2d4ec4acfc1ce820d&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
         {
            name: "AVENGERS",
            rating: 10,
            img: "https://www.bing.com/th?id=AMMS_d70e8ee12fcdde5df391e928dd8497d7&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },
        {
            name:'Stree',
            rating:7,
            img:"https://www.bing.com/th?id=AMMS_359ca271a55945fa872fff8649b41e9c&w=180&h=270&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.34&pid=16.1"
        },

    ];

    localStorage.setItem('movie',JSON.stringify(moviesData))

    let data=JSON.parse(localStorage.getItem('movie')) ||[]
    function append(data){
        let cont=document.getElementById('container') || document.getElementById('basic')
            cont.innerHTML=null

        data.forEach(function(el,i){
            
            let div=document.createElement('div')

            let movie=document.createElement('p')
            movie.innerText=el.name;

            // let date=document.createElement('p')
            // date.innerText=el.date;
            // // console.log(date)

            let rating=document.createElement('p')
            rating.innerText=el.rating;

            let img=document.createElement('img')
            img.src=el.img;
            img.style.width="70%"
            img.style.height="65%"

            div.append(img,movie,rating)
            cont.append(div);
        })
    }    
       
    let getme_promise= new Promise(function(resolve,reject){
        setTimeout(function (){
            let data= moviesData;

            if(data!=null){
                resolve(data);
            }
            else{
                reject("ERR: Server could not you data /:");
            }

        },3000);

    });

        // loader

        getme_promise
        .then(function(res){
            append(res)
        })

        .catch(function(err){
            console.log("err:",err)

        });

        async function main(){
            try {
                let res= await getme_promise;
                append(res)
            } catch(error){
                console.log(error)
            }
        }
        main();
    // append(data);