/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(l){var e="mmenu",s="labels";l[e].addons[s]={_init:function(e){var n=this.opts[s];this.__refactorClass(l("li",this.$menu),this.conf.classNames[s].collapsed,"collapsed"),n.collapse&&l("."+a.label,e).each(function(){var e=l(this),s=e.nextUntil("."+a.label,"."+a.collapsed);s.length&&(e.children("."+a.subopen).length||(e.wrapInner("<span />"),e.prepend('<a href="#" class="'+a.subopen+" "+a.fullsubopen+'" />')))})},_setup:function(){var a=this.opts[s];"boolean"==typeof a&&(a={collapse:a}),"object"!=typeof a&&(a={}),a=l.extend(!0,{},l[e].defaults[s],a),this.opts[s]=a},_add:function(){a=l[e]._c,n=l[e]._d,o=l[e]._e,a.add("collapsed uncollapsed"),t=l[e].glbl},_clickAnchor:function(l){var e=l.parent();if(e.is("."+a.label)){var s=e.nextUntil("."+a.label,"."+a.collapsed);return e.toggleClass(a.opened),s[e.hasClass(a.opened)?"addClass":"removeClass"](a.uncollapsed),!0}return!1}},l[e].defaults[s]={collapse:!1},l[e].configuration.classNames[s]={collapsed:"Collapsed"};var a,n,o,t}(jQuery);