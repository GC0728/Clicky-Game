(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,name:"Toon Link",image:"https://www.ssbwiki.com/images/thumb/5/56/Toon_Link_SSBU.png/250px-Toon_Link_SSBU.png",clicked:!1},{id:2,name:"Kirby",image:"https://www.ssbwiki.com/images/thumb/0/07/Kirby_SSBU.png/250px-Kirby_SSBU.png",clicked:!1},{id:3,name:"Cloud",image:"https://www.ssbwiki.com/images/thumb/e/e7/Cloud-Alt1_SSBU.png/250px-Cloud-Alt1_SSBU.png",clicked:!1},{id:4,name:"Marth",image:"https://www.ssbwiki.com/images/thumb/7/79/Marth_SSB4.png/250px-Marth_SSB4.png",clicked:!1},{id:5,name:"King Dedede",image:"http://smashbros-ultimate.com/images/char/king_dedede.png",clicked:!1},{id:6,name:"Captain Falcon",image:"https://www.ssbwiki.com/images/thumb/d/da/Captain_Falcon_SSBU.png/250px-Captain_Falcon_SSBU.png",clicked:!1},{id:7,name:"Olimar",image:"https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/250px-Olimar_SSBU.png",clicked:!1},{id:8,name:"Mr. Game and Watch",image:"http://i.imgur.com/vJEogz9.png",clicked:!1},{id:9,name:"Solid Snake",image:"https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/250px-Snake_SSBU.png",clicked:!1},{id:10,name:"Gandorf",image:"https://www.ssbwiki.com/images/thumb/2/23/Ganondorf_SSB4.png/250px-Ganondorf_SSB4.png",clicked:!1},{id:11,name:"Yoshi",image:"https://www.ssbwiki.com/images/thumb/2/2a/Yoshi_MP10.png/1200px-Yoshi_MP10.png",clicked:!1},{id:12,name:"Ice Climbers",image:"https://vignette.wikia.nocookie.net/nintendo/images/5/50/Super_Smash_Bros._Ultimate_-_Character_Art_-_Ice_Climbers.png/revision/latest/scale-to-width-down/310?cb=20180613015447&path-prefix=en",clicked:!1}]},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(4),m=t.n(c),r=(t(16),t(5)),s=t(6),o=t(8),l=t(7),d=t(1),g=t(9);t(17);var u=function(e){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("span",null,i.a.createElement("h2",null,"Clicky Game"),i.a.createElement("h2",null,"[Message Goes Here]"),i.a.createElement("h2",null,"Score: ",e.score," |"),i.a.createElement("h2",null,"Top Score: 1")))};t(18);var p=function(e){return i.a.createElement("div",{className:"container-flex wrapper"},e.children)};t(19);var h=function(e){return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("button",{className:"btn"},i.a.createElement("img",{className:"text-nowrap",alt:"Click me I'm "+e.name,src:e.image,onClick:function(){return e.imageClick(e.id)},id:e.id})))))))},w=t(2),S=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(l.a)(a).call(this,e))).smashShuffle=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},t.imageClick=function(e){var a=t.state.images.filter(function(a){return a.id===e})[0];console.log(a);var n=t.state.images.filter(function(e){return!0===e.clicked});console.log(n),a.clicked||(t.smashShuffle(w),t.handleScoreCount())},t.handleScoreCount=function(){t.setState({count:t.state.score+1})},t.state={images:w,score:0,bestScore:0},t.imageClick=t.imageClick.bind(Object(d.a)(t)),t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement(u,{Score:this.state.score}),i.a.createElement(p,null,this.state.images.map(function(a){return i.a.createElement(h,{id:a.id,key:a.id,image:a.image,name:a.name,imageClick:e.imageClick})})))}}]),a}(n.Component);m.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.88469c36.chunk.js.map