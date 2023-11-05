const sections = document.querySelectorAll("section")
const navsLinks =  document.querySelectorAll("nav a")

const resetLinks = ()=>{
    navsLinks.forEach((link)=> link.classList.remove("active"))
}

const handleScroll = ()=>{
    const {scrollY} = window
    // console.log(scrollY);

    sections.forEach((section)=>{
        // id = if of each section 
        // clientHeight = height of each section 
        // offsetTop = how far away from top (in pixels) 
        const { id , clientHeight , offsetTop} = section
        const offset = offsetTop - 1

        if(scrollY >= offset && scrollY < offset + clientHeight){
            resetLinks()
            navsLinks.forEach((link)=>{
                if(link.dataset.scroll === id ){
                    link.classList.add("active")
                }
            })
        }
})
}

document.addEventListener("scroll", handleScroll)