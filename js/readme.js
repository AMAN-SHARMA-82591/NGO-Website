let list = document.querySelector(".list-content");
let button = document.querySelector(".responsive-button");
button.addEventListener('click',function(){
   list.classList.toggle('responsive-toggle');
});

let section = document.querySelector(".quote-contents");
let header = document.querySelector("header");
const sectionOneOptions = {
   rootMargin :'-300px 0px 0px 0px'
}
const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){
   entries.forEach(entry => {
      if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
      }else{
            header.classList.remove('nav-scrolled');
      }
   });
},sectionOneOptions)
sectionOneObserver.observe(section);

    

//hover-properties for service and about-section
let service = document.querySelector('.service-hover-item');
let about = document.querySelector('.about-list-hover');
let events = document.querySelector('.events-list-hover');
let aboutItem = document.querySelector('.about-items');
let serviceItem = document.querySelector('.service-items');
let eventsItem = document.querySelector('.events-items');
let aboutButton = document.querySelector('.toggle-button-for-about');
let serviceButton = document.querySelector('.toggle-button-for-service');
let eventsButton = document.querySelector('.toggle-button-for-events');
service.addEventListener('mouseenter',function(){
    serviceItem.style.display = 'block';
});
service.addEventListener('mouseleave',function(){
    serviceItem.style.display = 'none';
});
about.addEventListener('mouseenter',function(){
    aboutItem.style.display = 'block';
});
about.addEventListener('mouseleave',function(){
    aboutItem.style.display = 'none';
});
events.addEventListener('mouseenter',function(){
    eventsItem.style.display = 'block';
});
events.addEventListener('mouseleave',function(){
    eventsItem.style.display = 'none';
});


//respnosive-aboutButton
aboutButton.addEventListener('click',function(){
    if(aboutItem.style.display ==='none'){
        aboutItem.style.display = 'block';
    }else{
        if(aboutItem.style.display ==='block'){
            aboutItem.style.display = 'none';
        }else{
            aboutItem.style.display = 'block';
        }
    }
});
//responsive-serviceButton
serviceButton.addEventListener('click',function(){
    if(serviceItem.style.display ==='none'){
        serviceItem.style.display = 'block';
    }else{
        if(serviceItem.style.display === 'block'){
            serviceItem.style.display = 'none';
        }else{
            serviceItem.style.display = 'block';
        }
    }
});
//responsive-eventsButton
eventsButton.addEventListener('click',function(){
    if(eventsItem.style.display === 'none'){
        eventsItem.style.display = 'block';
    }else{
        if(eventsItem.style.display === 'block'){
            eventsItem.style.display = 'none';
        }else{
            eventsItem.style.display = 'block';
        }
    }
});

