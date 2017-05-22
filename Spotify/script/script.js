//Add event listener to form that executes search once submitted
document.getElementById('searchform').addEventListener("submit", function(){
  event.preventDefault();

  //removes any items or warnings from previous search
  document.getElementById("searchResults").innerHTML = "";
  clearPreviousSearch();

  searchArtist(document.getElementById('searchbar').value);}
);

//Search for a term and return list of artist names that match along with their profile pics
var searchArtist = function(artist){
  //replace any spaces w/ a + to format for query.
  var artist = artist.replace(/ /g, "+");
  var url = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";

  var xhr = new XMLHttpRequest();

  //what to do once response comes back
  xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //parse JSON into JS file
      var searchterm = JSON.parse(this.responseText);
      //store all artist objects found in results array.
      var results = searchterm.artists.items;
      //if there are artists that match the search
      if(results.length > 0){
        var resultslist = document.createElement("ul");
        resultslist.setAttribute("id", "artistslist");
        //iterate through the artists to display in list
        for(var x = 0; x < results.length; x++){
          var artistoverview = document.createElement("li");
          artistoverview.setAttribute("id", results[x].id);
          artistoverview.setAttribute("onclick", "selectArtist(this.id)");
          //set prof pic if available
          if(results[x].images[0]){
            var artistimage = document.createElement("img");
            artistimage.setAttribute("src", results[x].images[0].url);
            artistoverview.appendChild(artistimage);
          }
          //add their name
          var artistname = document.createElement("h2");
          artistname.innerHTML = results[x].name;
          artistoverview.appendChild(artistname);
          //add artist to the list
          resultslist.appendChild(artistoverview);
        }
        //add list to the DOM
        document.getElementById("results").appendChild(resultslist);
      }else{
        document.getElementById("searchResults").innerHTML = "Sorry, no artists found. Please try again.";
      }
      document.getElementById("searchbar").value = " ";
    }
  };
  //Send over request to Spotify
  xhr.open("GET", url, true);
  xhr.send();
};

var selectArtist = function(artistid){
  //create a spot for the new selected artist's image
  var selectedartistimage = document.createElement("img");
  selectedartistimage.setAttribute("id", "selectedartistimage");

  //save info from selected artist before we delete it in clearPreviousSearch() function.
  var selectedartist = document.getElementById(artistid);
  if(selectedartist.childNodes.length > 1){
    selectedartistimage.setAttribute("src", selectedartist.childNodes[0].src);
    var artistname = selectedartist.childNodes[1].innerHTML;
  }else{
    var artistname = selectedartist.childNodes[0].innerHTML;
  }
  //remove all previous data
  clearPreviousSearch();
  //set selected artist info (name and image)
  document.getElementById("selectedartist").insertBefore(selectedartistimage, document.getElementById("selectedartistname"));
  document.getElementById("selectedartistname").innerHTML = artistname;
  //set top tracks
  artistTopTracks(artistid);
  //set related artists.
  findRelatedArtists(artistid);
}

var artistTopTracks = function(artistid){
  //requesting top tracks info for selected artist...
  var url = "https://api.spotify.com/v1/artists/" + artistid + "/top-tracks?country=US";
  var xhr2 = new XMLHttpRequest();

  xhr2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //parse JSON into JS file
      var artisttracks = JSON.parse(this.responseText);
      var results = artisttracks.tracks;
      //creating top tracks list
      document.getElementById("tracksheading").innerHTML = "Top Tracks";
      var tracklist = document.createElement("ol");
      tracklist.setAttribute("id", "toptrackslist");
      //iterate through top tracks and add to list
      for(var i = 0; i < results.length; i++){
        var trackname = document.createElement("li");
        trackname.innerHTML = results[i].name;
        //add audio preview if available
        if(results[i].preview_url){
          var preview = document.createElement("AUDIO");
          preview.setAttribute("src", results[i].preview_url);
          trackname.appendChild(preview);
          trackname.onclick = function(){playPreview(this.childNodes[1])};
          trackname.style.color = "white";
          trackname.style.cursor = "pointer";
        }
        tracklist.appendChild(trackname);
      }
      //add top tracks list to the DOM
      document.getElementById("trackslist").appendChild(tracklist);
    }
  }

  xhr2.open("GET", url);
  xhr2.send();
}

var findRelatedArtists = function(artistid){
  //requesting related artist info for selected artist...
  var url = "https://api.spotify.com/v1/artists/" + artistid + "/related-artists";
  var xhr2 = new XMLHttpRequest();

  xhr2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      //parse JSON into JS file
      var relatedartists = JSON.parse(this.responseText);
      var results = relatedartists.artists;
      //setting up related artists list
      document.getElementById("relatedartistsheading").innerHTML = "Related Artists:";
      var artistlist2 = document.createElement("ul");
      artistlist2.setAttribute("id", "artistslist");
      //iterate through related artists list
      for(var x = 0; x < results.length; x++){
        var artistoverview2 = document.createElement("li");
        artistoverview2.setAttribute("id", results[x].id);
        artistoverview2.setAttribute("onclick", "selectArtist(this.id)");
        //set profile pic for artist if available
        if(results[x].images[0]){
          var artistimage2 = document.createElement("img");
          artistimage2.setAttribute("src", results[x].images[0].url);
          artistoverview2.appendChild(artistimage2);
        }
        //add their name
        var artistname2 = document.createElement("h2");
        artistname2.innerHTML = results[x].name;
        artistoverview2.appendChild(artistname2);
        //add artist to the list
        artistlist2.appendChild(artistoverview2);
      }
      //add list to the DOM
      document.getElementById("results").appendChild(artistlist2);
    }
  }
  xhr2.open("GET", url);
  xhr2.send();
}

function clearPreviousSearch(){
  //remove artists from search/related artist list
  var artistslist = document.getElementById("artistslist");
  if(artistslist){
    artistslist.parentNode.removeChild(artistslist);
  }
  //remove anything in top tracks list
  var toptrackslist = document.getElementById("toptrackslist");
  if(toptrackslist){
    toptrackslist.parentNode.removeChild(toptrackslist);
  }
  //remove titles for the two lists to prep for a new search.
  document.getElementById("tracksheading").innerHTML = "";
  document.getElementById("relatedartistsheading").innerHTML ="";
  //clear all selected artist data to prepare for a new one or new search.
  document.getElementById("selectedartistname").innerHTML = "";
  var selectedartistimage = document.getElementById("selectedartistimage")
  if(selectedartistimage){
    selectedartistimage.parentNode.removeChild(selectedartistimage);
  }
}

function playPreview(song){
  if(song.paused){
    song.play();
    song.parentNode.style.fontWeight = "bold";
  }else{
    song.pause();
    song.parentNode.style.fontWeight = "normal";
  }
  song.addEventListener("ended", function(){
    song.parentNode.style.fontWeight = "normal";
  });
}
