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

    let data=JSON.parse(localStorage.getItem('details'))

    const appendData= (el)=>{

        let data_div=document.getElementById('container')

        // data_div.innerHTML=null
        let div=document.createElement('div')

        let img=document.createElement('img')
        img.src=el.Poster;

        let name=document.createElement('p')
        name.innerHTML=`Name ${el.Title}`

        let type=document.createElement('p')
        type.innerHTML=`Type ${el.Type}`

        let year=document.createElement('p')
        year.innerHTML=`Year ${el.Year}`

        div.append(img,name,type,year)
        data_div.append(div)

    }
    appendData(data);
