    //slidshow
    //create an input box.
    //added event on button
    
    const start=()=>{
        
        const arr=[`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7518/1097518-h-1b558692d29f`,
        `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8722/1078722-h-82919d0d3c64`]
       

        let i=0;
        let cont=document.getElementById('carousel')
        
        cont.innerHTML=null
        let img=document.createElement('img')
        
        img.src=arr[0]

        cont.append(img);
        i++;

        
        setInterval(()=>{

            if(i==3){
                i=0;
            }
            img.src=arr[i]

            cont.append(img)

            i++;

        },3000)
    }
    start();

    const searchMovies =async ()=>{
        // let loaderDiv = document.getElementById("basic")
        // loaderDiv='https://i.stack.imgur.com/ATB3o.gif'
        try{
            const query=document.getElementById('query').value;

            console.log(query)

            const res= await fetch(`https://www.omdbapi.com/?apikey=b151b9b7&s=${query}`);
        
            let data= await res.json();
            let actual_data=data.Search;
            appendMovies(actual_data)
            console.log(data)

        }catch (err){
            console.log(err)
        }
    }

    // function constructor(t,p,y){
    //     this.title=t;
    //     this.poster=p;
    //     this.year=y;
    // }

    // let arr=JSON.parse(localStorage.getItem('details')) || []
    
    const appendMovies=  (data)=>{

        if(data==undefined){
            return false
        }
        // let loaderDiv = document.getElementById("basic");
        // loaderDiv.setAttribute("display","block")
        let data_div= document.getElementById('movies') || document.getElementById("basic")

        data_div.innerHTML=null
        // data_div.id='movies';

        data.forEach((el,index)=>{
            let div=document.createElement('div');

            let name=document.createElement('p');
            name.innerHTML=el.Title;

            let rate=document.createElement('p');
            rate.innerHTML=el.Year;

            let img=document.createElement('img');
            img.id='poster'
            img.src=el.Poster;
            img.addEventListener('click',function(){
                localStorage.setItem('details',JSON.stringify(data[index]))
                window.location.href='movies.html'
            })
            // let btn=document.createElement('button')
            // btn.innerHTML="Get details"
            // btn.addEventListener('click',function(){
            //     let obj=new constructor(el.Title,el.Poster,el.Year);

            //     arr.push(obj);
            //     localStorage.setItem('details',JSON.stringify(arr))
            //     window.location.href="movies.html"
            // })

            div.append(img,name,rate);
            data_div.append(div)
        })
    }
    
    let id;
    const debounce = (func,delay)=>{
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(function(){
            func()
        },delay)
    }
    // var loadImage=document.getElementById('loader')

    // window.addEventListener('search',function(){
    //     loadImage.style.display='none';
    // })