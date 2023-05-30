function startAd() {  
// Variables
    var tlMain = gsap.timeline();

// Set starting positions
	(function init() {
        //gsap.set([F1_txt1, F1_txt2, F2_txt1, F2_txt2, F3_txt1],{autoAlpha:0});
        gsap.set([
            txt1_container, 
            txt2_container
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
        .to(txt1_container, {duration:.4,  clipPath:'inset(0 0% 0 0)', stagger:.2, ease: "sine.out"}, 'f1+=.4')
        .to('#txt1_container .txt_mask', {duration:.6,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f1+=1')
       
        return tl;	
        
    }
    
    function frame2(){
        var tl = gsap.timeline();
        tl

        .add("f2")
        .to(txt2_container, {duration:.4,  clipPath:'inset(0 0% 0 0)', stagger:.2, ease: "sine.out"}, 'f2+=.4')
        .to('#txt2_container .txt_mask', {duration:.6,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f2+=.8')
        .to('#txt2_container .txtBg', {duration:.45,  clipPath:'inset(0 0% 0 0)', stagger:.25, ease: "sine.out"}, 'f2+=1.5')

       
        return tl;	
        
    }

    function frame3(){
        var tl = gsap.timeline();
        tl

        .add("f3")
        .to([
            txt1_container, 
            txt2_container], 
        {duration:.25, x:"+=728", autoAlpha:0, ease: "sine.out"}, 'f3+=.4')
    

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
        tl.to(cta, { duration: 0.25, scale: 1.2, ease: "back.out(1.5)" });
        break;
        case "mouseleave":
        tl.to(cta, { duration: 0.25, scale: 1, ease: "sine.out" });
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