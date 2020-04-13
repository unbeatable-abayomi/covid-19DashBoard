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
                 <table class="table table-hover table-striped table-dark">
                 <thead class="text-secondary thead-light">
                     <th  class="text-success" scope="col">Global Statistics</th>
                     <th scope="col"></th>
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
        data.Countries.forEach(function(stats){
            getcountryStatsText  += `
            <div class="col-md-3">
                   <table class="table table-hover table-striped table-dark">
                   <thead class="text-secondary thead-light">
                      
                   <th  class="text-success" scope="col"> ${stats.Country}</th>
                    <th></th>
                   </thead>
                   <tbody>
                     <tr>
                       <th scope="row">New Cases</th>
                       <td>${stats.NewConfirmed.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">Total Cases</th>
                       <td>${stats.TotalConfirmed.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">New Deaths</th>
                       <td>${stats.NewDeaths.toLocaleString()}</td>
                     </tr>
                     <tr class="text-danger">
                       <th scope="row">Total Deaths</th>
                       <td>${stats.TotalDeaths.toLocaleString()}</td>
                     </tr>
                     <tr>
                       <th scope="row">New Recovered</th>
                       <td>${stats.NewRecovered.toLocaleString()} </td>
                     </tr>
                     <tr class="text-success">
                       <th scope="row">Total Recovered</th>
                       <td>${stats.TotalRecovered.toLocaleString()}</td>
                     </tr>
                   </tbody>
                 </table>
                 </div>
            `;
        });
        document.getElementById('countryStatsDiv').innerHTML = getcountryStatsText;
    })

};

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
                 <table class="table table-hover table-striped table-dark">
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

