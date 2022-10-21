var QdC, Carbonos=[], CadeiaOrg=[],EnC=[], Lc=[], Text,k=[], backgroundColor=220,FormEstrut, Qdl=0, QdP=0
var Cadeia = {
    Ciclo:"",
TipodeCadeia:"",
QdeNucle:"",
TdNucleo:"",
Disposição:"",
Natureza:"",
Ligação:"",
}

var intrusos=[]
intrusos.push("Br","O","H")
function preload(){ 
    Lc.push(["L1",[]],["L2",[]],["L3",[]],["L4",[]],["L5",[]])
}
function setup() {
createCanvas(windowWidth, windowHeight);canvas=1

CriaçãodaCadeia()
InformaçõesDaCadeia()
    }

function draw() {
background(backgroundColor)
Ligacao()
Destroy()
text(Carbonos,width/2-(textSize()*10),height/2-height/3)
drawSprites()
LetrasdaCadeia()
}

function CriaçãodeCarbonos(I){
    //Criação de Carbonos na cadeia
    this.T=Number(QdC+I);this.I=0,this.C=0
    this.i=0;this.create=0
    for(this.i;this.i<this.T;this.i=this.i){
if(this.create==0&&Math.round(random(1,2))==1&&this.I<I){this.I+=1;this.i+=1;this.create=1;this.nome=intrusos[Math.round(random(0,intrusos.length-1))];}
else if(this.create==0&&this.C<QdC){this.C+=1;this.i+=1;this.create=1;this.nome="C";}
//Aberta
if(this.create==1&&Cadeia.Ciclo=="Aberto"){ 
    //Normal
    if(Cadeia.Disposição=="Normal"){
        this.index=this.i
    EnC.push([createSprite((this.i*this.T)*width/((this.T+1)*this.T),height/2,width/(16+this.T),height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
    Lc[2][1][Lc[2][1].length]=[EnC[EnC.length-1][0],this.nome,this.index,EnC[EnC.length-1][1]]
    //if(EnC.length>=2){JdoE(EnC[EnC.length-2][0],EnC[EnC.length-2][1],EnC[EnC.length-1][0],EnC[EnC.length-1][1])}
    this.create=0
}

    //Ramificada
    else{
    this.length=0;for(var d in Lc){if(d!=Math.round(Lc.length/2 - 1)){this.length+=Lc[d][1].length}}
    this.index=this.i-this.length
    this.lc=Math.round(random(0,Lc.length-1))
    if(Lc[2][1].length<=0&&this.create==1){this.lc=2}
    if(this.lc==0&&Lc[this.lc+1][1].length>0&&this.create==1){//L = 1
        if(Lc[this.lc][1].length==0||Lc[this.lc][1][Lc[this.lc][1].length-1][2]!=this.index-1){if(Lc[this.lc+1][1][Lc[this.lc+1][1].length-1][2]==this.index-1){
        EnC.push([createSprite(1,(height*2/8)-height/16,width/16,height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
        this.create=0;}}
    }//L = 2
    if(this.lc==1&&Lc[this.lc+1][1].length>0&&this.create==1){
        if(Lc[this.lc][1].length==0||Lc[this.lc][1][Lc[this.lc][1].length-1][2]!=this.index-1){if(Lc[this.lc+1][1][Number(Lc[Number(this.lc+1)][1].length-1)][2]==Number(this.index-1)){
        EnC.push([createSprite(1,(height*3/8)-height/32,width/16,height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
        this.create=0;}}
    }//L = 3
    if(this.lc==2&&this.create==1){
        EnC.push([createSprite(1,height/2,width/16,height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
        this.create=0;
    }//L = 4
    if(this.lc==3&&Lc[this.lc-1][1].length>0&&this.create==1){
        if(Lc[this.lc][1].length==0||Lc[this.lc][1][Lc[this.lc][1].length-1][2]!=this.index-1){if(Lc[this.lc-1][1][Number(Lc[Number(this.lc-1)][1].length-1)][2]==Number(this.index-1)){
        EnC.push([createSprite(1,(height*5/8)+height/32,width/16,height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
        this.create=0;}}
    }//L = 5
    if(this.lc==4&&Lc[this.lc-1][1].length>0&&this.create==1){
        if(Lc[this.lc][1].length==0||Lc[this.lc][1][Lc[this.lc][1].length-1][2]!=this.index-1){if(Lc[this.lc-1][1][Lc[this.lc-1][1].length-1][2]==this.index-1){
        EnC.push([createSprite(1,(height*6/8)+height/16,width/16,height/8),{l1:undefined,l2:undefined,l3:undefined,l4:undefined}])
        this.create=0;}}
    }//Proxima coluna

if(this.create==0){if(this.lc!=2){this.index-=1};Lc[this.lc][1][Lc[this.lc][1].length]=[EnC[EnC.length-1][0],this.nome,this.index,EnC[EnC.length-1][1]]}
    }
    //&&(Lc[this.lc][1].length>0&&Lc[this.lc][1][Lc[this.lc][1].length-1][2]!=this.index)
    for(var e in Lc){
        for(var ee in Lc[e][1]){
            Lc[e][1][ee][0].shapeColor=backgroundColor//visible=false
            Lc[e][1][ee][0].position.x=(Lc[e][1][ee][2]*(this.T-this.length))*width/((this.T-this.length+1)*(this.T-this.length));
            Lc[e][1][ee][0].width=width/16/((Number(Lc[2][1].length*2)/1.5)/2/2.5)
            Lc[e][1][ee][0].height=height/8/2
        }}
 
 
    }
    /*Fechada*/else{

    }

    }

    if(Cadeia.Ciclo=="Aberto"){    for(var e in Lc){
        for(var ee in Lc[e][1]){
JdoETeL(Number(e),Math.round(random(1,2)),Number(ee))
    }}}

if(Cadeia.Ciclo=="Fechado"){    for(var e in Lc){
    for(var ee in Lc[e][1]){
JdoETeL(Number(e),Math.round(random(1,4)),Number(ee))
}}}


    console.log(Lc);console.log("Quantidade: "+this.T+" || C: "+QdC)
    teste()
}

function CriaçãodaCadeia(){
    //Quantidade de Carbonos e intrusos e o tipo da cadeia => definição/criação dos carbonos
    switch(Math.round(2,2)){case(1):FormEstrut="Traço";break;case(2):FormEstrut="Condensado";break;case(3):FormEstrut="Ligação";break}
QdC=Math.round(random(6,6))
if(Math.round(random(1,1))==1){this.Ciclo="Aberto"}else{this.Ciclo="Fechado"}

if(this.Ciclo=="Aberto"){
    
    if(Math.round(random(1,2))==1){this.Natureza="Homogênea"}else{this.Natureza="Heterogênea"}
    if(Math.round(random(1,2))==1){this.Ligação="Saturada"}else{this.Ligação="Insaturada"}
    if(Math.round(random(2,2))==1){this.Disposição="Normal"}else{this.Disposição="Ramificada"}

    Cadeia = {
        Ciclo:this.Ciclo,
    TipodeCadeia:"",
    QdeNucle:"",
    TdNucleo:"",
    Disposição:this.Disposição,
    Natureza:this.Natureza,
    Ligação:this.Ligação,
    }
    //Aberta, [Natureza, Ligação, Disposição] (L=2)
}

else{
    if(Math.round(random(1,2))==1){this.TdCadeia="Alicíclica"}else{this.TdCadeia="Aromática"}
    
    if(this.TdCadeia=="Alicíclica"){
        
        if(Math.round(random(1,2))==1){this.Natureza="Homocíclica"}else{this.Natureza="Heterocíclica"}
        if(Math.round(random(1,2))==1){this.Ligação="Saturada"}else{this.Ligação="Insaturada"}
        
        Cadeia = {
            Ciclo:this.Ciclo,
        TipodeCadeia:this.TdCadeia,
        QdeNucle:"",
        TdNucleo:"",
        Disposição:"Ramificada",
        Natureza:this.Natureza,
        Ligação:this.Ligação,
        }
        //Fechada, Aliciclica, [Natureza, Ligação] (L=3)
    }
    
    else{
        if(Math.round(random(1,2))==1){this.QdNucleo="Mononuclear"}else{this.QdNucleo="Polinuclear"}

        if(this.QdNucleo=="Polinuclear"){
            if(Math.round(random(1,2))==1){this.TdNucleo="Condensado"}else{this.TdNucleo="Isolado"}

            Cadeia = {
                Ciclo:this.Ciclo,
            TipodeCadeia:this.TdCadeia,
            QdeNucle:this.QdNucleo,
            TdNucleo:this.TdNucleo,
            Disposição:"",
            Natureza:this.Natureza,
            Ligação:this.Ligação,
            }
            //Fechada, Aromatica, Polinuclear, Tipo de Nucleo (L=4)
        }
        else{
            Cadeia = {
                Ciclo:this.Ciclo,
            TipodeCadeia:this.TdCadeia,
            QdeNucle:this.QdNucleo,
            TdNucleo:"",
            Disposição:"",
            Natureza:"",
            Ligação:"",
            }
            //Fechada, Aromatica, Mononuclear (L=3)
        }
    }
}
if((Cadeia.Ciclo=="Aberto"&&Cadeia.Ligação=="Insaturada")||(Cadeia.TdCadeia=="Alicíclica"&&Cadeia.Ligação=="Insaturada")){this.x=3}else{this.x=1}
if((Cadeia.Ciclo=="Aberto"&&Cadeia.Natureza=="Heterogênea")||(Cadeia.Ciclo=="Fechado"&&Cadeia.Natureza=="Heterocíclica")){this.Intrusos=Math.round(random(5,QdC))}else{this.Intrusos=0}
CriaçãodeCarbonos(this.Intrusos,this.x)
}

function LetrasdaCadeia(){
 for(var e in Lc){var ts = Number((Math.round(Math.sqrt((Math.pow(width*1.25/16,2)+Math.pow(height*1.25/8,2)/30))/4/1.25)).toFixed(0))
    textSize(ts)
    for(var ee in Lc[e][1]){
        var nome,px,py
        nome=Lc[e][1][ee][1];py=Lc[e][1][ee][0].position.y+Lc[e][1][ee][0].height/8;px=Lc[e][1][ee][0].position.x
        fill("red");stroke("red");strokeWeight(2)
if(FormEstrut=="Ligação"&&nome!="C"){text(nome,px-(textSize()/2.5),py-(textSize()/8))}
if(FormEstrut!="Ligação"){text(nome,px-(textSize()/2.5),py-(textSize()/8))}
fill("black");stroke("black")
    }
 }
}

function Ligacao(){
strokeWeight(2)

    for(var e in Lc){
//Linhas
        for(var ee in Lc[e][1]){if(ee<=Lc[e][1].length-1){
            if(Lc[e][1].length>0){
            for(var eee in Lc[e][1][ee][3]){if(Lc[e][1][ee][3][eee]!=undefined){
            if(Lc[e][1][ee][3][eee][1]==1){line(Lc[e][1][ee][0].position.x,Lc[e][1][ee][0].position.y,Lc[e][1][ee][3][eee][0].position.x,Lc[e][1][ee][3][eee][0].position.y)}
                
            if(Lc[e][1][ee][3][eee][1]==2){line(Lc[e][1][ee][0].position.x,Lc[e][1][ee][0].position.y+height/8/12,Lc[e][1][ee][3][eee][0].position.x,Lc[e][1][ee][3][eee][0].position.y+height/8/12)}
            
            if(Lc[e][1][ee][3][eee][1]==3){line(Lc[e][1][ee][0].position.x,Lc[e][1][ee][0].position.y-height/8/10,Lc[e][1][ee][3][eee][0].position.x,Lc[e][1][ee][3][eee][0].position.y-height/8/10)}
        }}}
        }
        }}

    /*if(FormEstrut=="Condensado"){//Terminar
        this.texto="";this.greeting
for(var E in Lc[2][1]){this.texto+=Lc[2][1][E][1];for(var EE in Lc[2][1][E][3]){if(Lc[2][1][E][3][EE]!=undefined){
for(var e in Lc){if(e==3||e==1){
for(var ee in Lc[e][1]){
if(Lc[2][1][E][3][EE]!=undefined){
if(Lc[e][1][ee][0].position.x==Lc[2][1][E][3][EE][0].position.x&&Lc[e][1][ee][0].position.y==Lc[2][1][E][3][EE][0].position.y){//Verifica se os sprites correspondem
this.texto+=Lc[e][1][ee][1];
//Encontrou o sprite correspondente
for(var eee in Lc[e][1][ee][3]){
for(var L in Lc){if(L!=2&&L<=Number(Number(E)+1)&&L>=Number(e-1)){
for(var LL in Lc[L][1]){
if(Lc[e][1][ee][3][eee]!=undefined){
if(Lc[L][1][LL][0].position.x==Lc[e][1][ee][3][eee][0].position.x&&Lc[L][1][LL][0].position.y==Lc[e][1][ee][3][eee][0].position.y){
    //Encontrou o sprite correspondente do correspondente
for(var LLL in Lc[L][1][LL][3]){
this.adicionar=0;
if(Number(E-1)>=0&&Number(Number(E)+1)<=Lc[2].length-1){
if(Lc[L][1][LL][3][LLL][0]==Lc[2][1][E+1][0]&&Lc[L][1][LL][3][LLL][0]==Lc[2][1][E-1][2]){this.adicionar=-1}
if(this.adicionar==0){this.texto+=Lc[L][1][LL][1]}
                                                          
                                        
                                        
                                        
    }}}}}}}}}}}}}}}}
        
        //this.greeting = createElement("h2");this.greeting.size(width, height/16);this.greeting.style('font-size', (this.texto.length*3)+'px');this.greeting.html(this.texto);this.greeting.position(0,height/2)
    }*/
    
    if(FormEstrut=="Condensado"){
var texto = ""
for(var L in Lc[2][1]){texto+=Lc[2][1][L][1]
    for(var LL in Lc[2][1][L][3]){if(Lc[2][1][L][3][LL]!=undefined){var f = Lc[2][1][L][3][LL][2]//Linha
        for(var ff in Lc[f][1]){        
    if(Lc[f][1][ff][2]==Lc[2][1][L][2]&&Lc[f][1][ff][0]==Lc[2][1][L][3][LL][0]){
//if(Lc[2][1][L][3][LL][1]==2){if(Lc[2][1][L][1]=="C"&&Lc[f][1][ff][1]=="C"){texto+="="}}
//if(Lc[2][1][L][3][LL][1]==3){if(Lc[2][1][L][1]=="C"&&Lc[f][1][ff][1]=="C"){texto+="≡"}}
        texto+=Lc[f][1][ff][1]//CERTO
        

for(var fff in Lc[f][1][ff][3]){if(Lc[f][1][ff][3][fff]!=undefined){var E=Lc[f][1][ff][3][fff][2]//Linha
if(E!=2){for(var e in Lc[E][1]){
if(Lc[E][1][e][0]!=Lc[2][1][L][3][LL][0]){
if(Lc[E][1][e][2]==Lc[f][1][ff][2]&&Lc[E][1][e][0]==Lc[f][1][ff][3][fff][0]){
//if(Lc[f][1][ff][3][fff][1]==2){if(Lc[f][1][ff][1]=="C"&&Lc[E][1][e][1]=="C"){texto+="="}}
//if(Lc[f][1][ff][3][fff][1]==3){if(Lc[f][1][ff][1]=="C"&&Lc[E][1][e][1]=="C"){texto+="≡"}}
        texto+=Lc[E][1][e][1]
       }
    }
}}
        }}
    }
    }}}
}
if(this.greeting==undefined){
    this.greeting = createElement("h2");this.greeting.size(width , height/16)
    message=texto
    this.greeting.style('font-size', 100+'px')
          this.greeting.html(message)
          this.greeting.position(width/2,height/2-height/4)}
    }
}

function handleMousePressed() {

    }

    //function JdoE(xs,xl,ys,yl,xlinha,xi,ylinha,yi){
   function JdoETeL(e,q,ee){
   this.Q=0;this.ja=[undefined,undefined,undefined,undefined], this.s=0
        for(this.Q;this.Q<q;this.Q=this.Q){
            this.rm=Math.round(random(0,4));console.log("%crandom: "+this.rm, "color: red");var H=0
            var tt=0
            
switch(this.rm){
    
case(0):
for(var t in this.ja){if(this.ja[t]!=undefined){tt+=1}};if(tt==4){this.Q=q+1}

break
    case(1)://Direita
    
    if(this.ja[0]==undefined){console.log("%c Direita ", "color: green");
        if(ee+1<=Lc[e][1].length-1){
        if(Number(Lc[e][1][ee][2]+1)===Lc[e][1][ee+1][2]){
            
for(var h in Lc[e][1][ee][3]){
if(Lc[e][1][ee][3][h]!=undefined){
    console.log("%c 1: "+Number(Lc[e][1][ee][3][h][2]), "color: orange");
    console.log("%c 2: "+Number(e), "color: orange");console.log(Number(Lc[e][1][ee][3][h][2])==Number(e))
    console.log("%c 3: "+Lc[e][1][ee][3][h][3], "color: orange");
    console.log("%c 4: "+Lc[e][1][(ee+1)][2], "color: orange");console.log(Number(Lc[e][1][ee][3][h][3])==Number(Lc[e][1][(ee+1)][2]))
if((Number(Lc[e][1][ee][3][h][2])==Number(e))&&(Number(Lc[e][1][ee][3][h][3])==Number(Lc[e][1][(ee+1)][2]))){
H = 1}}};console.log("%c H: "+H, "color: purple");
if(H!=1){
        JdoE(Lc[e][1][ee][0],Lc[e][1][ee][3],Lc[e][1][ee+1][0],Lc[e][1][ee+1][3],e,Lc[e][1][ee][2],e,Lc[e][1][ee+1][2],"D")
        this.Q+=1;this.ja[0]=0;Qdl+=1;console.log("%c SIM", "color: yellow");}
    }}if(this.ja[0]==undefined){this.ja[0]=1;console.log("%c NÂO", "color: yellow");}}
    break 

   case(2)://Esquerda
   
   if(this.ja[1]==undefined){console.log("%c Esquerda ", "color: green");
   if(ee-1>=0){
    if(Number(Lc[e][1][ee][2]-1)===Lc[e][1][ee-1][2]){
for(var h in Lc[e][1][ee][3]){
if(Lc[e][1][ee][3][h]!=undefined){
    console.log("%c 1: "+Number(Lc[e][1][ee][3][h][2]), "color: orange");
    console.log("%c 2: "+Number(e), "color: orange");console.log(Number(Lc[e][1][ee][3][h][2])==Number(e))
    console.log("%c 3: "+Lc[e][1][ee][3][h][3], "color: orange");
    console.log("%c 4: "+Lc[e][1][(ee-1)][2], "color: orange");console.log(Number(Lc[e][1][ee][3][h][3])==Number(Lc[e][1][(ee-1)][2]))
if((Number(Lc[e][1][ee][3][h][2])==Number(e))&&(Number(Lc[e][1][ee][3][h][3])==Number(Lc[e][1][(ee-1)][2]))){
H = 1}}};console.log("%c H: "+H, "color: purple");
if(H!=1){
    JdoE(Lc[e][1][ee][0],Lc[e][1][ee][3],Lc[e][1][ee-1][0],Lc[e][1][ee-1][3],e,Lc[e][1][ee][2],e,Lc[e][1][ee-1][2],"E")
    this.Q+=1;this.ja[1]=0;Qdl+=1;console.log("%c SIM", "color: yellow");}
}}if(this.ja[1]==undefined){this.ja[1]=1;console.log("%c NÂO", "color: yellow");}}
    break 

    case(3)://Cima

    if(this.ja[2]==undefined){    console.log("%c Cima ", "color: green");
    if(e-1>=0){
            for(var ee2 in Lc[e-1][1]){
        if(Lc[e-1][1][ee2]!=undefined){
        if(Lc[e][1][ee][2]==Lc[e-1][1][ee2][2]){
for(var h in Lc[e][1][ee][3]){
if(Lc[e][1][ee][3][h]!=undefined){
    console.log("%c 1: "+Lc[e][1][ee][3][h][2], "color: orange");
    console.log("%c 2: "+(e-1), "color: orange");console.log("%c 1condição: "+Lc[e][1][ee][3][h][2]==(e-1), "color: orange")
    console.log("%c 3: "+Lc[e][1][ee][3][h][3], "color: orange");
    console.log("%c 4: "+Lc[(e-1)][1][ee2][2], "color: orange");console.log("%c 2condição: : "+Lc[e][1][ee][3][h][3]==Lc[(e-1)][1][ee2][2], "color: orange")
if((Number(Lc[e][1][ee][3][h][2])==Number((e-1)))&&(Number(Lc[e][1][ee][3][h][3])==Number(Lc[(e-1)][1][ee2][2]))){
H = 1}}};console.log("%c H: "+H, "color: purple");
if(H!=1){
        JdoE(Lc[e][1][ee][0],Lc[e][1][ee][3],Lc[e-1][1][ee2][0],Lc[e-1][1][ee2][3],e,Lc[e][1][ee][2],e-1,Lc[e-1][1][ee2][2],"C")
        this.Q+=1;this.ja[2]=0;Qdl+=1;console.log("%c SIM", "color: yellow");}
        }}}}if(this.ja[2]==undefined){this.ja[2]=1;console.log("%c NÂO", "color: yellow");}}
    break 

    case(4)://Baixo

    if(this.ja[3]==undefined){    console.log("%c Baixo ", "color: green");
    if(e+1<=Lc.length-1){
    for(var ee2 in Lc[e+1][1]){
if(Lc[e+1][1][ee2]!=undefined){
if(Lc[e][1][ee][2]==Lc[e+1][1][ee2][2]){
for(var h in Lc[e][1][ee][3]){
if(Lc[e][1][ee][3][h]!=undefined){
    console.log("%c 1: "+Lc[e][1][ee][3][h][2], "color: orange");
    console.log("%c 2: "+(e+1), "color: orange");console.log("%c 1condição: "+Lc[e][1][ee][3][h][2]==(e+1), "color: orange")
    console.log("%c 3: "+Lc[e][1][ee][3][h][3], "color: orange");
    console.log("%c 4: "+Lc[(e+1)][1][ee2][2], "color: orange");console.log("%c 2condição: : "+Lc[e][1][ee][3][h][3]==Lc[(e+1)][1][ee2][2], "color: orange")
if((Number(Lc[e][1][ee][3][h][2])==Number((e+1)))&&(Number(Lc[e][1][ee][3][h][3])==Number(Lc[(e+1)][1][ee2][2]))){
H = 1}}};console.log("%c H: "+H, "color: purple");
if(H!=1){
JdoE(Lc[e][1][ee][0],Lc[e][1][ee][3],Lc[e+1][1][ee2][0],Lc[e+1][1][ee2][3],e,Lc[e][1][ee][2],e+1,Lc[e+1][1][ee2][2],"B")
this.Q+=1;this.ja[3]=0;Qdl+=1;console.log("%c SIM", "color: yellow");}
}}}}if(this.ja[3]==undefined){this.ja[3]=1;console.log("%c NÂO", "color: yellow");}}
    break}

    
    }
    
    }
    function JdoE(xs,xl,ys,yl,xlinha,xi,ylinha,yi, D){
        //Xsprite; XjsonL; Xlinha que está; Xindex
        //Ysprite; YjsonL; Ylinha que está; Yindex
        this.XL=0;this.YL=0
        for(var rrr in yl){if(yl[rrr]==undefined){this.YL+=1}}
        for(var rrr in xl){if(xl[rrr]==undefined){this.XL+=1}}
        if(this.XL==4){this.XL=3};if(this.YL==4){this.YL=3}
        if(this.XL>this.YL){this.XL=this.YL};if(this.XL<this.YL){this.YL=this.XL}
        console.log("X: "+this.XL+" Y: "+this.YL)
        if(D=="D"){var d = "E"};if(D=="c"){var d = "B"}
        if(D=="E"){var d = "D"};if(D=="B"){var d = "C"}
        this.L
if(Cadeia.Ligação=="Insaturada"){this.L=Math.round(random(1,this.XL))}else{this.L=1}
if(this.XL>0){
for(var L=1;L<=this.L;L+=1){this.x=0;this.y=0;console.log(" L: "+L+" "+this.L)
for(var rr in xl){


        if(this.x==0&&xl[rr]==undefined){xl[rr]=[ys,L,Number(ylinha),yi,D];this.x=1;this.y=0;
            for(var r in yl){if(this.y==0&&yl[r]==undefined){yl[r]=[xs,L,Number(xlinha),xi,d];this.y=1}}
        }}
    }}
    console.log(QdP+" "+Qdl)
    }

    function teste(){
        var TDC=0
        for(var e in Lc){
        for(var ee in Lc[e][1]){
        for(var eee in Lc[e][1][ee][3]){if(Lc[e][1][ee][3][eee]!=undefined){
            TDC+=ProcurarCadeias([e,ee],[],[],Lc[e][1][ee][3][eee][2],Lc[e][1][ee][3][eee][3],"Aberta")
        }
    }}}
    if(TDC>0){console.log("Fechado")}else{console.log("Aberto")}
}

    function InformaçõesDaCadeia(){

        if(this.greeting==undefined){
this.greeting = createElement("h2");;this.greeting.size(width , height/16)
var message=""
for(var T in Cadeia){if(Cadeia[T]!=""){if(message!=""){message+=","};if(!(Cadeia.Ciclo=="Fechado"&&Cadeia.Disposição=="Ramificada")){message+=Cadeia[T]}}}
 
this.greeting.style('font-size', (50/(message.length/32))+'px')
      this.greeting.html(message)
      this.greeting.position(width/2-(((50/(message.length/32)))*10),height/2-height/2)}
    }
    //e=[];ee=[]
    function ProcurarCadeias(esP,eja,eeja,linha,index,tdC){
        this.a;this.n=0;this.prox=0;this.px;this.cont=0
        this.eja=eja;this.eeja=eeja
        for(var r in Lc[linha][1]){if(Lc[linha][1][r][2]==index){this.inx=r}}
        this.L=Lc[linha][1][this.inx][3]
        for(var l in this.L){
            if(L[l]!=undefined){
                for(var ej in eja){if(L[l][2]==this.eja[ej]&&L[l][3]==this.eeja[ej]){this.cont+=1}}//verifica se esse sprite ja foi verificado
        if(this.cont==0){

        if(this.n==0){//verifica, caso True, para tudo
            if(this.eja.length!=0){if(L[l][0]==Lc[esP[0]][1][esP[1]][0]){
                this.n=1;Lc[esP[0]][1][esP[1]][1]="AQUI"
            }
            //Caso False, passa pro proximo
            else{this.eja.push(linha);this.eeja.push(index)
                this.px=ProcurarCadeias(esP,this.eja,this.eeja,L[l][2],L[l][3]);if(this.px!=undefined&&this.px!=NaN){this.prox+=this.px}}}

            //O Primeiro não faz nada, so passa pro proximo:
        else{if(L[l][0]!=Lc[esP[0]][1][esP[1]][0]){
this.eja.push(linha);this.eeja.push(index)
this.px=ProcurarCadeias(esP,this.eja,this.eeja,L[l][2],L[l][3]);if(this.px!=undefined&&this.px!=NaN){this.prox+=this.px}
        }}
            
        }}}}
    return (Number(this.n + this.prox))}
        function Destroy(x,xx){
            this.e;this.ee
            if(x!=undefined){}
            else{
                for(var E in Lc){this.e=E
                    for(var EE in Lc[E][1]){this.ee=EE
                        this.N=0
                        for(var EEE in Lc[E][1][EE][3]){
if(Lc[E][1][EE][3][EEE]==undefined){
    this.N+=1
}
                        
                        if(this.N==4){
                            for(var e in Lc){for(var ee in Lc[e][1]){for(var eee in Lc[e][1][ee][3]){if(Lc[e][1][ee][3][eee]!=undefined){if(Lc[e][1][ee][3][eee]==Lc[this.e][1][this.ee][0]){
                                        Lc[e][1][ee][3][eee]=undefined
                                    }}}}}
                            Lc[E][1].splice(EE,1)
                        }}
                    }
                }
            }
        }