$(function(){
  console.log('scripts loaded');

var npsData;


var parks = [];//You must load the NPS data into an array to access the info
var url;
var value;
var myKey = config.MY_KEY;

var query = '';
$('button').click(function(){
  query = document.getElementById("query").value;
  console.log(query);

  var url = 'https://api.nps.gov/api/v1/parks?q=' + query + '&api_key=' + myKey;
  

      $.ajax({
          type:'GET',
          dataType:'json',
          data:npsData,
          url: url,
          success:function(npsData){
            html ='';
            parks = npsData.data;
            if(parks.length == 0){
              html += 'No parks match your query';
            }else{
              console.log(parks);
               parks.forEach(function(park){
                console.log(park.description);
                html += '<div><strong>' + park.fullName + '</strong></div>';
                html += '<div>' + park.description + '</div>';
              });
            }
            $('#results').html(html);
          }
        });
  });
});
