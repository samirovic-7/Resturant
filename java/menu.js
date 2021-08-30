$(".menue li").each(function()
{
    $(this).on("click",function()
    {


        $(this).addClass("active");
        let x = $(this).attr("data-id");

        $("#"+x).siblings().fadeOut(300,function()
        {
            $(this).removeClass("active");
        });

        $("#"+x).fadeIn(300,function()
        {
            $(this).addClass("active")
        })

        
    })
})

$(".department li").each(function()
{
    $(this).on("click",function()
    {
        $(this).addClass('active-color').siblings().removeClass('active-color');
        
        $(this).addClass('colr').siblings().removeClass('colr');
        let x = $(this).attr("data-set");
        
        $("#"+x).siblings().fadeOut(300,function()
        {
            $(this).removeClass("active")
        })

        $("#"+x).fadeIn(300,function()
        {
            $(this).addClass("active")
        })
    })
})