$(".footer__name").each(function(index, element){
    var animation = TweenLite.to(this, 0.1, {
      className: '+= superShadow',
      ease: Back.easeIn,
      paused:true
    });
    element.animation = animation;
  })
  
  
  $('.footer__name').hover(function(){
   this.animation.play()
  }, function(){
   this.animation.reverse();
  })
  