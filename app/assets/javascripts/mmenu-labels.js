/*	
 * jQuery mmenu labels addon
 * @requires mmenu 4.1.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
!function(e){var l="mmenu",s="labels";e[l].prototype["_addon_"+s]=function(){var a=this,o=this.opts[s],n=e[l]._c,t=(e[l]._d,e[l]._e);if(n.add("collapsed"),n.add("fixedlabels original clone"),t.add("updatelabels position scroll"),e[l].support.touch&&(t.scroll+=" "+t.mm("touchmove")),"boolean"==typeof o&&(o={collapse:o}),"object"!=typeof o&&(o={}),o=e.extend(!0,{},e[l].defaults[s],o),o.collapse){this.__refactorClass(e("li."+this.conf.collapsedClass,this.$menu),"collapsed");var i=e("."+n.label,this.$menu);i.each(function(){var l=e(this),s=l.nextUntil("."+n.label,"all"==o.collapse?null:"."+n.collapsed);"all"==o.collapse&&(l.addClass(n.opened),s.removeClass(n.collapsed)),s.length&&(l.wrapInner("<span />"),e('<a href="#" class="'+n.subopen+" "+n.fullsubopen+'" />').prependTo(l).on(t.click,function(e){e.preventDefault(),l.toggleClass(n.opened),s[l.hasClass(n.opened)?"removeClass":"addClass"](n.collapsed)}))})}else if(o.fixed){if("horizontal"!=this.direction)return;this.$menu.addClass(n.fixedlabels);var d=e("."+n.panel,this.$menu),i=e("."+n.label,this.$menu);d.add(i).off(t.updatelabels+" "+t.position+" "+t.scroll).on(t.updatelabels+" "+t.position+" "+t.scroll,function(e){e.stopPropagation()}),d.each(function(){var l=e(this),s=l.find("."+n.label);if(s.length){var o=l.scrollTop(),i=n.hassearch&&a.$menu.hasClass(n.hassearch),d=n.hasheader&&a.$menu.hasClass(n.hasheader),r=i?d?100:50:d?60:0;s.each(function(){var s=e(this);s.wrapInner("<div />").wrapInner("<div />");var a,i,d,p=s.find("> div"),c=e();s.on(t.updatelabels,function(){o=l.scrollTop(),s.hasClass(n.hidden)||(c=s.nextAll("."+n.label).not("."+n.hidden).first(),a=s.offset().top+o,i=c.length?c.offset().top+o:!1,d=p.height(),s.trigger(t.position))}),s.on(t.position,function(){var e=0;i&&o+r>i-d?e=i-a-d:o+r>a&&(e=o-a+r),p.css("top",e)})}),l.on(t.updatelabels,function(){o=l.scrollTop(),s.trigger(t.position)}).on(t.scroll,function(){s.trigger(t.updatelabels)})}}),this.$menu.on(t.update,function(){d.trigger(t.updatelabels)}).on(t.opening,function(){d.trigger(t.updatelabels).trigger(t.scroll)})}},e[l].defaults[s]={fixed:!1,collapse:!1},e[l].configuration.collapsedClass="Collapsed",e[l].addons=e[l].addons||[],e[l].addons.push(s)}(jQuery);