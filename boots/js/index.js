$(document).ready(function() {
	// $('#globalStats').click(() => {
		getGlobalStats();
    // });
    
    // $('#countryStats').click(() => {
		getcountryStats();
    // });
    // $('#nigeriaStats').click(() => {
		getNigeriaStats();
    // });
});

function getGlobalStats(){
    console.log('global statics gotten');
    fetch("https://api.covid19api.com/summary")
   
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let getGlobalStatsText = "";
        console.log(data.Global);
        let globalStat = data.Global;
            getGlobalStatsText  += ` 
            <h4 class="text-white">Global Statistics</h4>                     
                 <table class="table table-hover table-striped table-light">
                 <thead class="text-secondary thead-light">
                     <th  class="text-success" scope="col">Global Statistics</th>
                    
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <th scope="row">New Confrimed Cases:</th>
                     <td> ${ globalStat.NewConfirmed.toLocaleString()}</td>
                   </tr>
                   <tr>
                     <th scope="row">Total Confirmed Cases:</th>
                     <td> ${globalStat.TotalConfirmed.toLocaleString()}</td>
                   </tr>
                   <tr>
                     <th scope="row">New Deaths:</th>
                     <td>${globalStat.NewDeaths.toLocaleString()} </td>
                   </tr>
                   <tr class="text-danger">
                     <th scope="row">Total Deaths</th>
                     <td>${globalStat.TotalDeaths.toLocaleString()}</td>
                   </tr>
                   <tr>
                     <th scope="row">New Recovered</th>
                     <td> ${globalStat.NewRecovered.toLocaleString()}</td>
                   </tr>
                   <tr>
                   <th scope="row">Total Recovered</th>
                   <td> ${globalStat.TotalRecovered.toLocaleString()}</td>
                 </tr>
                  
                 </tbody>
               </table>

            `;
        
        document.getElementById('globalStatsDiv').innerHTML = getGlobalStatsText;
    })

}







function getcountryStats () {
    console.log('global statics gotten');
    fetch("https://api.covid19api.com/summary")
   
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let getcountryStatsText = "";
        console.log(data);
        // let stata = stats;
        data.Countries.forEach(function(stats){
        //    getCountryDetails(stats);
            getcountryStatsText  += `   
            <table class="table table-light">
            <thead>
        
            </thead>
            <tbody >
              <tr class="table-body data-TotalRecoverd="${stats.TotalRecovered.toLocaleString()}" data-Recovered="${stats.NewRecovered.toLocaleString()}" data-NewCases="${stats.NewConfirmed.toLocaleString()}" data-TotalCases="${stats.TotalConfirmed.toLocaleString()}" data-Country="${stats.Country}" data-newDeaths="${stats.NewDeaths.toLocaleString()}" data-TotalDeaths="${stats.TotalDeaths.toLocaleString()}" onClick="getCountryDetails(this)">
              <th  scope="row" class="text-secondary" data-TotalRecoverd="${stats.TotalRecovered.toLocaleString()}" data-Recovered="${stats.NewRecovered.toLocaleString()}" data-NewCases="${stats.NewConfirmed.toLocaleString()}" data-TotalCases="${stats.TotalConfirmed.toLocaleString()}" data-Country="${stats.Country}" data-newDeaths="${stats.NewDeaths.toLocaleString()}" data-TotalDeaths="${stats.TotalDeaths.toLocaleString()}" onClick="getCountryDetails(this)" scope="col"> ${stats.Country}</th>

              <td><span class="data-perCountry" data-TotalRecoverd="${stats.TotalRecovered.toLocaleString()}" data-Recovered="${stats.NewRecovered.toLocaleString()}" data-NewCases="${stats.NewConfirmed.toLocaleString()}" data-TotalCases="${stats.TotalConfirmed.toLocaleString()}" data-Country="${stats.Country}" data-newDeaths="${stats.NewDeaths.toLocaleString()}" data-TotalDeaths="${stats.TotalDeaths.toLocaleString()}" onClick="getCountryDetails(this)" >${stats.TotalConfirmed.toLocaleString()}</span></td>
              
              </tr>
             
             
            </tbody>
          </table>
                 
            `;
        });
        document.getElementById('countryStatsDiv').innerHTML = getcountryStatsText;
    })

};

function getCountryDetails(details){
    document.getElementById('eachCountryTotalStats').style.display = "block";
 let newDeaths = details.getAttribute("data-newDeaths");
 let totalDeaths = details.getAttribute("data-TotalDeaths");
 let country = details.getAttribute("data-Country");
 let newCases = details.getAttribute("data-NewCases");
 let totalCases = details.getAttribute("data-TotalCases"); 
 let newRecovered = details.getAttribute("data-Recovered"); 
 let totalRecovered = details.getAttribute("data-TotalRecoverd"); 
  console.log(newDeaths,totalDeaths,country,newCases,totalCases);
 
  let eachCountryDetails = "";
  eachCountryDetails +=`
<table class="table table-hover table-striped table-light">
<thead class="text-secondary thead-light">
   
<th  class="text-success" scope="col"> <h4>${country}</h4></th>
 <td><i onClick="closeModalBox()" class="fas fa-window-close"></i></td>
</thead>
<tbody>
<th scope="row">New Deaths</th>
    <td>${newDeaths}</td>
  </tr>
  <tr class="text-danger">
    <th scope="row">Total Deaths</th>
    <td>${totalDeaths}</td>
  </tr>
    <th scope="row">New Cases</th>
    <td>${newCases}</td>
  </tr>
  <tr class="text-danger">
    <th scope="row">Total Cases</th>
    <td>${totalCases}</td>
  </tr>
  </tr>
    <th scope="row">New Recovered</th>
    <td>${newRecovered}</td>
  </tr>
  <tr class="text-success">
    <th scope="row">Total Recovered</th>
    <td>${totalRecovered}</td>
  </tr>
  
</tbody>

</table>

`;
    
document.getElementById('eachCountryTotalStats').innerHTML = eachCountryDetails;
  
  
 
}

 closeModalBox =()=>{
    document.getElementById('eachCountryTotalStats').style.display = "none"; 
 }

function getNigeriaStats() {
    
    fetch("https://api.covid19api.com/live/country/nigeria")
   
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let getNigeriaStatsText = "";
        console.log(data[0]);
        let nigeriaStats = data[0];
        getNigeriaStatsText += `
        <h4 class="text-light">Nigeria Statistics</h4>
                 <table class="table table-hover table-striped table-light">
                   <thead class="thead-light">
                       <th class="text-success" scope="col">Country</th>
                       <th class="text-success" scope="col">${nigeriaStats.Country}</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <th scope="row">Confirmed Cases</th>
                       <td>${nigeriaStats.Confirmed.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">Active Cases</th>
                       <td>${nigeriaStats.Active.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">Recovered</th>
                       <td>${nigeriaStats.Recovered.toLocaleString()} </td>
                     </tr>
                     <tr class="text-danger">
                       <th scope="row">Total Deaths</th>
                       <td>${nigeriaStats.Deaths.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">Date</th>
                       <td>${nigeriaStats.Date.slice(0,10)}</td>
                     </tr>
                    
                   </tbody>
                 </table>
            `;
        
        document.getElementById('nigeriaStatsDiv').innerHTML = getNigeriaStatsText;
    })


}

