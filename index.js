fetch('https://vlava-api-nadim.herokuapp.com/services')
  .then(response => response.json())
  .then(json => 
    {
    console.log(json)
    var allServices = document.getElementById('AllServices');
    var content =   `<div>
                    <div class="icon"><i class="ICONS"></i></div>
                    <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                    <p class="description">Voluptatum</p>
                    </div>`

    for (let i = 0; i < json.length; i++) 
    {     
        var specificContent = content.replace("Lorem Ipsum",json[i].title)  
        specificContent = specificContent.replace("Voluptatum",json[i].description)
        specificContent = specificContent.replace("ICONS", json[i].image)
        var singleService = document.createElement('div')        
        singleService.className="col-lg-4 col-md-6 icon-box";            
        singleService.innerHTML = specificContent;
        allServices.appendChild(singleService);
    }
    
  })