var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle()
{
    settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function()
{
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark");
    }
    else
    {
        localStorage.setItem("theme", "light");
    }
}



// We wan't our choice of dark/light them to persist on re-visits/reloads, so we will use localStorage
// Executed by default on load, as it is in global scope
if(localStorage.getItem("theme") == "light")
{
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark")
{
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else
{
    // no such local storage, maybe first time or cache cleared ...
    localStorage.setItem("theme", "light");
}