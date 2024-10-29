jQuery(document).ready(function() {


jQuery('div.arfwr_id').each(function(){
var name= jQuery(this).data('name');
var effectype= jQuery(this).data('type');
 function makeresponsive()
{
    var w=jQuery(window).width();
    var count=jQuery('#'+name+' .arfwr_item').length;
    var t_w;
  if((w > 1100))
  {
    t_w=96/count;
    jQuery('#'+name+' .arfwr_item').css({'width':t_w+'%'});
  }
 if((w < 1100) && (w > 769))
  {
    t_w=96/count;
    jQuery('#'+name+' .arfwr_item').css({'width':t_w+'%'});
  }

  if((w < 768) && (w > 451))
  {
    t_w=90/count;
    jQuery('#'+name+' .arfwr_item').css({'width':t_w+'%'});
  }
    if(w < 450)
  {
    t_w=88/count;
    jQuery('#'+name+' .arfwr_item').css({'width':t_w+'%'});
  }

}

makeresponsive();
jQuery(window).resize(makeresponsive);
     jQuery('#'+name+' .arfwr_item').css({'display' : 'inline-block'});
           var width=jQuery('#'+name+' .arfwr_item').width();
        var count=jQuery('#'+name+' .arfwr_item').length;
        var containerwidth=100*count;
      jQuery('#'+name+' .arfwr_container').css({'width':containerwidth+'%'});
if(effectype=='fade')
{
 var items = (Math.floor(Math.random() * (jQuery('#'+name+' .arfwr_item').length)));
	jQuery('#'+name+' .arfwr_item').hide().eq(items).show();
   function next(){
      jQuery('#'+name+' div.arfwr_item:visible').delay(5000).fadeOut('slow',function(){
      jQuery(this).appendTo('#'+name+' .arfwr_container');
   	jQuery('#'+name+' div.arfwr_item:first').fadeIn('slow',next);
    });
   }

   next();

 }
 if(effectype=='slide')
 {

      setInterval(function() {
            jQuery('#'+name+' .arfwr_container').animate({"left": -100+'%'},1000, function(){
                // to create infinite loop
                jQuery('#'+name+' .arfwr_container').css('left',0).append( jQuery('#'+name+' .arfwr_item:first'));
            });
        }, 5000);
 }

 });

});