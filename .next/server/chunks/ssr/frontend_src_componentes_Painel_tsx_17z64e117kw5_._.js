module.exports=[41818,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(66824),f=a.i(17110),g=a.i(24089),h=a.i(77940),i=a.i(98621),j=a.i(36472),k=a.i(64719),l=a.i(61156),m=a.i(74443),n=a.i(25054),o=a.i(94805),p=a.i(33115),q=a.i(43267),r=a.i(68604),s=a.i(29297);function t(a){return(0,s.f)("MuiLinearProgress",a)}(0,r.f)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);let u=l.q`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,v="string"!=typeof u?l.m`
        animation: ${u} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,w=l.q`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,x="string"!=typeof w?l.m`
        animation: ${w} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,y=l.q`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,z="string"!=typeof y?l.m`
        animation: ${y} 3s infinite linear;
      `:null,A=(a,b)=>a.vars?a.vars.palette.LinearProgress[`${b}Bg`]:"light"===a.palette.mode?a.lighten(a.palette[b].main,.62):a.darken(a.palette[b].main,.5),B=(0,m.f)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[`color${(0,q.f)(c.color)}`],b[c.variant]]}})((0,n.f)(({theme:a})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(a.palette).filter((0,o.f)()).map(([b])=>({props:{color:b},style:{backgroundColor:A(a,b)}})),{props:({ownerState:a})=>"inherit"===a.color&&"buffer"!==a.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),C=(0,m.f)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.dashed,b[`dashedColor${(0,q.f)(c.color)}`]]}})((0,n.f)(({theme:a})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(a.palette).filter((0,o.f)()).map(([b])=>{let c=A(a,b);return{props:{color:b},style:{backgroundImage:`radial-gradient(${c} 0%, ${c} 16%, transparent 42%)`}}})]})),z||{animation:`${y} 3s infinite linear`}),D=(0,m.f)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.bar,b.bar1,b[`barColor${(0,q.f)(c.color)}`],("indeterminate"===c.variant||"query"===c.variant)&&b.bar1Indeterminate,"determinate"===c.variant&&b.bar1Determinate,"buffer"===c.variant&&b.bar1Buffer]}})((0,n.f)(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(a.palette).filter((0,o.f)()).map(([b])=>({props:{color:b},style:{backgroundColor:(a.vars||a).palette[b].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:a})=>"indeterminate"===a.variant||"query"===a.variant,style:{width:"auto"}},{props:({ownerState:a})=>"indeterminate"===a.variant||"query"===a.variant,style:v||{animation:`${u} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),E=(0,m.f)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.bar,b.bar2,b[`barColor${(0,q.f)(c.color)}`],("indeterminate"===c.variant||"query"===c.variant)&&b.bar2Indeterminate,"buffer"===c.variant&&b.bar2Buffer]}})((0,n.f)(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(a.palette).filter((0,o.f)()).map(([b])=>({props:{color:b},style:{"--LinearProgressBar2-barColor":(a.vars||a).palette[b].main}})),{props:({ownerState:a})=>"buffer"!==a.variant&&"inherit"!==a.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:a})=>"buffer"!==a.variant&&"inherit"===a.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(a.palette).filter((0,o.f)()).map(([b])=>({props:{color:b,variant:"buffer"},style:{backgroundColor:A(a,b),transition:"transform .4s linear"}})),{props:({ownerState:a})=>"indeterminate"===a.variant||"query"===a.variant,style:{width:"auto"}},{props:({ownerState:a})=>"indeterminate"===a.variant||"query"===a.variant,style:x||{animation:`${w} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),F=c.forwardRef(function(a,c){let d=(0,p.f)({props:a,name:"MuiLinearProgress"}),{className:e,color:f="primary",value:g,valueBuffer:h,variant:l="indeterminate",...m}=d,n={...d,color:f,variant:l},o=(a=>{let{classes:b,variant:c,color:d}=a,e={root:["root",`color${(0,q.f)(d)}`,c],dashed:["dashed",`dashedColor${(0,q.f)(d)}`],bar1:["bar","bar1",`barColor${(0,q.f)(d)}`,("indeterminate"===c||"query"===c)&&"bar1Indeterminate","determinate"===c&&"bar1Determinate","buffer"===c&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==c&&`barColor${(0,q.f)(d)}`,"buffer"===c&&`color${(0,q.f)(d)}`,("indeterminate"===c||"query"===c)&&"bar2Indeterminate","buffer"===c&&"bar2Buffer"]};return(0,j.f)(e,t,b)})(n),r=(0,k.s)(),s={},u={},v={};if(("determinate"===l||"buffer"===l)&&void 0!==g){s["aria-valuenow"]=Math.round(g),s["aria-valuemin"]=0,s["aria-valuemax"]=100;let a=g-100;r&&(a=-a),u.transform=`translateX(${a}%)`}if("buffer"===l&&void 0!==h){let a=(h||0)-100;r&&(a=-a),v.transform=`translateX(${a}%)`}return(0,b.jsxs)(B,{className:(0,i.f)(o.root,e),ownerState:n,role:"progressbar",...s,ref:c,...m,children:["buffer"===l?(0,b.jsx)(C,{className:o.dashed,ownerState:n}):null,(0,b.jsx)(D,{className:o.bar1,ownerState:n,style:u}),"determinate"===l?null:(0,b.jsx)(E,{className:o.bar2,ownerState:n,style:v})]})});var G=a.i(7946);function H(a){return(0,s.f)("MuiSkeleton",a)}(0,r.f)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);let I=l.q`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,J=l.q`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,K="string"!=typeof I?l.m`
        animation: ${I} 2s ease-in-out 0.5s infinite;
      `:null,L="string"!=typeof J?l.m`
        &::after {
          animation: ${J} 2s linear 0.5s infinite;
        }
      `:null,M=(0,m.f)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[c.variant],!1!==c.animation&&b[c.animation],c.hasChildren&&b.withChildren,c.hasChildren&&!c.width&&b.fitContent,c.hasChildren&&!c.height&&b.heightAuto]}})((0,n.f)(({theme:a})=>{let b=String(a.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",c=parseFloat(a.shape.borderRadius);return{display:"block",backgroundColor:a.vars?a.vars.palette.Skeleton.bg:a.alpha(a.palette.text.primary,"light"===a.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${c}${b}/${Math.round(c/.6*10)/10}${b}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:({ownerState:a})=>a.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:a})=>a.hasChildren&&!a.width,style:{maxWidth:"fit-content"}},{props:({ownerState:a})=>a.hasChildren&&!a.height,style:{height:"auto"}},{props:{animation:"pulse"},style:K||{animation:`${I} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(a.vars||a).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:L||{"&::after":{animation:`${J} 2s linear 0.5s infinite`}}}]}})),N=c.forwardRef(function(a,c){let d=(0,p.f)({props:a,name:"MuiSkeleton"}),{animation:e="pulse",className:f,component:g="span",height:h,style:k,variant:l="text",width:m,...n}=d,o={...d,animation:e,component:g,variant:l,hasChildren:!!n.children},q=(a=>{let{classes:b,variant:c,animation:d,hasChildren:e,width:f,height:g}=a;return(0,j.f)({root:["root",c,d,e&&"withChildren",e&&!f&&"fitContent",e&&!g&&"heightAuto"]},H,b)})(o);return(0,b.jsx)(M,{as:g,ref:c,className:(0,i.f)(q.root,f),ownerState:o,...n,style:{width:m,height:h,...k}})});var O=a.i(25442),P=a.i(77092),Q=a.i(67001),R=a.i(14607),S=a.i(18110),T=a.i(76445),U=a.i(19470),V=a.i(70106);let W=(0,V.f)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var X=a.i(22520);let Y=(0,V.f)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);var Z=a.i(36150),$=a.i(15171),_=a.i(60246);let aa=(0,V.f)("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);var ab=a.i(69520),ac=a.i(28748),ad=a.i(13330);function ae({titulo:a,valor:c,detalhe:d,icone:e,cor:f}){return(0,b.jsxs)(G.f,{variant:"outlined",sx:{p:2.5,borderColor:"#E7EBF1",borderRadius:2.5},children:[(0,b.jsxs)(g.f,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1},children:[(0,b.jsx)(U.f,{sx:{fontSize:12,color:"text.secondary"},children:a}),(0,b.jsx)(g.f,{sx:{p:1,bgcolor:`${f}10`,borderRadius:2,display:"flex",color:f},children:(0,b.jsx)(e,{size:18})})]}),(0,b.jsx)(U.f,{sx:{fontSize:{xs:25,lg:29},letterSpacing:"-1px",fontWeight:750,mt:1},children:c}),(0,b.jsx)(U.f,{sx:{fontSize:10.5,color:"text.secondary",mt:.8},children:d})]})}var af=a.i(28640);a.s(["Painel",0,function(){let[a,i]=(0,c.useState)(null),[j,k]=(0,c.useState)(""),[l,m]=(0,c.useState)(0);return(0,c.useEffect)(()=>{let a=!0;return(0,ac.f)().then(b=>{a&&(i(b),k(""))}).catch(b=>{a&&k((0,ad.Q)(b))}),()=>{a=!1}},[l]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(g.f,{sx:{display:"flex",justifyContent:"space-between",gap:2,flexWrap:"wrap",mb:3.5},children:[(0,b.jsxs)(g.f,{children:[(0,b.jsx)(U.f,{sx:{color:"primary.main",fontWeight:700,fontSize:10,letterSpacing:1.7,mb:1},children:"SEU NEGÓCIO, MAIS PERTO"}),(0,b.jsx)(U.f,{variant:"h4",children:"Visão geral"}),(0,b.jsx)(U.f,{sx:{color:"text.secondary",fontSize:13,mt:1},children:"Um olhar completo sobre seus relacionamentos e próximos negócios."})]}),(0,b.jsx)(h.f,{component:d.default,href:"/oportunidades",variant:"contained",endIcon:(0,b.jsx)(X.f,{size:17}),sx:{alignSelf:"center"},children:"Ver oportunidades"})]}),j&&(0,b.jsx)(e.f,{severity:"error",sx:{mb:3},action:(0,b.jsx)(h.f,{color:"inherit",onClick:()=>m(l+1),children:"Tentar novamente"}),children:j}),a?.somenteLeitura&&(0,b.jsx)(e.f,{severity:"info",sx:{mb:3},children:"Demonstração somente leitura. Explore os dados fictícios com segurança."}),a||j?a&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(g.f,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",xl:"repeat(4,1fr)"},gap:2},children:[(0,b.jsx)(ae,{titulo:"Total de clientes",valor:a.totalClientes,detalhe:"Relacionamentos na sua base",icone:_.f,cor:"#2563EB"}),(0,b.jsx)(ae,{titulo:"Leads ativos",valor:a.leadsAtivos,detalhe:"Novas conexões em desenvolvimento",icone:Z.f,cor:"#8656CA"}),(0,b.jsx)(ae,{titulo:"Oportunidades abertas",valor:a.oportunidadesAbertas,detalhe:"Negócios em andamento",icone:$.f,cor:"#D49B2F"}),(0,b.jsx)(ae,{titulo:"Valor das oportunidades",valor:(0,af.x)(a.valorTotalCentavos),detalhe:"Valor total de todas as etapas",icone:aa,cor:"#13876B"})]}),(0,b.jsxs)(g.f,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",lg:"1.7fr 1fr"},gap:2.5,mt:3},children:[(0,b.jsxs)(G.f,{variant:"outlined",sx:{p:3,borderColor:"#E7EBF1"},children:[(0,b.jsxs)(g.f,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1},children:[(0,b.jsx)(U.f,{variant:"h6",children:"Oportunidades por etapa"}),(0,b.jsx)(Y,{size:18,color:"#97A1B0"})]}),(0,b.jsx)(U.f,{sx:{fontSize:11,color:"text.secondary",mb:3},children:"Acompanhe cada passo do seu processo comercial"}),(0,b.jsx)(g.f,{role:"img","aria-label":`Oportunidades por etapa: ${a.oportunidadesPorEtapa.map(a=>`${af.V[a.etapa]}: ${a.quantidade}`).join(", ")}`,children:a.oportunidadesPorEtapa.map(c=>(0,b.jsxs)(g.f,{sx:{display:"grid",gridTemplateColumns:{xs:"115px 1fr 20px",sm:"135px 1fr 25px"},gap:2,alignItems:"center",mb:2.5},children:[(0,b.jsx)(U.f,{sx:{fontSize:11,color:"text.secondary"},children:af.V[c.etapa]}),(0,b.jsx)(F,{variant:"determinate",value:c.quantidade/Math.max(...a.oportunidadesPorEtapa.map(a=>a.quantidade),1)*100,sx:{height:13,borderRadius:1,bgcolor:"#F3F5F8","& .MuiLinearProgress-bar":{bgcolor:af.H[c.etapa],borderRadius:1}}}),(0,b.jsx)(U.f,{sx:{fontSize:12,fontWeight:700},children:c.quantidade})]},c.etapa))})]}),(0,b.jsxs)(G.f,{variant:"outlined",sx:{p:3,borderColor:"#DBE6FD",bgcolor:"#F1F5FF",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,b.jsx)(g.f,{sx:{bgcolor:"#E1EAFF",color:"primary.main",p:1.3,borderRadius:2,mb:2.5,display:"flex"},children:(0,b.jsx)($.f,{size:23})}),(0,b.jsx)(U.f,{sx:{fontSize:22,fontWeight:750,lineHeight:1.3,letterSpacing:"-.5px",maxWidth:250},children:"O próximo bom negócio começa com uma conexão."}),(0,b.jsx)(U.f,{sx:{fontSize:12,lineHeight:1.9,color:"#62728C",mt:1.5,mb:2.5},children:"Mantenha seus leads por perto. Cada conversa é uma nova oportunidade de crescer."}),(0,b.jsx)(h.f,{component:d.default,href:"/leads",endIcon:(0,b.jsx)(W,{size:16}),sx:{mt:"auto",p:0},children:"Explorar meus leads"})]})]}),(0,b.jsxs)(G.f,{variant:"outlined",sx:{mt:3,borderColor:"#E7EBF1",overflow:"hidden"},children:[(0,b.jsxs)(g.f,{sx:{p:3,display:"flex",justifyContent:"space-between",alignItems:"center",gap:1},children:[(0,b.jsxs)(g.f,{children:[(0,b.jsx)(U.f,{variant:"h6",children:"Últimas conexões"}),(0,b.jsx)(U.f,{sx:{fontSize:11,color:"text.secondary",mt:.7},children:"Os leads mais recentes da sua base"})]}),(0,b.jsx)(h.f,{component:d.default,href:"/leads",size:"small",endIcon:(0,b.jsx)(W,{size:15}),children:"Ver todos"})]}),(0,b.jsx)(R.f,{children:(0,b.jsxs)(O.f,{"aria-label":"Últimos leads cadastrados",children:[(0,b.jsx)(S.f,{children:(0,b.jsx)(T.f,{children:["Nome","Empresa","Origem","Status","Cadastro"].map(a=>(0,b.jsx)(Q.f,{children:a},a))})}),(0,b.jsxs)(P.f,{children:[a.ultimosLeads.map(a=>(0,b.jsxs)(T.f,{hover:!0,children:[(0,b.jsx)(Q.f,{children:(0,b.jsxs)(g.f,{sx:{display:"flex",alignItems:"center",gap:1.5},children:[(0,b.jsx)(f.f,{sx:{bgcolor:"#EDF2FF",color:"#5774B0",width:33,height:33,fontSize:11},children:a.nome.split(" ").map(a=>a[0]).slice(0,2).join("")}),(0,b.jsxs)(g.f,{children:[(0,b.jsx)(U.f,{sx:{fontSize:12,fontWeight:600},children:a.nome}),(0,b.jsx)(U.f,{sx:{fontSize:10,color:"text.secondary",mt:.4},children:a.email})]})]})}),(0,b.jsx)(Q.f,{sx:{fontSize:12},children:a.empresa}),(0,b.jsx)(Q.f,{sx:{fontSize:11,color:"text.secondary"},children:a.origem}),(0,b.jsx)(Q.f,{children:(0,b.jsx)(af.Y,{valor:a.status})}),(0,b.jsx)(Q.f,{sx:{fontSize:11,color:"text.secondary"},children:new Date(a.criadoEm).toLocaleDateString("pt-BR")})]},a.id)),!a.ultimosLeads.length&&(0,b.jsx)(T.f,{children:(0,b.jsx)(Q.f,{colSpan:5,children:"Nenhum lead cadastrado. Comece criando sua primeira conexão."})})]})]})})]}),(0,b.jsxs)(g.f,{sx:{display:"flex",alignItems:"center",gap:.8,mt:2,color:"text.secondary"},children:[(0,b.jsx)(ab.f,{size:11}),(0,b.jsx)(U.f,{sx:{fontSize:10},children:"Indicadores calculados a partir dos dados da API"})]})]}):(0,b.jsx)(g.f,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr",xl:"repeat(4,1fr)"},gap:2},children:[1,2,3,4].map(a=>(0,b.jsx)(N,{variant:"rounded",height:160},a))})]})}],41818)}];

//# sourceMappingURL=frontend_src_componentes_Painel_tsx_17z64e117kw5_._.js.map