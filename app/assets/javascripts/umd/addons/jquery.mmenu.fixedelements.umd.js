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
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function s(t){return t}function o(t){return t}function n(){c=!0,e=t[i]._c,f=t[i]._d,r=t[i]._e,e.add("fixed-top fixed-bottom"),d=t[i].glbl}var i="mmenu",a="fixedElements";t[i].prototype["_init_"+a]=function(){if(this.opts.offCanvas){c||n();var i=this.vars[a+"_added"];if(this.vars[a+"_added"]=!0,i||(this.opts[a]=s(this.opts[a]),this.conf[a]=o(this.conf[a])),this.opts[a],this.conf[a],this.__refactorClass(t("div, span, a",d.$page),this.conf.classNames[a].fixedTop,"fixed-top"),this.__refactorClass(t("div, span, a",d.$page),this.conf.classNames[a].fixedBottom,"fixed-bottom"),!i){var f,p;this.$menu.on(r.opening,function(){var s=t(window).scrollTop(),o=d.$page.height()-s-d.$wndw.height();f=t("."+e["fixed-top"]),p=t("."+e["fixed-bottom"]),f.css({"-webkit-transform":"translateY( "+s+"px )",transform:"translateY( "+s+"px )"}),p.css({"-webkit-transform":"translateY( -"+o+"px )",transform:"translateY( -"+o+"px )"})}).on(r.closed,function(){f.add(p).css({"-webkit-transform":"none",transform:"none"})})}}},t[i].addons.push(a),t[i].defaults[a]={},t[i].configuration.classNames[a]={fixedTop:"FixedTop",fixedBottom:"FixedBottom"};var e,f,r,d,c=!1}(jQuery);
}));