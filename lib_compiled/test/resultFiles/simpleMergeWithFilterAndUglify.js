var cachedModules=[];cachedModules[183]={exports:{}},function(e){(function(){e.exports.boothDeepAndShalow=function(e){return"DEEP_TEST"+e}}).call(this)}.call(this,cachedModules[183],cachedModules[183].exports),cachedModules[3565]={exports:{}},function(e){(function(){var t,o,c;t=require("./lib_external/gibberish-aes"),c=cachedModules[183].exports,o=e.exports,o.enc=function(e,o){var n;return n=t.enc(e,c.boothDeepAndShalow(o))},o.dec=function(e,o){var n;return n=t.dec(e,c.boothDeepAndShalow(o))}}).call(this)}.call(this,cachedModules[3565],cachedModules[3565].exports),cachedModules[6804]={exports:{}},function(e){(function(){e.exports.theNonTrivialFunction=function(e){return"ROOT_TEST_"+e}}).call(this)}.call(this,cachedModules[6804],cachedModules[6804].exports),cachedModules[1326]={exports:{}},function(e){(function(){var t;t=function(){function e(e){this.initStr=e}return e.prototype.get=function(){return this.initStr},e}(),e.exports=t}).call(this)}.call(this,cachedModules[1326],cachedModules[1326].exports),cachedModules[4102]={exports:{}},function(e){(function(){var t;t=function(){function e(e){this.initStr=e}return e.prototype.get=function(){return this.initStr},e}(),e.exports=t}).call(this)}.call(this,cachedModules[4102],cachedModules[4102].exports),function(){var e,t,o,c,n,r,s,i,a,d,u,l,h;if(h=require("underscore"),l=require("sugar"),e=require("./lib_external/constants"),n=cachedModules[3565].exports,d=cachedModules[6804].exports,c=require("crypto"),r=cachedModules[183].exports,t=new cachedModules[1326].exports("test1"),o=cachedModules[4102].exports,i=n.dec(n.enc(e.PART_A+e.PART_B,"secret"),"secret"),u=c.createHash("sha1"),a=u.update(i).digest("hex"),console.log(d.theNonTrivialFunction(a)),s="",!h.isEqual(d.theNonTrivialFunction(a),"ROOT_TEST_6af9b2faa8ae8e408decd4f7121888af71597a90"))throw new Error("ups did not work we got: "+d.theNonTrivialFunction(a)+"  instead");if(!h.isEqual(r.boothDeepAndShalow(a),r.boothDeepAndShalow("6af9b2faa8ae8e408decd4f7121888af71597a90")))throw new Error("ups did not work we got: "+a+"  instead");if(!h.isEqual(t.get(),"test1"))throw new Error("ups did not work we got: "+t.get()+"  instead test1 ");if(!h.isEqual(new o("test2").get()+s,"test2"))throw new Error("ups did not work we got: "+(new o("test2").get()+"  instead test2 "))}.call(this);
//# sourceMappingURL=UGLIFY_SOURCE_MAP_TOKEN