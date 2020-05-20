function toggleDropdown() {
    
    let navbarToggle = document.getElementById("navbartoggle");
    if(navbarToggle.className==="topnav"){
        navbarToggle.className+=' responsive';
    }
    else{
        navbarToggle.className='topnav';
    }
}