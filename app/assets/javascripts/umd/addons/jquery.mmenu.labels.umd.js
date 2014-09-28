(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(l){function a(a){return"boolean"==typeof a&&(a={collapse:a}),"object"!=typeof a&&(a={}),a=l.extend(!0,{},l[o].defaults[t],a)}function e(l){return l}function s(){i=!0,n=l[o]._c,d=l[o]._d,c=l[o]._e,n.add("collapsed"),d.add("updatelabel"),p=l[o].glbl}var o="mmenu",t="labels";l[o].prototype["_init_"+t]=function(o){i||s();var p=this.vars[t+"_added"];this.vars[t+"_added"]=!0,p||(this.opts[t]=a(this.opts[t]),this.conf[t]=e(this.conf[t]));var u=this.opts[t];this.conf[t],u.collapse&&(this.__refactorClass(l("li",this.$menu),this.conf.classNames[t].collapsed,"collapsed"),l("."+n.label,o).each(function(){var a=l(this),e=a.nextUntil("."+n.label,"all"==u.collapse?null:"."+n.collapsed);"all"==u.collapse&&(a.addClass(n.opened),e.removeClass(n.collapsed)),e.length&&(a.data(d.updatelabel)||(a.data(d.updatelabel,!0),a.wrapInner("<span />"),a.prepend('<a href="#" class="'+n.subopen+" "+n.fullsubopen+'" />')),a.find("a."+n.subopen).off(c.click).on(c.click,function(l){l.preventDefault(),a.toggleClass(n.opened),e[a.hasClass(n.opened)?"removeClass":"addClass"](n.collapsed)}))}))},l[o].addons.push(t),l[o].defaults[t]={collapse:!1},l[o].configuration.classNames[t]={collapsed:"Collapsed"};var n,d,c,p,i=!1}(jQuery);
}));