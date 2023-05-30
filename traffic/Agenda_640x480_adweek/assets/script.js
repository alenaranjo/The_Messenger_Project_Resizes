function startAd() {  
// Variables
    var tlMain = gsap.timeline();

// Set starting positions
	(function init() {
        gsap.set([
            txt1_container, 
            txt2_container, 
            txt3_container
        ],{clipPath:'inset(0 100% 0 0)'}); 
        gsap.set(['.txt_mask', '.txtBg'],{clipPath:'inset(0 100% 0 0)'});
        gsap.set([cta, logo_container],{x:"-=30", autoAlpha:0}); 
        gsap.set(logo_txt_container,{x:"-=20", autoAlpha:0}); 

        
        animation();
	})();


// Animation    
	function frame1(){
        var tl = gsap.timeline();
        tl

        .add("f1")
        .to([txt1_container, txt2_container], {duration:.4,  clipPath:'inset(0 0% 0 0)', stagger:.2, ease: "sine.out"}, 'f1+=.4')
        .to(['#txt1_container .txt_mask', '#txt2_container .txt_mask'], {duration:.6,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f1+=1')
       
        return tl;	
        
    }
    
    function frame2(){
        var tl = gsap.timeline();
        tl

        .add("f2")
        .to(txt3_container, {duration:.4,  clipPath:'inset(0 0% 0 0)', stagger:.2, ease: "sine.out"}, 'f2+=.4')
        .to('#txt3_container .txt_mask', {duration:.6,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f2+=.8')
        .to('#txt3_container .txtBg', {duration:.45,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f2+=1.5')

       
        return tl;	
        
    }

    function frame3(){
        var tl = gsap.timeline();
        tl

        .add("f3")
        .to([
            txt1_container, 
            txt2_container, 
            txt3_container], 
        {duration:.25, x:"+=640", autoAlpha:0, ease: "sine.out"}, 'f3+=.4')
    

        .to([logo_container, cta], {duration:.3,  x:"+=30", autoAlpha:1, stagger:.2, ease: "sine.out"}, '+=0')
        .to(logo_txt_container, {duration:.5,  x:"+=20", autoAlpha:1, stagger:.2, ease: "sine.out"}, '-=.3')
        .to(['#logo_container .txt_mask', '#logo_container .txtBg'], {duration:.45,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, '-=.2')
       
        return tl;	
        
    }

    container.addEventListener("mouseenter", () => handleCtaEvent("mouseenter"));
    container.addEventListener("mouseleave", () => handleCtaEvent("mouseleave"));

    const handleCtaEvent = (eventType) => {
    const tl = gsap.timeline();

    switch (eventType) {
        case "mouseenter":
        tl.to(cta, { duration: 0.25, scale: 1.2, left:495, ease: "back.out(1.5)" });
        break;
        case "mouseleave":
        tl.to(cta, { duration: 0.25, scale: 1, left:485, ease: "sine.out" });
        break;
        default:
        break;
    }
    };
    

    function animation(){
            tlMain
           .set(container, {visibility: 'visible'})
           .add(frame1(), "+=0")
           .add(frame2(),"+=.1")
           .add(frame3(),"+=1")
        
        console.log(tlMain.duration());
    
	};
    
/* ---------------------------------- Helper Methods ---------------------------------- */

    function addClass(id, addClass) {
        id.classList.add(addClass);
    };    
};