let close = Array.from(document.querySelectorAll(".fa-close"));
let item = Array.from(document.querySelectorAll(".my-cart .item"))
let current =0;
for(let i=0;i<close.length;++i)
{
    close[i].onclick=function()
    {
        current=i;
        item[current].style.display="none";
    }
}