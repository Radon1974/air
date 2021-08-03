

function Raz() {
  for (let i = 1; i <= Nb_CanalSilovoe; i++) { CanalSilovoe[i].Etat = Zero, CanalSilovoe[i].Pressure = Zero }
  for (let i = 1; i <= Nb_Raspredelitel; i++) { for (let k = 0; k <= 6; k++) { Raspredelitel[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_Pamyat; i++) { for (let k = 1; k <= 4; k++) { Pamyat[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_Sequenceur; i++) { for (let k = 1; k <= 22; k++) { Sequenceur[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_CanalUpravlenie; i++) { CanalUpravlenie[i].Etat = Zero }
  for (let i = 1; i <= Nb_Datchik; i++) { for (let k = 1; k <= 3; k++) { Datchik[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_Gidrocilindr; i++) { for (let k = 1; k <= 2; k++) { Gidrocilindr[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_PeresechenieSilovoe; i++) { PeresechenieSilovoe[i].Etat = Zero }
  for (let i = 1; i <= Nb_PeresechenieUpravlenie; i++) { PeresechenieUpravlenie[i].Etat = Zero }
  for (let i = 1; i <= Nb_Kran; i++) { for (let k = 1; k <= 2; k++) { Kran[i].Etat_Ext[k] = Zero } }
  for (let i = 1; i <= Nb_Manometr; i++) { Manometr[i].Etat = Zero, Manometr[i].Pressure = Zero }
}

function Raz_Sila() {
  for (let i = 1; i <= Nb_CanalSilovoe; i++) { CanalSilovoe[i].Sila_Vyhod = Zero }
  for (let i = 1; i <= Nb_Raspredelitel; i++) { for (let k = 0; k <= 6; k++) { Raspredelitel[i].Sila_Vyhod[k] = Zero } }
  for (let i = 1; i <= Nb_Gidrocilindr; i++) { for (let k = 1; k <= 2; k++) { Gidrocilindr[i].Sila_Vyhod[k] = Zero } }
  for (let i = 1; i <= Nb_PeresechenieSilovoe; i++) { PeresechenieSilovoe[i].Sila_Vyhod = Zero }
  for (let i = 1; i <= Nb_Kran; i++) { for (let k = 1; k <= 2; k++) { Kran[i].Sila_Vyhod[k] = Zero } }
  for (let i = 1; i <= Nb_Manometr; i++) { Manometr[i].Sila_Vyhod = Zero }
  for (let i = 1; i <= Nb_Vyhod; i++) { Vyhod[i].Sila_Vyhod = Zero }
}

//Старый обнуление
function Raz_Staryj() {
  Staryj_Nb_Gidrocilindr = 0;
  Staryj_Nb_Raspredelitel = 0;
  Staryj_Nb_Datchik = 0;
  Staryj_Nb_Sila = 0;
  Staryj_Nb_UpravleniePitanie = 0;
  Staryj_Nb_PeresechenieUpravlenie = 0;
  Staryj_Nb_PeresechenieSilovoe = 0;
  Staryj_Nb_Commande = 0;
  Staryj_Nb_CanalUpravlenie = 0;
  Staryj_Nb_Canal = 0;
  Staryj_Nb_Pamyat = 0;
  Staryj_Nb_Sequenceur = 0;
  Staryj_Nb_Kran = 0;
  Staryj_Nb_Manometr = 0;
  Staryj_Nb_Vyhod = 0;
}

//Большое обнуление
function Super_Raz() {
  //var Pour = 1, K = 1;
  Raz_Staryj();
  Raz();

  for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {  //for (let Pour = 1; Pour <= Max_CanalSilovoe; Pour++) {
    for (let K = 1; K <= 2; K++) {
      CanalSilovoe[Pour].Etat = Zero;
      CanalSilovoe[Pour].Soedinenie[K].Tip = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {  //for (let Pour = 1; Pour <= Max_CanalUpravlenie; Pour++) {
    for (let K = 1; K <= 2; K++) {
      CanalUpravlenie[Pour].Etat = Bof;
      CanalUpravlenie[Pour].Soedinenie[K].Tip = 'Rien';
    }
  }

  for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) { for (let K = 0; K <= 6; K++) { Raspredelitel[Pour].Etat_Ext[K] = 0 } }  //for (let Pour = 1; Pour <= Max_Raspredelitel; Pour++) { for (let K = -1; K <= 5; K++) { Raspredelitel[Pour].Etat_Ext[K] = 0 } }
  for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { Datchik[Pour].Etat = 0 }  //for (let Pour = 1; Pour <= Max_Datchik; Pour++) { Datchik[Pour].Etat = 0 } 


  Nb_Gidrocilindr = 0;
  Nb_Raspredelitel = 0;
  Nb_Commande = 0;
  Nb_CanalSilovoe = 0;
  Nb_CanalUpravlenie = 0;
  Nb_SilovoePitanie = 0;
  Nb_Datchik = 0;
  Nb_UpravleniePitanie = 0;
  Nb_PeresechenieSilovoe = 0;
  Nb_PeresechenieUpravlenie = 0;
  Nb_Pamyat = 0;
  Nb_Sequenceur = 0;
  Nb_Kran = 0;
  Nb_Manometr = 0;
  Nb_Vyhod = 0;
  Nb_Texte = 0;

}

//Отображение времени
/*function Otobrazit_Temps(X, Y, Go) { //X,Y - координаты
  var dim = 18;
  var h = 0, m = 0;
  // var heure = 0;

  //heure = frac(time) * 24;
  h = hours; //h = round(int(heure));
  m = minutes; //m = round((frac(heure) * 60));
  if (h >= 12) (h = h - 12);
  if ((h != Heur) || (m != Minute) || Go) {
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Heur = h;
    Minute = m;
    Couleur('#008000');
    Ligne(X, Y, X + 2 * dim / 3 * Math.cos(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2), Y - 2 * dim / 3 * Math.sin(-(Heur * 60 + Minute) * Math.PI / 360 + Math.PI / 2));
    Ligne(X, Y, X + dim * Math.cos(-Minute * Math.PI / 30 + Math.PI / 2), Y - dim * Math.sin(-Minute * Math.PI / 30 + Math.PI / 2));
    Cercle(X, Y, dim + 2);
    NPave(X, Y, '#008000');
  }
}*/



//*************Рисование элементов пневматики*************

//Отображение пружины горизонтальной
function Otobrazit_Pruzhina(X, Y, XFin, Hauteur, Pravyj) {
  intervalle = (XFin - X) / 3;
  if (Pravyj) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (var Pour = 0; Pour < 3; Pour++) {
    Ligne(X + Signe * Pour * intervalle, Y - Hauteur / 2, X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2);
    Ligne(X + Signe * (Pour + 0.5) * intervalle, Y + Hauteur / 2, X + Signe * (Pour + 1) * intervalle, Y - Hauteur / 2);
  }
}

//Отображение пружины вертикальной
function Otobrazit_Pruzhina_Vertical(X, Y, YFin, Largeur, Bas) {
  intervalle = (YFin - Y) / 3;
  if (Bas) {
    Signe = 1;
  } else {
    Signe = -1;
  }

  for (let Pour = 0; Pour < 3; Pour++) {
    Ligne(X - Largeur / 2, Y + Signe * Pour * intervalle, X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle);
    Ligne(X + Largeur / 2, Y + Signe * (Pour + 0.5) * intervalle, X - Largeur / 2, Y + Signe * (Pour + 1) * intervalle);
  }
}

//Создать секвенсер
function Sozdat_Sequenceur(XE, YE, Combien_Etape) { //XE,YE - координаты, Combien_Etape - 
  //var Pour = 0;

  Nb_Sequenceur++;
  NewSequenceur(Nb_Sequenceur);
  Sequenceur[Nb_Sequenceur].X = XE;
  Sequenceur[Nb_Sequenceur].Y = YE;
  Sequenceur[Nb_Sequenceur].Combien = Combien_Etape;

  for (let Pour = 1; Pour <= 8; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X + (Pour - 1 / 4) * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtX[Pour + 8] = Sequenceur[Nb_Sequenceur].ExtX[Pour];
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + 5 / 4 * SLargeur - SLargeur / 2;
    Sequenceur[Nb_Sequenceur].ExtY[Pour + 8] = Sequenceur[Nb_Sequenceur].Y - 1 / 4 * SLargeur - SLargeur / 2;
  }
  for (let Pour = 17; Pour <= 20; Pour++) {
    Sequenceur[Nb_Sequenceur].ExtX[Pour] = Sequenceur[Nb_Sequenceur].X - 1 / 4 * SLargeur;
    Sequenceur[Nb_Sequenceur].ExtY[Pour] = Sequenceur[Nb_Sequenceur].Y + (Pour - 16) * SLargeur / 5 - SLargeur / 2;
  }

  Sequenceur[Nb_Sequenceur].ExtX[21] = Sequenceur[Nb_Sequenceur].X + (Sequenceur[Nb_Sequenceur].Combien + 3 / 4) * SLargeur;
  Sequenceur[Nb_Sequenceur].ExtX[22] = Sequenceur[Nb_Sequenceur].ExtX[21];
  Sequenceur[Nb_Sequenceur].ExtY[21] = Sequenceur[Nb_Sequenceur].ExtY[17];
  Sequenceur[Nb_Sequenceur].ExtY[22] = Sequenceur[Nb_Sequenceur].ExtY[20];
  Sequenceur[Nb_Sequenceur].Etat = 0;
}

//Отображение состояния секвенсера
function Otobrazit_Etat_Sequenceur(Numero) { //Numero - номер
  //var Pour = 0;

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    if (Pour == Sequenceur[Numero].Etat) {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#000000')
    }
    else {
      NPave(Sequenceur[Numero].X + (Pour - 1) * SLargeur + SLargeur / 2, Sequenceur[Numero].Y - SLargeur / 4, '#FFFFFF')
    }
  }
}

//Отображение секвенсера
function Otobrazit_Sequenceur(Numero, Blanc) { //Numero - номер, Blanc - отображать или нет
  //var Pour = 0;
  var XX = 0;
  var YY = 0;

  //if SVG then form1.memo1.lines.Add('<g>');

  Couleur('#000000');
  Rect(Sequenceur[Numero].X, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 2);
  Rect(Sequenceur[Numero].X + Sequenceur[Numero].Combien * SLargeur + SLargeur / 4, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 2 + Sequenceur[Numero].Combien * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);

  for (let Pour = 1; Pour <= Sequenceur[Numero].Combien; Pour++) {
    Rect(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y - SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y + SLargeur / 2);
    XX = Sequenceur[Numero].X + 3 * SLargeur / 4 + (Pour - 1) * SLargeur;
    Ligne(XX, Sequenceur[Numero].Y + SLargeur / 2, XX, Sequenceur[Numero].Y + SLargeur / 2 + SLargeur / 4);
    Ligne(XX, Sequenceur[Numero].Y - SLargeur / 2, XX, Sequenceur[Numero].Y - SLargeur / 2 - SLargeur / 4);
    Pointille(Sequenceur[Numero].X + SLargeur / 4 + (Pour - 1) * SLargeur, Sequenceur[Numero].Y + SLargeur / 2, Sequenceur[Numero].X + SLargeur / 4 + Pour * SLargeur, Sequenceur[Numero].Y - SLargeur / 2);
  }

  for (let Pour = 1; Pour <= 4; Pour++) {
    YY = Pour * SLargeur / 5 - SLargeur / 2;
    Ligne(Sequenceur[Numero].X, Sequenceur[Numero].Y + YY, Sequenceur[Numero].X - SLargeur / 4, Sequenceur[Numero].Y + YY);
  }

  XX = SLargeur / 2 + SLargeur * Sequenceur[Numero].Combien;
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + SLargeur / 5 - SLargeur / 2);
  Ligne(Sequenceur[Numero].X + XX, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2, Sequenceur[Numero].X + XX + SLargeur / 4, Sequenceur[Numero].Y + 4 * SLargeur / 5 - SLargeur / 2);

  Otobrazit_Etat_Sequenceur(Numero);
  Couleur('#000000');
  //if SVG then form1.memo1.lines.Add('</g>');
}



//Создать гидроцилиндр
function Sozdat_Gidrocilindr(XX, YY, Model) { //XX - координата  X, YY - координата Y, Model - тип гидроцилиндра
  Nb_Gidrocilindr++;
  NewGidrocilindr(Nb_Gidrocilindr);
  Gidrocilindr[Nb_Gidrocilindr].X = XX;
  Gidrocilindr[Nb_Gidrocilindr].Y = YY;
  if (Model != 'Double_V') {
    Gidrocilindr[Nb_Gidrocilindr].EntreeX[1] = XX + L_Soedinenie / 2;
    Gidrocilindr[Nb_Gidrocilindr].EntreeY[1] = YY + VHauteur / 2 + VCanal;
    Gidrocilindr[Nb_Gidrocilindr].EntreeX[2] = XX - L_Soedinenie / 2 + VLargeur;
    Gidrocilindr[Nb_Gidrocilindr].EntreeY[2] = YY + VHauteur / 2 + VCanal;
  } else {
    Gidrocilindr[Nb_Gidrocilindr].EntreeX[1] = XX + VHauteur / 2 + VCanal;
    Gidrocilindr[Nb_Gidrocilindr].EntreeY[1] = YY - L_Soedinenie / 2;
    Gidrocilindr[Nb_Gidrocilindr].EntreeX[2] = XX + VHauteur / 2 + VCanal;
    Gidrocilindr[Nb_Gidrocilindr].EntreeY[2] = YY + L_Soedinenie / 2 - VLargeur;
  }
  Gidrocilindr[Nb_Gidrocilindr].Tige = 2;
  Gidrocilindr[Nb_Gidrocilindr].Modele = Model;
}

//Отображение гидроцилиндра
function Otobrazit_Gidrocilindr(Numero, C, Blanc) {  //Numero - номер гидроцилиндра, C - цвет, Blanc - отображать или нет
  var Coul = '';

  //Отображение гидроцилиндра
  function Otobrazit_Simple(Amortissement) {
    var Amor = 0;

    if (Amortissement) { Amor = VAmor } else { Amor = 0 }

    //With Gidrocilindr[Numero] Do

    //if !SVG then

    if (Gidrocilindr[Numero].Modele != 'Double_V') {
      ctx.setLineDash([5, 3]);
      Rect(Gidrocilindr[Numero].X + (Maxtige - 1) * L_Soedinenie + VL_Tige + L_Soedinenie, Gidrocilindr[Numero].Y - VH_Soedinenie, Gidrocilindr[Numero].X + (Maxtige - 1) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie, Gidrocilindr[Numero].Y + VH_Soedinenie);
      Rect(Gidrocilindr[Numero].X + (Mintige - 1) * L_Soedinenie + VL_Tige + L_Soedinenie, Gidrocilindr[Numero].Y - VH_Soedinenie, Gidrocilindr[Numero].X + (Mintige - 1) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie, Gidrocilindr[Numero].Y + VH_Soedinenie);
      ctx.setLineDash([]);
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VHauteur / 2, Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y + VHauteur / 2);
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y - VHauteur / 2);
    } else {
      ctx.setLineDash([5, 3]);
      Rect(Gidrocilindr[Numero].X - VH_Soedinenie, Gidrocilindr[Numero].Y - (Maxtige - 1) * L_Soedinenie - VL_Tige - L_Soedinenie, Gidrocilindr[Numero].X + VH_Soedinenie, Gidrocilindr[Numero].Y - (Maxtige - 1) * L_Soedinenie - VL_Tige - 2 * L_Soedinenie);
      Rect(Gidrocilindr[Numero].X - VH_Soedinenie, Gidrocilindr[Numero].Y - (Mintige - 1) * L_Soedinenie - VL_Tige - L_Soedinenie, Gidrocilindr[Numero].X + VH_Soedinenie, Gidrocilindr[Numero].Y - (Mintige - 1) * L_Soedinenie - VL_Tige - 2 * L_Soedinenie);
      ctx.setLineDash([]);
      Ligne(Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y, Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y - VLargeur);
      Ligne(Gidrocilindr[Numero].X - VHauteur / 2, Gidrocilindr[Numero].Y, Gidrocilindr[Numero].X - VHauteur / 2, Gidrocilindr[Numero].Y - VLargeur);
    }

    if (Gidrocilindr[Numero].Modele != 'Double_V') {
      Ligne(Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y - VH_Tige);
      Ligne(Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y + VHauteur / 2, Gidrocilindr[Numero].X + VLargeur, Gidrocilindr[Numero].Y + VH_Tige);
      Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie + L_Soedinenie, Gidrocilindr[Numero].Y + VHauteur / 2);
      Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie, Gidrocilindr[Numero].Y - Amor, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - Amor / 5, Gidrocilindr[Numero].Y + Amor);
      Rect(Gidrocilindr[Numero].X + Gidrocilindr[Numero].Tige * L_Soedinenie, Gidrocilindr[Numero].Y - Amor, Gidrocilindr[Numero].X + Gidrocilindr[Numero].Tige * L_Soedinenie + Amor / 5, Gidrocilindr[Numero].Y + Amor);
      Rect(Gidrocilindr[Numero].X + Gidrocilindr[Numero].Tige * L_Soedinenie + Amor / 5, Gidrocilindr[Numero].Y - VH_Tige, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie + VL_Tige + L_Soedinenie, Gidrocilindr[Numero].Y + VH_Tige);
      Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie + VL_Tige + L_Soedinenie, Gidrocilindr[Numero].Y - VH_Soedinenie, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie, Gidrocilindr[Numero].Y + VH_Soedinenie);
      Ligne(Gidrocilindr[Numero].X + L_Soedinenie / 2, Gidrocilindr[Numero].Y + VHauteur / 2, Gidrocilindr[Numero].X + L_Soedinenie / 2, Gidrocilindr[Numero].Y + VHauteur / 2 + VCanal);
      Ligne(Gidrocilindr[Numero].X + VLargeur - L_Soedinenie / 2, Gidrocilindr[Numero].Y + VHauteur / 2, Gidrocilindr[Numero].X - L_Soedinenie / 2 + VLargeur, Gidrocilindr[Numero].Y + VHauteur / 2 + VCanal);
    } else {
      Ligne(Gidrocilindr[Numero].X - VHauteur / 2, Gidrocilindr[Numero].Y - VLargeur, Gidrocilindr[Numero].X - VH_Tige, Gidrocilindr[Numero].Y - VLargeur);
      Ligne(Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y - VLargeur, Gidrocilindr[Numero].X + VH_Tige, Gidrocilindr[Numero].Y - VLargeur);
      Rect(Gidrocilindr[Numero].X - VHauteur / 2, Gidrocilindr[Numero].Y - (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie, Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y - (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - L_Soedinenie);
      Rect(Gidrocilindr[Numero].X - VH_Tige, Gidrocilindr[Numero].Y - Gidrocilindr[Numero].Tige * L_Soedinenie - Amor / 5, Gidrocilindr[Numero].X + VH_Tige, Gidrocilindr[Numero].Y - (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige - L_Soedinenie);
      Rect(Gidrocilindr[Numero].X - VH_Soedinenie, Gidrocilindr[Numero].Y - (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige - L_Soedinenie, Gidrocilindr[Numero].X + VH_Soedinenie, Gidrocilindr[Numero].Y - (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige - 2 * L_Soedinenie);
      Ligne(Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y - L_Soedinenie / 2, Gidrocilindr[Numero].X + VHauteur / 2 + VCanal, Gidrocilindr[Numero].Y - L_Soedinenie / 2);
      Ligne(Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y - VLargeur + L_Soedinenie / 2, Gidrocilindr[Numero].X + VHauteur / 2 + VCanal, Gidrocilindr[Numero].Y + L_Soedinenie / 2 - VLargeur);
    }

  }

  //  if SVG then form1.memo1.lines.Add('<g>');
  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный




  switch (Gidrocilindr[Numero].Modele) {
    case 'Simple':
    case 'Double2':
    case 'Double_A':
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VHauteur / 2);
      Otobrazit_Simple(Gidrocilindr[Numero].Modele == 'Double_A');
      if (Gidrocilindr[Numero].Modele == 'Simple') {
        Triangle(Gidrocilindr[Numero].X - L_Soedinenie / 2 + VLargeur, Gidrocilindr[Numero].Y + VHauteur / 2 + VCanal);
      }
      break;

    case 'Simple_R':
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VHauteur / 2);
      Otobrazit_Simple(false);
      Otobrazit_Pruzhina(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie + L_Soedinenie, Gidrocilindr[Numero].Y, Gidrocilindr[Numero].X + VLargeur, VHauteur / 1.5, A_Pravyj);
      Triangle(Gidrocilindr[Numero].X - L_Soedinenie / 2 + VLargeur, Gidrocilindr[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'R_Simple':
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VHauteur / 2);
      Gidrocilindr[Numero].Tige = 11 - Gidrocilindr[Numero].Tige;
      Otobrazit_Simple(false);
      Otobrazit_Pruzhina(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie, VHauteur / 1.5, A_Pravyj);
      Gidrocilindr[Numero].Tige = 11 - Gidrocilindr[Numero].Tige;
      Triangle(Gidrocilindr[Numero].X + L_Soedinenie / 2, Gidrocilindr[Numero].Y + VHauteur / 2 + VCanal);
      break;

    case 'Double_T':
    case 'Double_T_A':
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VHauteur / 2, Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y - VH_Tige);
      Ligne(Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VHauteur / 2, Gidrocilindr[Numero].X, Gidrocilindr[Numero].Y + VH_Tige);
      Otobrazit_Simple(Gidrocilindr[Numero].Modele == 'Double_T_A');
      if (Gidrocilindr[Numero].Modele == 'Double_T_A') {
        Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige, Gidrocilindr[Numero].Y - VH_Tige, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VAmor / 5, Gidrocilindr[Numero].Y + VH_Tige);
      } else {
        Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige, Gidrocilindr[Numero].Y - VH_Tige, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie, Gidrocilindr[Numero].Y + VH_Tige);
        Rect(Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - L_Soedinenie - VL_Tige, Gidrocilindr[Numero].Y - VH_Soedinenie, Gidrocilindr[Numero].X + (Gidrocilindr[Numero].Tige - 1) * L_Soedinenie - VL_Tige, Gidrocilindr[Numero].Y + VH_Soedinenie);
      }
      break;

    case 'Double_V':
      Ligne(Gidrocilindr[Numero].X - VHauteur / 2, Gidrocilindr[Numero].Y, Gidrocilindr[Numero].X + VHauteur / 2, Gidrocilindr[Numero].Y);
      Otobrazit_Simple(Gidrocilindr[Numero].Modele == 'Double_A');
      break;

  }

  if (!Blanc) {
    if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF0000' }

    NPavepetit(Gidrocilindr[Numero].EntreeX[1], Gidrocilindr[Numero].EntreeY[1], Coul);
    if (Gidrocilindr[Numero].Modele == 'Double2' || Gidrocilindr[Numero].Modele == 'Double_V') {
      NPavepetit(Gidrocilindr[Numero].EntreeX[2], Gidrocilindr[Numero].EntreeY[2], Coul)
    }
  }

  Couleur('#FFFFFF');


}





//Создать комманду
function Sozdat_Commande(XX, YY, Model) {
  Nb_Commande++;
  NewCommande(Nb_Commande);
  Commande[Nb_Commande].X = XX;
  Commande[Nb_Commande].Y = YY;
  Commande[Nb_Commande].Modele = Model;
}

//Отобразить комманду
function Otobrazit_Commande(Numero, C, Blanc, Deca, Etat) { //Numero - номер команды, C - цвет, Blanc - отображать или нет, Deca - смещение, Etat - 0 или 1
  var Largeur = 0, Z = 0;

  //Отобразить Левый толкатель
  function Otobrazit_Tolkatel_Levyj() {
    Ligne(Z, Commande[Numero].Y - VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y - VHauteur / 8);
    Ligne(Z, Commande[Numero].Y + VHauteur / 8, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 8);
    Ligne(Z - Largeur / 6, Commande[Numero].Y - VHauteur / 6, Z - Largeur / 6, Commande[Numero].Y + VHauteur / 6);
    Arc_De_Cercle(Z - Largeur / 6, Commande[Numero].Y, 270, 90, VHauteur / 6);
  }

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный

  Z = Commande[Numero].X + Deca;
  switch (Commande[Numero].Modele) {
    case 'Pila_Pravyj': //Прямая пила
      Largeur = 4 / 5 * DLargeur;
      Ligne(Z, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y + 4 / 5 * DLargeur / 10, Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 4 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 3 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 1 / 2 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 2 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z + 3 / 10 * 4 / 5 * DLargeur, Commande[Numero].Y, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      Ligne(Z, Commande[Numero].Y - 4 / 5 * DLargeur / 10, Z + 1 / 5 * 4 / 5 * DLargeur, Commande[Numero].Y - 4 / 5 * DLargeur / 10);
      break;
    case 'Tolkatel_Levyj': //Левый Толкатель
      Largeur = VLargeur;
      Otobrazit_Tolkatel_Levyj();
      break;
    case 'Pruzhina_Pravyj':  //Прямая Пружина
      Largeur = DLargeur / 2;
      if (Etat == 1) { Otobrazit_Pruzhina(Z, Commande[Numero].Y, Z + 2 * Largeur, VHauteur / 4, A_Pravyj) }
      else { Otobrazit_Pruzhina(Z, Commande[Numero].Y, Z + Largeur / 2, VHauteur / 4, A_Pravyj) }
      break;
    case 'Upravlenie_Levyj':  //Левый Пилот
      Rect(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      Ligne(Z - DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z - DLargeur / 3, Commande[Numero].Y);
      break;
    case 'Upravlenie_Pravyj':  //Правый Пилот
      Rect(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z, Commande[Numero].Y + DLargeur / 6);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y - DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      Ligne(Z + DLargeur / 2, Commande[Numero].Y + DLargeur / 6, Z + DLargeur / 3, Commande[Numero].Y);
      break;
  }

  Couleur('#000000'); //Черный
}




//Создать память
function Sozdat_Pamyat(XC, YC, L_Etat) {  //XC,YC - координаты, L_Etat - 0 или 1
  Nb_Pamyat++;
  NewPamyat(Nb_Pamyat);
  Pamyat[Nb_Pamyat].X = XC;
  Pamyat[Nb_Pamyat].Y = YC;
  Pamyat[Nb_Pamyat].Etat = L_Etat;
  Pamyat[Nb_Pamyat].ExtX[1] = Pamyat[Nb_Pamyat].X - DPamyat * 5 / 4;
  Pamyat[Nb_Pamyat].ExtY[1] = Pamyat[Nb_Pamyat].Y + 1 / 4 * DPamyat;
  Pamyat[Nb_Pamyat].ExtX[2] = Pamyat[Nb_Pamyat].ExtX[1];
  Pamyat[Nb_Pamyat].ExtY[2] = Pamyat[Nb_Pamyat].Y + 3 / 4 * DPamyat;
  Pamyat[Nb_Pamyat].ExtX[3] = Pamyat[Nb_Pamyat].X + DPamyat * 5 / 4;
  Pamyat[Nb_Pamyat].ExtY[3] = Pamyat[Nb_Pamyat].ExtY[1];
  Pamyat[Nb_Pamyat].ExtX[4] = Pamyat[Nb_Pamyat].X;
  Pamyat[Nb_Pamyat].ExtY[4] = Pamyat[Nb_Pamyat].Y + 5 / 4 * DPamyat;
}

//Отобразить память
function Otobrazit_Pamyat(Numero, C, Blanc) {  //Numero номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var Pour = 0;


  Couleur(C);

  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  Rect(Pamyat[Numero].X - DPamyat, Pamyat[Numero].Y, Pamyat[Numero].X + DPamyat, Pamyat[Numero].Y + DPamyat);
  Pointille(Pamyat[Numero].X - DPamyat, Pamyat[Numero].Y + DPamyat / 2, Pamyat[Numero].X + DPamyat, Pamyat[Numero].Y + DPamyat / 2);
  Ligne(Pamyat[Numero].X - DPamyat * 5 / 4, Pamyat[Numero].Y + DPamyat / 4, Pamyat[Numero].X - DPamyat, Pamyat[Numero].Y + DPamyat / 4);
  Ligne(Pamyat[Numero].X + DPamyat * 5 / 4, Pamyat[Numero].Y + DPamyat / 4, Pamyat[Numero].X + DPamyat, Pamyat[Numero].Y + DPamyat / 4);
  Ligne(Pamyat[Numero].X - DPamyat * 5 / 4, Pamyat[Numero].Y + DPamyat * 3 / 4, Pamyat[Numero].X - DPamyat, Pamyat[Numero].Y + DPamyat * 3 / 4);
  Ligne(Pamyat[Numero].X, Pamyat[Numero].Y + DPamyat, Pamyat[Numero].X, Pamyat[Numero].Y + DPamyat * 5 / 4);

  if (!Blanc) { for (let Pour = 1; Pour <= 4; Pour++) { NPavepetit(Pamyat[Numero].ExtX[Pour], Pamyat[Numero].ExtY[Pour], Coul) } }
  if (Pamyat[Numero].Etat == 1) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Pamyat[Numero].X + DPamyat / 2, Pamyat[Numero].Y + 3 / 4 * DPamyat, Coul);
  if (Pamyat[Numero].Etat == 2) { Coul = '#000000' } else { Coul = '#FFFFFF' }
  NPave(Pamyat[Numero].X + DPamyat / 2, Pamyat[Numero].Y + 1 / 4 * DPamyat, Coul);

  Couleur('#000000'); //Черный

}







//Создать датчик
function Sozdat_Datchik(XC, YC, Modelec, L_Etat) {  //XC,YC - координаты, Modelec - модель, L_Etat - 1 (несжата) или 2 (сжата)
  Nb_Datchik++;
  NewDatchik(Nb_Datchik);
  Datchik[Nb_Datchik].X = XC;
  Datchik[Nb_Datchik].Y = YC;
  if (Modelec != 'A_Galet_V') {

    switch (Modelec) {
      case 'Et':
      case 'Ou':
      case 'Inhibition':
        Datchik[Nb_Datchik].ExtX[1] = Datchik[Nb_Datchik].X - 3 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtY[1] = Datchik[Nb_Datchik].Y + 1 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtX[2] = Datchik[Nb_Datchik].ExtX[1];
        Datchik[Nb_Datchik].ExtY[2] = Datchik[Nb_Datchik].Y + 3 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtX[3] = Datchik[Nb_Datchik].X + 3 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtY[3] = Datchik[Nb_Datchik].ExtY[2];
        break;
      default:
        Datchik[Nb_Datchik].ExtX[1] = Datchik[Nb_Datchik].X - CLargeur / 2;
        Datchik[Nb_Datchik].ExtY[1] = Datchik[Nb_Datchik].Y + 5 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtX[2] = Datchik[Nb_Datchik].ExtX[1];
        Datchik[Nb_Datchik].ExtY[2] = Datchik[Nb_Datchik].Y + 7 / 4 * CLargeur;
        Datchik[Nb_Datchik].ExtX[3] = Datchik[Nb_Datchik].X + CLargeur / 2;
        Datchik[Nb_Datchik].ExtY[3] = Datchik[Nb_Datchik].ExtY[2];
    }

  }
  else {
    Datchik[Nb_Datchik].ExtX[1] = Datchik[Nb_Datchik].X + 5 / 4 * CLargeur;
    Datchik[Nb_Datchik].ExtY[1] = Datchik[Nb_Datchik].Y + 1 / 2 * CLargeur;
    Datchik[Nb_Datchik].ExtX[2] = Datchik[Nb_Datchik].X + 7 / 4 * CLargeur;
    Datchik[Nb_Datchik].ExtY[2] = Datchik[Nb_Datchik].ExtY[1];
    Datchik[Nb_Datchik].ExtX[3] = Datchik[Nb_Datchik].ExtX[2];
    Datchik[Nb_Datchik].ExtY[3] = Datchik[Nb_Datchik].Y - 1 / 2 * CLargeur;
  }
  Datchik[Nb_Datchik].Modele = Modelec;
  Datchik[Nb_Datchik].Etat = L_Etat;
}

//Отобразить датчик
function Otobrazit_Datchik(Numero, C, Blanc) {  //Numero- номер, C - цвет, Blanc - true или false
  var Decay = 0;
  //Остановка
  function Stop(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + CLargeur / 5, Y);
    Ligne(X + CLargeur / 5, Y + CLargeur / 7, X + CLargeur / 5, Y - CLargeur / 7);
  }
  //Остановка вертикальная
  function Stop_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - CLargeur / 5);
    Ligne(X + CLargeur / 7, Y - CLargeur / 5, X - CLargeur / 7, Y - CLargeur / 5);
  }
  //Высокий толкатель
  function Tolkatel_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 6, Y - DLargeur / 3, X - DLargeur / 6, Y - DLargeur / 3);
    Arc_De_Cercle(X, Y - DLargeur / 3, 0, 180, DLargeur / 6);
  }
  //Низкий толкатель
  function Tolkatel_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 6, Y - DLargeur / 6, X - DLargeur / 6, Y - DLargeur / 6);
    Arc_De_Cercle(X, Y - DLargeur / 6, 0, 180, DLargeur / 6);
  }
  //Высокий ролик
  function Galet_Haut(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 3);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 3);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 3 - DLargeur / 8, DLargeur / 12);
  }
  //Высокий Ролик вертикальный
  function Galet_Haut_V(X, Y) {  //X,Y - координаты
    Ligne(X, Y + DLargeur / 11, X - DLargeur / 3, Y + DLargeur / 11);
    Ligne(X, Y - DLargeur / 11, X - DLargeur / 3, Y - DLargeur / 11);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 6);
    Cercle(X - DLargeur / 3 - DLargeur / 8, Y, DLargeur / 12);
  }
  //Высокий толкатель
  function Galet_Bas(X, Y) {  //X,Y - координаты
    Ligne(X - DLargeur / 11, Y, X - DLargeur / 11, Y - DLargeur / 6);
    Ligne(X + DLargeur / 11, Y, X + DLargeur / 11, Y - DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 6);
    Cercle(X, Y - DLargeur / 6 - DLargeur / 8, DLargeur / 12);
  }
  //Квадратный
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X - CLargeur / 2, Y, X + CLargeur / 2, Y + CLargeur);
  }
  //Левый квадрат
  function Carre_Levyj(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 - 1 / 8) * CLargeur);
    Ligne(X + CLargeur / 2, Y + 3 / 4 * CLargeur, X + CLargeur / 4, Y + (3 / 4 + 1 / 8) * CLargeur);
    Stop(X - CLargeur / 2, Y + 1 / 4 * CLargeur);
  }
  //Правый квадрат
  function Carre_Pravyj(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 4, Y + 1 / 4 * CLargeur);
    Ligne(X - CLargeur / 2, Y + 1 / 4 * CLargeur, X - CLargeur / 3, Y + (1 / 4 + 1 / 5) * CLargeur);
    Stop(X - CLargeur / 2, Y + 3 / 4 * CLargeur);
  }
  //Пила
  function Pila(X, Y) {  //X,Y - координаты
    Ligne(X - CLargeur / 10, Y, X - CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X - CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 4 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 4 / 5 * CLargeur, X + CLargeur / 10, Y + 3 / 5 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 3 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 1 / 2 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 2 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X, Y + 3 / 10 * CLargeur);
    Ligne(X + CLargeur / 10, Y + 1 / 5 * CLargeur, X + CLargeur / 10, Y);
  }
  //Изменение шрифта
  function Change_taille() {
    ctx.font = (Math.round(8 * Faktor) + 4) + 'px Arial';
    /*if (Faktor > 2.6) { ctx.font = "bold 42pt Arial" }
    else {
      if (Faktor > 1.9) { ctx.font = "bold 18pt Arial" }
      else {
        if (Faktor >= 1) { ctx.font = "bold 10pt Arial" }
      }
    }*/
  }
  //Клетка
  function Cellule_Et(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 2), '&');
    ctx.font = "bold 8pt Arial";
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  //Замедление клетки
  function Cellule_Inhibition(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Otxy(Math.round(X - CLargeur / 4), Math.round(Y + CLargeur / 2), '&');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2 - CLargeur / 5, Y + 3 / 4 * CLargeur);
    Cercle(X - CLargeur / 2 - CLargeur / 10, Y + 3 / 4 * CLargeur, CLargeur / 10);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }

  function Cellule_Ou(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Change_taille();
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2, Y + CLargeur * 2 / 3, X - CLargeur / 4, Y + CLargeur / 2);
    Ligne(X - CLargeur / 2 + 2 + 2, Y + CLargeur * 2 / 3 + 2, X - CLargeur / 4 + 2, Y + CLargeur / 2 + 2);
    Otxy(Math.round(X - CLargeur / 4 + 4), Math.round(Y + CLargeur / 2), '1');
    Ligne(X - 3 / 4 * CLargeur, Y + 1 / 4 * CLargeur, X - CLargeur / 2, Y + 1 / 4 * CLargeur);
    Ligne(X - 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X - CLargeur / 2, Y + 3 / 4 * CLargeur);
    Ligne(X + 3 / 4 * CLargeur, Y + 3 / 4 * CLargeur, X + CLargeur / 2, Y + 3 / 4 * CLargeur);
  }



  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  switch (Datchik[Numero].Modele) {

    case 'Inhibition': Cellule_Inhibition(Datchik[Numero].X, Datchik[Numero].Y);
      break;
    case 'Et': Cellule_Et(Datchik[Numero].X, Datchik[Numero].Y);
      break;
    case 'Ou': Cellule_Ou(Datchik[Numero].X, Datchik[Numero].Y);
      break;
    default:
      if (Datchik[Numero].Modele != 'A_Galet_V') {
        if (Datchik[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Carre_Levyj(Datchik[Numero].X, Datchik[Numero].Y + Decay);
        Carre_Pravyj(Datchik[Numero].X, Datchik[Numero].Y + CLargeur + Decay);

        if ((Datchik[Numero].Modele == 'A_Tolkatel') || (Datchik[Numero].Modele == 'A_Tolkatel_Bistable')) { Tolkatel_Haut(Datchik[Numero].X, Datchik[Numero].Y + Decay) }
        else { Galet_Haut(Datchik[Numero].X, Datchik[Numero].Y + Decay) }

        if (Datchik[Numero].Modele == 'A_Tolkatel_Bistable') { Pila(Datchik[Numero].X, Datchik[Numero].Y + 2 * CLargeur + Decay) }
        else {
          if (Datchik[Numero].Etat == 1) { Otobrazit_Pruzhina_Vertical(Datchik[Numero].X, Datchik[Numero].Y + 2 * CLargeur + Decay, Datchik[Numero].Y + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
          else { Otobrazit_Pruzhina_Vertical(Datchik[Numero].X, Datchik[Numero].Y + 2 * CLargeur + Decay, Datchik[Numero].Y + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
        }
      }
      else {
        if (Datchik[Numero].Etat == 2) { Decay = CLargeur } else { Decay = 0 }

        Rect(Datchik[Numero].X + Decay, Datchik[Numero].Y - CLargeur / 2, Datchik[Numero].X + CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2);
        Rect(Datchik[Numero].X + CLargeur + Decay, Datchik[Numero].Y - CLargeur / 2, Datchik[Numero].X + CLargeur + CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2);
        Galet_Haut_V(Datchik[Numero].X + Decay, Datchik[Numero].Y);
        Stop_V(Datchik[Numero].X + CLargeur / 4 + Decay, Datchik[Numero].Y + CLargeur / 2);
        Stop_V(Datchik[Numero].X + CLargeur + 3 * CLargeur / 4 + Decay, Datchik[Numero].Y + CLargeur / 2);
        Ligne(Datchik[Numero].X + 3 / 4 * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 2, Datchik[Numero].X + 3 / 4 * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2);
        Ligne(Datchik[Numero].X + 3 / 4 * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 2, Datchik[Numero].X + (3 / 4 + 1 / 8) * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 4);
        Ligne(Datchik[Numero].X + 3 / 4 * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 2, Datchik[Numero].X + (3 / 4 - 1 / 8) * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 4);
        Ligne(Datchik[Numero].X + 5 / 4 * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2, Datchik[Numero].X + 7 / 4 * CLargeur + Decay, Datchik[Numero].Y - CLargeur / 2);
        Ligne(Datchik[Numero].X + 5 / 4 * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2, Datchik[Numero].X + 5 / 4 * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 4);
        Ligne(Datchik[Numero].X + 5 / 4 * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 2, Datchik[Numero].X + (5 / 4 + 1 / 5) * CLargeur + Decay, Datchik[Numero].Y + CLargeur / 3);

        if (Datchik[Numero].Etat == 1) { Otobrazit_Pruzhina(Datchik[Numero].X + 2 * CLargeur + Decay, Datchik[Numero].Y, Datchik[Numero].X + 2 * CLargeur + 3 * CLargeur / 2 + Decay, CLargeur / 2, true) }
        else { Otobrazit_Pruzhina(Datchik[Numero].X + 2 * CLargeur + Decay, Datchik[Numero].Y, Datchik[Numero].X + 2 * CLargeur + CLargeur / 2 + Decay, CLargeur / 2, true) }
      }
      break;
  }
  Couleur('#000000');

}






//Создать распределитель
function Sozdat_Raspredelitel(XC, YC, Modelec, Commande1, Commande2, L_Etat) {
  //XC,YC - координаты, Modelec - модель, Commande1,Commande2 - тип толкателя, L_Etat - 
  Nb_Raspredelitel++;
  NewRaspredelitel(Nb_Raspredelitel);

  Raspredelitel[Nb_Raspredelitel].X = XC;
  Raspredelitel[Nb_Raspredelitel].Y = YC;

  switch (Modelec) {
    case '_4_3':
    case '_5_3':
      Raspredelitel[Nb_Raspredelitel].ExtX[6] = XC - DLargeur / 2 - DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtX[0] = XC + 4 * DLargeur + DLargeur / 2;
      break;
    default:
      Raspredelitel[Nb_Raspredelitel].ExtX[6] = XC - DLargeur / 2;
      Raspredelitel[Nb_Raspredelitel].ExtX[0] = XC + 3 * DLargeur + DLargeur / 2;
  }

  Raspredelitel[Nb_Raspredelitel].ExtY[6] = YC;
  Raspredelitel[Nb_Raspredelitel].ExtY[0] = YC;

  Raspredelitel[Nb_Raspredelitel].ExtX[2] = Raspredelitel[Nb_Raspredelitel].X + 9 / 5 * DLargeur;
  Raspredelitel[Nb_Raspredelitel].ExtY[2] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
  Raspredelitel[Nb_Raspredelitel].ExtX[3] = Raspredelitel[Nb_Raspredelitel].X + 9 / 5 * DLargeur;
  Raspredelitel[Nb_Raspredelitel].ExtY[3] = Raspredelitel[Nb_Raspredelitel].Y - DLargeur / 2;
  Raspredelitel[Nb_Raspredelitel].ExtX[4] = Raspredelitel[Nb_Raspredelitel].X + 6 / 5 * DLargeur;
  Raspredelitel[Nb_Raspredelitel].ExtY[4] = Raspredelitel[Nb_Raspredelitel].Y - DLargeur / 2;

  switch (Modelec) {
    case '_3_2':
    case '_4_2':
    case '_4_3':
      Raspredelitel[Nb_Raspredelitel].ExtX[1] = Raspredelitel[Nb_Raspredelitel].X + 6 / 5 * DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtY[1] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      Raspredelitel[Nb_Raspredelitel].ExtX[5] = Raspredelitel[Nb_Raspredelitel].X + 1.5 * DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtY[5] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      break;
    case '_5_2':
    case '_5_3':
      Raspredelitel[Nb_Raspredelitel].ExtX[5] = Raspredelitel[Nb_Raspredelitel].X + 6 / 5 * DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtY[5] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      Raspredelitel[Nb_Raspredelitel].ExtX[1] = Raspredelitel[Nb_Raspredelitel].X + 1.5 * DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtY[1] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      break;
    case '_2_2':
    case '_2_2_':
      Raspredelitel[Nb_Raspredelitel].ExtX[1] = Raspredelitel[Nb_Raspredelitel].X + 1.5 * DLargeur;
      Raspredelitel[Nb_Raspredelitel].ExtY[1] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      Raspredelitel[Nb_Raspredelitel].ExtX[5] = Raspredelitel[Nb_Raspredelitel].ExtX[1];
      Raspredelitel[Nb_Raspredelitel].ExtY[5] = Raspredelitel[Nb_Raspredelitel].Y + DLargeur / 2;
      Raspredelitel[Nb_Raspredelitel].ExtX[4] = Raspredelitel[Nb_Raspredelitel].ExtX[1];
      Raspredelitel[Nb_Raspredelitel].ExtY[4] = Raspredelitel[Nb_Raspredelitel].Y - DLargeur / 2;
      break;
  }

  Raspredelitel[Nb_Raspredelitel].Modele = Modelec;
  Raspredelitel[Nb_Raspredelitel].Position = L_Etat;

  Sozdat_Commande(Raspredelitel[Nb_Raspredelitel].X, Raspredelitel[Nb_Raspredelitel].Y, Commande1);
  Commande[Nb_Commande].Etat = L_Etat;
  Raspredelitel[Nb_Raspredelitel].Com[1].Tip = Commande1;
  Raspredelitel[Nb_Raspredelitel].Com[1].Laquelle = Nb_Commande;
  if ((Modelec == '_4_3') || (Modelec == '_5_3')) {
    Sozdat_Commande(Raspredelitel[Nb_Raspredelitel].X + 3 * DLargeur, Raspredelitel[Nb_Raspredelitel].Y, Commande2)
  }
  else {
    Sozdat_Commande(Raspredelitel[Nb_Raspredelitel].X + 2 * DLargeur, Raspredelitel[Nb_Raspredelitel].Y, Commande2)
  }
  Commande[Nb_Commande].Etat = L_Etat;
  Raspredelitel[Nb_Raspredelitel].Com[2].Tip = Commande2;
  Raspredelitel[Nb_Raspredelitel].Com[2].Laquelle = Nb_Commande;

}
//Отобразить распределитель
function Otobrazit_Raspredelitel(Numero, C, Blanc) {
  //Numero - номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  var XDeca = 0;
  //Стрелка вверх
  function Fleche_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y - DLargeur, X - DLargeur / 20, Y - DLargeur + DLargeur / 5);
    Ligne(X, Y - DLargeur, X + DLargeur / 20, Y - DLargeur + DLargeur / 5);
  }
  //Стрелка вниз
  function Fleche_Bas(X, Y) {  //X,Y - координаты
    //Опорная точка ниже
    Ligne(X, Y, X, Y - DLargeur);
    Ligne(X, Y, X - DLargeur / 20, Y - 0.2 * DLargeur);
    Ligne(X, Y, X + DLargeur / 20, Y - 0.2 * DLargeur);
  }
  //Квадрат
  function Carre(X, Y) {  //X,Y - координаты
    Rect(X, Y - DLargeur / 2, X + DLargeur, Y + DLargeur / 2);
  }
  //Площадь Высокий Низкий
  function Carre_Haut_Bas(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
  }
  //Стоп Низкий
  function Stop_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y - DLargeur / 5);
    Ligne(X - DLargeur / 10, Y - DLargeur / 5, X + DLargeur / 10, Y - DLargeur / 5);
  }
  //Стоп Высокий
  function Stop_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X, Y + DLargeur / 5);
    Ligne(X - DLargeur / 10, Y + DLargeur / 5, X + DLargeur / 10, Y + DLargeur / 5);
  }
  //Косая стрелка вниз
  function Fleche_Oblique_Bas(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.6 * DLargeur, Y + DLargeur);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y + DLargeur - DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y + DLargeur, X + 0.43 * DLargeur, Y + 0.9 * DLargeur);
  }
  //Косая стрелка вверх
  function Fleche_Oblique_Haut(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.60 * DLargeur, Y - DLargeur);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.60 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.60 * DLargeur, Y - DLargeur, X + 0.43 * DLargeur, Y - 0.9 * DLargeur);
  }
  //Площадь Вверх Стоп
  function Carre_Haut_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 5, Y + DLargeur / 2);
    Stop_Bas(X + DLargeur - DLargeur / 5, Y + DLargeur / 2);
  }
  //Квадратная стрелка
  function Carre_Fleche(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Haut(X + DLargeur / 2, Y + DLargeur / 2);
  }
  //Квадрат Стоп Стоп
  function Carre_Stop_Stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 2, Y + DLargeur / 2);
    Stop_Haut(X + DLargeur / 2, Y - DLargeur / 2);
  }
  //Квадрат Стоп Косой
  function Carre_Stop_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + DLargeur / 5, Y + DLargeur / 2);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
  }
  //Квадрат Косой Косой
  function Carre_Oblique_Oblique(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Oblique_Bas(X + DLargeur / 5, Y - DLargeur / 2);
    Fleche_Oblique_Haut(X + DLargeur / 5, Y + DLargeur / 2);
  }
  //Стрелка наполовину наклонная вверху справа
  function Fleche_Demi_Oblique_Haut_Pravyj(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X + 0.30 * DLargeur, Y - DLargeur);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.30 * DLargeur + DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X + 0.30 * DLargeur, Y - DLargeur, X + 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Стрелка наполовину полукруглый верхний левый
  function Fleche_Demi_Oblique_Haut_Levyj(X, Y) {  //X,Y - координаты
    Ligne(X, Y, X - 0.30 * DLargeur, Y - DLargeur);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.30 * DLargeur - DLargeur / 30, Y - DLargeur + DLargeur / 5);
    Ligne(X - 0.30 * DLargeur, Y - DLargeur, X - 0.16 * DLargeur, Y - 0.87 * DLargeur);
  }
  //Квадрат
  function Carre_1_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Pravyj(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат
  function Carre_2_5_2(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Demi_Oblique_Haut_Levyj(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }
  //Квадрат 4 стоп
  function Carre4stop(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Stop_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Haut(X + 0.2 * DLargeur, Y - DLargeur / 2);
    Stop_Haut(X + 0.8 * DLargeur, Y - DLargeur / 2);
  }
  //Квадрат 2 стрелки
  function Carre2fleches(X, Y) {  //X,Y - координаты
    Carre(X, Y);
    Fleche_Bas(X + 0.2 * DLargeur, Y + DLargeur / 2);
    Fleche_Bas(X + 0.8 * DLargeur, Y + DLargeur / 2);
    Stop_Bas(X + 0.5 * DLargeur, Y + DLargeur / 2);
  }



  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  if (Raspredelitel[Numero].Position == 1) { XDeca = 0 } else { if (Raspredelitel[Numero].Position == 2) { XDeca = DLargeur } else { if (Raspredelitel[Numero].Position == 3) { XDeca = -DLargeur } } }
  switch (Raspredelitel[Numero].Modele) {
    case '_3_2':
      Carre_Haut_Stop(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre_Stop_Oblique(Raspredelitel[Numero].X + XDeca + DLargeur, Raspredelitel[Numero].Y);
      Ligne(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_2':
      Carre_2_5_2(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre_1_5_2(Raspredelitel[Numero].X + XDeca + DLargeur, Raspredelitel[Numero].Y);
      Ligne(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_5_3':
      Carre_2_5_2(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre2fleches(Raspredelitel[Numero].X + DLargeur + XDeca, Raspredelitel[Numero].Y);
      Carre_1_5_2(Raspredelitel[Numero].X + XDeca + DLargeur + DLargeur, Raspredelitel[Numero].Y);
      Ligne(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Ligne(Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 6 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_2':
      Carre_Haut_Bas(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre_Oblique_Oblique(Raspredelitel[Numero].X + XDeca + DLargeur, Raspredelitel[Numero].Y);
      Ligne(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_4_3':
      Carre_Haut_Bas(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre4stop(Raspredelitel[Numero].X + DLargeur + XDeca, Raspredelitel[Numero].Y);
      Carre_Oblique_Oblique(Raspredelitel[Numero].X + XDeca + 2 * DLargeur, Raspredelitel[Numero].Y);
      Ligne(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2, Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      Triangle(Raspredelitel[Numero].X + 9 / 5 * DLargeur, Raspredelitel[Numero].Y + DLargeur / 2 + DLargeur / 8);
      break;
    case '_2_2':
      Carre_Stop_Stop(Raspredelitel[Numero].X + XDeca + DLargeur, Raspredelitel[Numero].Y);
      Carre_Fleche(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      break;
    case '_2_2_':
      Carre_Stop_Stop(Raspredelitel[Numero].X + XDeca, Raspredelitel[Numero].Y);
      Carre_Fleche(Raspredelitel[Numero].X + XDeca + DLargeur, Raspredelitel[Numero].Y);
      break;
  }
  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  if (!Blanc) { Couleur(Coul) } else { Couleur('#000000') }

  if ((Raspredelitel[Numero].Com[1].Tip == 'Upravlenie_Levyj') || (Raspredelitel[Numero].Com[1].Tip == 'Upravlenie_Pravyj')) {

    switch (Raspredelitel[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Raspredelitel[Numero].ExtX[6], Raspredelitel[Numero].Y, Raspredelitel[Numero].ExtX[6] + XDeca + DLargeur, Raspredelitel[Numero].Y);
        break;
      default:
        Ligne(Raspredelitel[Numero].ExtX[6], Raspredelitel[Numero].Y, Raspredelitel[Numero].ExtX[6] + XDeca, Raspredelitel[Numero].Y);
    }
  }

  if ((Raspredelitel[Numero].Com[2].Tip == 'Upravlenie_Levyj') || (Raspredelitel[Numero].Com[2].Tip == 'Upravlenie_Pravyj')) {

    switch (Raspredelitel[Numero].Modele) {
      case '_4_3':
      case '_5_3':
        Ligne(Raspredelitel[Numero].ExtX[0] + XDeca - DLargeur, Raspredelitel[Numero].Y, Raspredelitel[Numero].ExtX[0], Raspredelitel[Numero].Y);
        break;
      default:
        Ligne(Raspredelitel[Numero].ExtX[0] - XDeca, Raspredelitel[Numero].Y, Raspredelitel[Numero].ExtX[0] - DLargeur, Raspredelitel[Numero].Y);
    }
  }

  Otobrazit_Commande(Raspredelitel[Numero].Com[1].Laquelle, C, Blanc, XDeca, Raspredelitel[Numero].Position);
  Otobrazit_Commande(Raspredelitel[Numero].Com[2].Laquelle, C, Blanc, XDeca, Raspredelitel[Numero].Position);

  Couleur(C);
  if ((Raspredelitel[Numero].Modele == '_4_3') || (Raspredelitel[Numero].Modele == '_5_3')) {
    if (Raspredelitel[Numero].Position == 3) { Otobrazit_Pruzhina(Raspredelitel[Numero].X - DLargeur / 4 + XDeca, Raspredelitel[Numero].Y + DLargeur / 3, Raspredelitel[Numero].X + XDeca, DLargeur / 4, true) }
    else { Otobrazit_Pruzhina(Raspredelitel[Numero].X - DLargeur + XDeca, Raspredelitel[Numero].Y + DLargeur / 3, Raspredelitel[Numero].X + XDeca, DLargeur / 4, true) }
    if (Raspredelitel[Numero].Position == 2) { Otobrazit_Pruzhina(Raspredelitel[Numero].X + 3 * DLargeur + XDeca, Raspredelitel[Numero].Y + DLargeur / 3, Raspredelitel[Numero].X + 3 * DLargeur + DLargeur / 4 + XDeca, DLargeur / 4, true) }
    else { Otobrazit_Pruzhina(Raspredelitel[Numero].X + 3 * DLargeur + XDeca, Raspredelitel[Numero].Y + DLargeur / 3, Raspredelitel[Numero].X + 3 * DLargeur + DLargeur + XDeca, DLargeur / 4, true) }
  }

  Couleur('#000000');

}






//Отобразить канал силовой
function Otobrazit_CanalSilovoe(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;
  ctx.lineWidth = 2; //Толщина линии 2
  

  if (!Blanc) {
    switch (CanalSilovoe[Numero].Etat) {
      case 0: Couleur('#000000');
        break;
      case 1: Couleur('#FF0000');
        break;
      case 2: Couleur('#FFA07A');
        break;
      case 3: Couleur('#00FFFF');
        break;  
    }
  }

  Xe = CanalSilovoe[Numero].ParcoursX[1];
  Ye = CanalSilovoe[Numero].ParcoursY[1];

  for (let Pour = 2; Pour <= CanalSilovoe[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, CanalSilovoe[Numero].ParcoursX[Pour], CanalSilovoe[Numero].ParcoursY[Pour]);
    Xe = CanalSilovoe[Numero].ParcoursX[Pour];
    Ye = CanalSilovoe[Numero].ParcoursY[Pour];

  }

  Couleur('#000000');
  ctx.lineWidth = 1; //Толщина линии 1
}

//Отобразить канал управления
function Otobrazit_CanalUpravlenie(Numero, Blanc) {  //
  var Pour = 0;
  Xe = 0;
  Ye = 0;

  if (!Blanc) {
    switch (CanalUpravlenie[Numero].Etat) {
      case 0: Couleur('#000000');
        break;
      case 1: Couleur('#FF00FF');
        break;
      case 2: Couleur('#808080');
        break;
    }
  }
  Xe = CanalUpravlenie[Numero].ParcoursX[1];
  Ye = CanalUpravlenie[Numero].ParcoursY[1];
  for (let Pour = 2; Pour <= CanalUpravlenie[Numero].NbPoint; Pour++) {
    Ligne(Xe, Ye, CanalUpravlenie[Numero].ParcoursX[Pour], CanalUpravlenie[Numero].ParcoursY[Pour]);
    Xe = CanalUpravlenie[Numero].ParcoursX[Pour];
    Ye = CanalUpravlenie[Numero].ParcoursY[Pour];
  }

  Couleur('#000000');
}

//Отобразить питание
function Otobrazit_SilovoePitanie(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(SilovoePitanie[Numero].X, SilovoePitanie[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(SilovoePitanie[Numero].X, SilovoePitanie[Numero].Y - 0.2, C) } else { NPavepetit(X, Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить питание пилота
function Otobrazit_UpravleniePitanie(Numero, C, Blanc) {  //

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }
  Cercle(UpravleniePitanie[Numero].X, UpravleniePitanie[Numero].Y, ARayon);
  if (!Blanc) { NPavepetit(UpravleniePitanie[Numero].X, UpravleniePitanie[Numero].Y - 0.2, C) } else { NPavepetit(UpravleniePitanie[Numero].X, UpravleniePitanie[Numero].Y - 0.2, '#000000') }

  Couleur('#000000');
}

//Отобразить пересечение
function Otobrazit_PeresechenieSilovoe(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#FF0000' } else { Co = '#000000' }
  NPavepetit(PeresechenieSilovoe[Numero].X, PeresechenieSilovoe[Numero].Y, Co);
}

//Отобразить пересечение пилота
function Otobrazit_PeresechenieUpravlenie(Numero, Blanc) {  //
  var Co = '';

  if (!Blanc) { Co = '#800080' } else { Co = '#000000'; }
  NPavepetit(PeresechenieUpravlenie[Numero].X, PeresechenieUpravlenie[Numero].Y, Co);
}

//Отобразить текст
function Otobrazit_Texte(Numero, C) {
  Couleur(C);
  ctx.font = (Math.round(Texte[Numero].Lataille * 8 * Faktor) + 4) + 'px Arial';
  Otxy(Math.round(Texte[Numero].X), Math.round(Texte[Numero].Y - Texte[Numero].Lataille * 6 - 4), Texte[Numero].Le_Texte);
  ctx.font.height = (Math.round(8 * Faktor)) + 'px Arial';
  Couleur('#000000');
}

function Redessprinc(Blanc) {  // Отображение компонентов на экране
  var Pour = 0;
  //ctx.font = '10px Arial'

  for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { Otobrazit_CanalSilovoe(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { Otobrazit_CanalUpravlenie(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) { Otobrazit_Gidrocilindr(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) { Otobrazit_Raspredelitel(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { Otobrazit_Datchik(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { Otobrazit_SilovoePitanie(Pour, '#FF0000', Blanc) }
  for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { Otobrazit_UpravleniePitanie(Pour, '#800080', Blanc) }
  for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { Otobrazit_PeresechenieSilovoe(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { Otobrazit_PeresechenieUpravlenie(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) { Otobrazit_Pamyat(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { Otobrazit_Sequenceur(Pour, Blanc) }
  for (let Pour = 1; Pour <= Nb_Kran; Pour++) { Otobrazit_Kran(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Otobrazit_Manometr(Pour, '#000000', Blanc) }
  for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { Otobrazit_Vyhod(Pour, '#000000') }
  for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Otobrazit_Texte(Pour, '#000000') }

  //ctx.font = '10px Arial'
}

function Redess(Blanc) {  //
  ClearDevice();
  Redessprinc(Blanc);

}

//Создание формы
function FormCreate() {

  SVG = false;
  Pasapas = true;
  DoubleBuffered = true;
  Faktor = 1;
  Fichiermodifie = false;

  Heure = false;
  Super_Raz();

  Redess(false);

  Compteursouris = 0;

  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;

}

//Вывод текста в верхнюю строку
function PetitMenu(couleur, s) {
  document.getElementById('placeForText').innerHTML = s;
  document.getElementById('placeForText').style.color = couleur;

}

//Выход по нажатию правой кнопки мыши
function Cestfini() {  //

  Redess(false);
  PetitMenu('#FFFFFF', 'Pfff');
  funcCursor('default'); //Курсор в виде стрелки
  Couleur('#000000');

}












//Создать питание
function Sozdat_SilovoePitanie(Xe, Ye) {  //
  Nb_SilovoePitanie++;
  NewSilovoePitanie(Nb_SilovoePitanie);
  SilovoePitanie[Nb_SilovoePitanie].X = Xe;
  SilovoePitanie[Nb_SilovoePitanie].Y = Ye;
}

//Создать питание пилота
function Sozdat_UpravleniePitanie(Xe, Ye) {  //
  Nb_UpravleniePitanie++;
  NewUpravleniePitanie(Nb_UpravleniePitanie);
  UpravleniePitanie[Nb_UpravleniePitanie].X = Xe;
  UpravleniePitanie[Nb_UpravleniePitanie].Y = Ye;
}

//Создать пересечение
function Sozdat_PeresechenieSilovoe(Xe, Ye) {  //
  Nb_PeresechenieSilovoe++;
  NewPeresechenieSilovoe(Nb_PeresechenieSilovoe);
  PeresechenieSilovoe[Nb_PeresechenieSilovoe].X = Xe;
  PeresechenieSilovoe[Nb_PeresechenieSilovoe].Y = Ye;
  Etat = Zero;
}

//Создать пересечение пилота
function Sozdat_PeresechenieUpravlenie(Xe, Ye) {  //
  Nb_PeresechenieUpravlenie++;
  NewPeresechenieUpravlenie(Nb_PeresechenieUpravlenie);
  PeresechenieUpravlenie[Nb_PeresechenieUpravlenie].X = Xe;
  PeresechenieUpravlenie[Nb_PeresechenieUpravlenie].Y = Ye;
  Etat = Bof;
}

//Отображение 
function Ou_Que() {  //Old_X, Old_Y - координаты   Objet - выводимый объект
  var X = 0;
  var Y = 0;

  funcCursor('crosshair');   //Курсор в виде креста
  Couleur('#000000');
  X = X_s;     //Координаты курсора
  Y = Y_s;
  Old_X = X;   //Для совместимости
  Old_Y = Y;
  Lax2 = X;   //Для совместимости
  Lay2 = Y;

}

//Создать текст
function Sozdat_Texte() {  //

  var Tip_Donc = '';
  var Xe = 300;
  var Ye = 200;
  Tip_Donc = 'Un_Texte';
  PetitMenu('#808080', '<Текст> Положение текста ?, правая кнопка = Назад');
  Ou_Que(Xe, Ye, false, Tip_Donc);

}

//Создать текст
function Sozdat_Texte2() {  //Ввод текста
  var Textenter = '';
  var Poured = false;
  var Tip_Donc = '';
  var Xe = 300;
  var Ye = 200;

  if (Tip_Donc == 'Ouste') {
    Redess(false);
    PetitMenu('#FFFFFF', 'Air simulator');
    return false;
  }

  Textenter = Ed('Введите текст : ', '', Poured);


  if (Textenter != '') {
    Nb_Texte++;
    NewTexte(Nb_Texte);

    Texte[Nb_Texte].X = X_s / Faktor;
    Texte[Nb_Texte].Y = Y_s / Faktor;

    Texte[Nb_Texte].Le_Texte = Textenter;
    Texte[Nb_Texte].Lataille = 1;
    Redess(false);
  }

}

function AD(X, Increment) {  //
  X = X + Increment;
}


function Pause(PTime) {
  PTime = PTime * 1000;
  Sleep(PTime);
}

function Sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}











//Создать запорную арматуру
function Sozdat_Kran(XC, YC, Modelec, L_Etat) {
  //XC,YC - координаты, Modelec - модель,  L_Etat - состояние запорной арматуры 1 - открыта, 2 - закрыта
  Nb_Kran++;
  NewKran(Nb_Kran);

  Kran[Nb_Kran].X = XC;
  Kran[Nb_Kran].Y = YC;

  switch (Modelec) {

    case 'Kran':
      Kran[Nb_Kran].EntreeX[1] = XC - 30;
      Kran[Nb_Kran].EntreeY[1] = YC;
      Kran[Nb_Kran].EntreeX[2] = XC + 30;
      Kran[Nb_Kran].EntreeY[2] = YC;
      break;
    case 'Obrat_klapan':
      Kran[Nb_Kran].EntreeX[1] = XC - 15;
      Kran[Nb_Kran].EntreeY[1] = YC;
      Kran[Nb_Kran].EntreeX[2] = XC + 15;
      Kran[Nb_Kran].EntreeY[2] = YC;
  }

  Kran[Nb_Kran].Modele = Modelec;
  Kran[Nb_Kran].Position = L_Etat;

}
//Отобразить запорную арматуру
function Otobrazit_Kran(Numero, C, Blanc) {
  //Numero - номер, C - цвет, Blanc - отображать или нет
  var Coul = '';
  //var XDeca = 0;

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') } //Черный
  Couleur(C);

  //if (Kran[Numero].Etat == 1) { XDeca = 0 } else { if (Kran[Numero].Etat == 2) { XDeca = DLargeur } else { if (Kran[Numero].Etat == 3) { XDeca = -DLargeur } } }

  switch (Kran[Numero].Modele) {
    case 'Kran':
      if (Kran[Numero].Position == 1) {
        Triangle2(Kran[Numero].X - 20, Kran[Numero].Y + 10, Kran[Numero].X - 20, Kran[Numero].Y - 10, Kran[Numero].X, Kran[Numero].Y, false);
        Triangle2(Kran[Numero].X + 20, Kran[Numero].Y + 10, Kran[Numero].X + 20, Kran[Numero].Y - 10, Kran[Numero].X, Kran[Numero].Y, false);
        Ligne(Kran[Numero].X - 20, Kran[Numero].Y, Kran[Numero].X - 30, Kran[Numero].Y);
        Ligne(Kran[Numero].X + 20, Kran[Numero].Y, Kran[Numero].X + 30, Kran[Numero].Y);
      } else {
        Triangle2(Kran[Numero].X - 20, Kran[Numero].Y + 10, Kran[Numero].X - 20, Kran[Numero].Y - 10, Kran[Numero].X, Kran[Numero].Y, true);
        Triangle2(Kran[Numero].X + 20, Kran[Numero].Y + 10, Kran[Numero].X + 20, Kran[Numero].Y - 10, Kran[Numero].X, Kran[Numero].Y, true);
        Ligne(Kran[Numero].X - 20, Kran[Numero].Y, Kran[Numero].X - 30, Kran[Numero].Y);
        Ligne(Kran[Numero].X + 20, Kran[Numero].Y, Kran[Numero].X + 30, Kran[Numero].Y);
      }
      break;
    case 'Obrat_klapan':
      if (Kran[Numero].Position == 1) {
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X, Kran[Numero].Y - 8);
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X, Kran[Numero].Y + 8);
        Cercle(Kran[Numero].X, Kran[Numero].Y, 5);
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X - 15, Kran[Numero].Y);
        Ligne(Kran[Numero].X + 5, Kran[Numero].Y, Kran[Numero].X + 15, Kran[Numero].Y);
      } else {
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X, Kran[Numero].Y - 8);
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X, Kran[Numero].Y + 8);
        Cercle(Kran[Numero].X + 5, Kran[Numero].Y, 5);
        Ligne(Kran[Numero].X - 7, Kran[Numero].Y, Kran[Numero].X - 15, Kran[Numero].Y);
        Ligne(Kran[Numero].X + 10, Kran[Numero].Y, Kran[Numero].X + 15, Kran[Numero].Y);
      }
      break;
  }
  if (C == '#FFFFFF') { Coul = '#FFFFFF' } else { Coul = '#FF00FF' }
  if (!Blanc) { Couleur(Coul) } else { Couleur('#000000') }



  Couleur(C);


  Couleur('#000000');

}

//Создать манометр
function Sozdat_Manometr(Xe, Ye) {
  Nb_Manometr++;
  NewManometr(Nb_Manometr);
  Manometr[Nb_Manometr].X = Xe;
  Manometr[Nb_Manometr].Y = Ye;
  Manometr[Nb_Manometr].View = 2;
}

//Отобразить манометр
function Otobrazit_Manometr(Numero, C, Blanc) {

  if (!Blanc) { Couleur(C) } else { Couleur('#000000') }

  if (Manometr[Numero].View == 2) {
    Ligne(Manometr[Numero].X, Manometr[Numero].Y, Manometr[Numero].X, Manometr[Numero].Y - 20);
    Cercle(Manometr[Numero].X, Manometr[Numero].Y - 40, 20)
    Ligne(Manometr[Numero].X + 15, Manometr[Numero].Y - 25, Manometr[Numero].X - 15, Manometr[Numero].Y - 55);
    Ligne(Manometr[Numero].X - 15, Manometr[Numero].Y - 55, Manometr[Numero].X - 5, Manometr[Numero].Y - 50);
    Ligne(Manometr[Numero].X - 15, Manometr[Numero].Y - 55, Manometr[Numero].X - 10, Manometr[Numero].Y - 45);
  } else {
    Ligne(Manometr[Numero].X, Manometr[Numero].Y, Manometr[Numero].X, Manometr[Numero].Y - 20);
    Cercle(Manometr[Numero].X, Manometr[Numero].Y - 40, 20)
    ctx.textAlign = 'center';
    ctx.font = (Math.round(10 * Faktor) + 4) + 'px Arial';
    Otxy(Manometr[Numero].X, Manometr[Numero].Y - 35, Manometr[Numero].Pressure.toFixed(2))
  }

  Couleur('#000000');
}

//Создать выход
function Sozdat_Vyhod(Xe, Ye) {
  Nb_Vyhod++;
  NewVyhod(Nb_Vyhod);
  Vyhod[Nb_Vyhod].X = Xe;
  Vyhod[Nb_Vyhod].Y = Ye;
}

//Отобразить выход
function Otobrazit_Vyhod(Numero, C) {
  Couleur(C);
  //if (Vyhod[Numero].Sila_Vyhod == 0) {Couleur(C)} else { Couleur('#FF0000') }
  
  Ligne(Vyhod[Numero].X, Vyhod[Numero].Y, Vyhod[Numero].X, Vyhod[Numero].Y - 20);
  Triangle2(Vyhod[Numero].X + 5, Vyhod[Numero].Y - 20, Vyhod[Numero].X - 5, Vyhod[Numero].Y - 20, Vyhod[Numero].X, Vyhod[Numero].Y - 27, false)
  Couleur('#000000');
}