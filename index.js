
const apiurl = 'https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=152&APIkey=9d179a25c0a07e465183d6ba67c658ee8d180655968c981b52a746895ac73b65';


async function getapi(url) {
   
   // Storing response
   const response = await fetch(url);
  
   // Storing data in form of JSON
   var data = await response.json();
   console.log(data);
   if (response) {
       hideloader();
   }
   show(data);
}

getapi(apiurl);
 function hideloader() {
   document.getElementById('loading').style.display = 'none';
}

function show(data) {
   const getData = data.result.total;
   let tab = 
       `<thead>
       <tr>
           <th></th>
           <th></th>
           <th>Club</th>
           <th>MP</th>
           <th>W</th>
           <th>D</th>
           <th>L</th>
           <th>GF</th>
           <th>GA</th>
           <th>GD</th>
           <th>Pts</th>
       </tr>
       </thead>`;

      for (let r of getData) {
         tab += `<tr> 
         <td>${r.standing_place}</td>
         <td><img src="${r.team_logo}" alt="timg" class="timg"></td>
         <td data-th="Club">${r.standing_team}</td>
         <td data-th="MP">${r.standing_P}</td>
         <td data-th="W">${r.standing_W}</td> 
         <td data-th="D">${r.standing_D}</td> 
         <td data-th="L">${r.standing_L}</td>
         <td data-th="GF">${r.standing_F}</td> 
         <td data-th="GA">${r.standing_A}</td> 
         <td data-th="GD">${r.standing_GD}</td> 
         <td data-th="Pts">${r.standing_PTS}</td>        
         </tr>`;
   }
   const season = `PREMIER LEAGUE STANDING TABLE (${getData[0].league_season} )`;
   document.getElementById("epl").innerHTML = tab;
   document.getElementById('season').innerHTML = season;
}
