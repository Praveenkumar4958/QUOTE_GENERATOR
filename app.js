var button = document.getElementById("button");
var currentquote=1;
var currentquotediv;
var totalquotes=10;
document.body.style.backgroundColor="aqua";
var i=0;
var backgroundcolor=["red","#0000CC","orange","lightgreen","pink","lightblue","red","#6600CC","#660000"];
var buttonbackgroundcolor=["#660000","#6600CC","red","lightblue","red","lightgreen","orange","#0000CC","#red"];
function another()
{
    currentquotediv=document.getElementById("quote"+currentquote);
    currentquotediv.style.display="none";
    currentquote++;
    if(currentquote>totalquotes)
    {
        currentquote=1;
    }
    var nextquotediv=document.getElementById("quote"+currentquote)
    nextquotediv.style.display="block";
    if(i>9)
    {
        i=0;
    }
    document.body.style.backgroundColor=backgroundcolor[i];
    button.style.backgroundColor=buttonbackgroundcolor[i];
    i++;
}

