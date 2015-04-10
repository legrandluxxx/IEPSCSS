/* 
    IEPSCSSFramework
    Version 0.0.1
    Created on : 10-mars-2015, 10:36:59
    Author     : Pascal

    iepscss.js
    Scripts
*/

    function GrilleAnnulerMargesItems(){

        $('*[class*="conteneur"]').each(function(){

            var largeurConteneur = $(this).width();
            classNames = $(this).attr('class').split(' ');
            for (i= 0; i<classNames.length; i++) {
                if (classNames[i].indexOf('conteneur') > -1){
                    className = classNames[i].split('-');
                    nbreColonnes = parseInt(className[1]);
                }
            }
            var largeurColonne = largeurConteneur / nbreColonnes;
            var posLeftConteneur = $(this).offset().left + parseInt($(this).css('padding-left'));
            var posRightConteneur = $(this).offset().right + parseInt($(this).css('padding-right'));

            $(this).children('*').each(function(){
                var posLeftItem = $(this).offset().left - posLeftConteneur;
                var posRightItem = $(this).offset().right - posRightConteneur;

                if (posLeftItem < largeurColonne) {
                    $(this).addClass('grille-item-debut');
                }
                else {
                    $(this).removeClass('grille-item-debut');
                }
                if (posRightItem < largeurColonne) {
                    $(this).addClass('grille-item-fin');
                }
                else {
                    $(this).removeClass('grille-item-fin');
                }
                
            });

        }); 
    }
        
    $(GrilleAnnulerMargesItems);
    $(window).resize(GrilleAnnulerMargesItems);
