var btns = document.querySelectorAll('#movie-list .delete')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    });
});

function searchfun() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function hidefun()
{
    document.getElementById("myUL").style.display = "none";
}

function addLi()
            {

                var txtVal = document.getElementById('txtVal').value,
                    listNode = document.getElementById('myUL'),
                    liNode = document.createElement("LI"),
                    x=document.createElement('span'),
                    txtNode = document.createTextNode(txtVal);
           
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
                 listNode.appendChild(x);
                 
            
            }