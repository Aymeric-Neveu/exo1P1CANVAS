var c = document.getElementById("monCanvas");
 var ctx = c.getContext("2d");
 // base de la maison
 // commencer le chemin avec beginPath
 ctx.beginPath();
  // defini le remplissage de couleur
 // début du trait avec moveTo
 ctx.moveTo(50,50);
 // faire un segment lineTo
 ctx.lineTo(50,200);
 ctx.lineTo(200,200);
 ctx.lineTo(200,50);
 // terminer le chemin avec closePath
 ctx.closePath();
 ctx.fillStyle="lightblue";
 ctx.fill();
  // fenetre1
 ctx.beginPath();
 ctx.moveTo(70,70);
 ctx.lineTo(70,100);
 ctx.lineTo(100,100);
 ctx.lineTo(100,70);
 ctx.closePath();
 ctx.fillStyle="grey";
 ctx.fill();
 // fenetre2
 ctx.beginPath();
 ctx.moveTo(150,70);
 ctx.lineTo(150,100);
 ctx.lineTo(180,100);
 ctx.lineTo(180,70);
 ctx.closePath();
 ctx.fillStyle="grey";
 ctx.fill();
 // porte
 ctx.beginPath();
 ctx.moveTo(100,200);
 ctx.lineTo(100,130);
 ctx.lineTo(150,130);
 ctx.lineTo(150,200);
 ctx.closePath();
 ctx.fillStyle="grey";
 ctx.fill();
 // toit
 ctx.beginPath();
 ctx.moveTo(50,50);
 ctx.lineTo(200,50);
 ctx.lineTo(125,5);
 ctx.closePath();
 ctx.fillStyle="maroon";
 ctx.fill();
