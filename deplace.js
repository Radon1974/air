//Перемещение компонента

function Deplace_Objet() {
  var Objet = '';
  var Pour = 0,
    Pour2 = 0,
    Pour3 = 0;
  var Lax = 0,
    Lay = 0;
  var dx = 0,
    dy = 0;
  var mypoint = '';



  Pour = Celui_La2;
  Objet = Objet2;


  if (Objet == 'Rien') {
    Redess(false);
    return false;
  }


  Lax = X_s / Faktor;
  Lay = Y_s / Faktor;

  if (Objet == 'Un_Dat') { if (['Et', 'Ou', 'Inhibition'].includes(Datchik[Pour].Modele)) { Objet = 'Une_Cellule' } }



  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;

  if (Objet == 'Un_Gidrocil') { if (Gidrocilindr[Pour].Modele == 'Double_V') { Immonde_rustine_double_v = true } }
  if (Objet == 'Un_Dat') { if (Datchik[Pour].Modele == 'A_Galet_V') { Immonde_rustine_galet_v = true } }

  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;
  if (Objet == 'Ouste') { return false }
  dx = 0;
  dy = 0;

  switch (Objet) {
    case 'Un_Dat':
    case 'Une_Cellule':
      Objet = 'Un_Dat';
      dx = Lax - Datchik[Pour].X;
      dy = Lay - Datchik[Pour].Y;
      Datchik[Pour].X = Datchik[Pour].X + dx;
      Datchik[Pour].Y = Datchik[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) {
        Datchik[Pour].ExtX[Pour2] = Datchik[Pour].ExtX[Pour2] + dx;
        Datchik[Pour].ExtY[Pour2] = Datchik[Pour].ExtY[Pour2] + dy;
      }
      break;

    case 'Un_Sequenceur':
      dx = Lax - Sequenceur[Pour].X;
      dy = Lay - Sequenceur[Pour].Y;
      Sequenceur[Pour].X = Sequenceur[Pour].X + dx;
      Sequenceur[Pour].Y = Sequenceur[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) {
        Sequenceur[Pour].ExtX[Pour2] = Sequenceur[Pour].ExtX[Pour2] + dx;
        Sequenceur[Pour].ExtY[Pour2] = Sequenceur[Pour].ExtY[Pour2] + dy;
      }
      break;

    case 'Un_Gidrocil':
      dx = Lax - Gidrocilindr[Pour].X;
      dy = Lay - Gidrocilindr[Pour].Y;
      Gidrocilindr[Pour].X = Gidrocilindr[Pour].X + dx;
      Gidrocilindr[Pour].Y = Gidrocilindr[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
        Gidrocilindr[Pour].EntreeX[Pour2] = Gidrocilindr[Pour].EntreeX[Pour2] + dx;
        Gidrocilindr[Pour].EntreeY[Pour2] = Gidrocilindr[Pour].EntreeY[Pour2] + dy;
      }
      break;

    case 'Un_Raspred':
      dx = Lax - Raspredelitel[Pour].X;
      dy = Lay - Raspredelitel[Pour].Y;
      Raspredelitel[Pour].X = Raspredelitel[Pour].X + dx;
      Raspredelitel[Pour].Y = Raspredelitel[Pour].Y + dy;
      for (let Pour2 = 0; Pour2 <= 6; Pour2++) {
        Raspredelitel[Pour].ExtX[Pour2] = Raspredelitel[Pour].ExtX[Pour2] + dx;
        Raspredelitel[Pour].ExtY[Pour2] = Raspredelitel[Pour].ExtY[Pour2] + dy;
      }
      Commande[Raspredelitel[Pour].Com[1].Laquelle].X = Commande[Raspredelitel[Pour].Com[1].Laquelle].X + dx;
      Commande[Raspredelitel[Pour].Com[1].Laquelle].Y = Commande[Raspredelitel[Pour].Com[1].Laquelle].Y + dy;
      Commande[Raspredelitel[Pour].Com[2].Laquelle].X = Commande[Raspredelitel[Pour].Com[2].Laquelle].X + dx;
      Commande[Raspredelitel[Pour].Com[2].Laquelle].Y = Commande[Raspredelitel[Pour].Com[2].Laquelle].Y + dy;
      break;

    case 'Un_Kran':
      dx = Lax - Kran[Pour].X;
      dy = Lay - Kran[Pour].Y;
      Kran[Pour].X = Kran[Pour].X + dx;
      Kran[Pour].Y = Kran[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
        Kran[Pour].EntreeX[Pour2] = Kran[Pour].EntreeX[Pour2] + dx;
        Kran[Pour].EntreeY[Pour2] = Kran[Pour].EntreeY[Pour2] + dy;
      }
      break;

    case 'Un_Manometr':
      dx = Lax - Math.round(Manometr[Pour].X);
      dy = Lay - Math.round(Manometr[Pour].Y);
      Manometr[Pour].X = Manometr[Pour].X + dx;
      Manometr[Pour].Y = Manometr[Pour].Y + dy;
      break;

    case 'Un_Vyhod':
      dx = Lax - Math.round(Vyhod[Pour].X);
      dy = Lay - Math.round(Vyhod[Pour].Y);
      Vyhod[Pour].X = Vyhod[Pour].X + dx;
      Vyhod[Pour].Y = Vyhod[Pour].Y + dy;
      break;      

    case 'Un_Texte':
      dx = Lax - Math.round(Texte[Pour].X);
      dy = Lay - Math.round(Texte[Pour].Y);
      Texte[Pour].X = Texte[Pour].X + dx;
      Texte[Pour].Y = Texte[Pour].Y + dy;
      break;

    case 'Une_Sila':
      dx = Lax - Math.round(SilovoePitanie[Pour].X);
      dy = Lay - Math.round(SilovoePitanie[Pour].Y);
      SilovoePitanie[Pour].X = SilovoePitanie[Pour].X + dx;
      SilovoePitanie[Pour].Y = SilovoePitanie[Pour].Y + dy;
      break;

    case 'Une_UpravleniePitanie':
      dx = Lax - Math.round(UpravleniePitanie[Pour].X);
      dy = Lay - Math.round(UpravleniePitanie[Pour].Y);
      UpravleniePitanie[Pour].X = UpravleniePitanie[Pour].X + dx;
      UpravleniePitanie[Pour].Y = UpravleniePitanie[Pour].Y + dy;
      break;

    case 'Un_PeresechenieSilovoe':
      dx = Lax - Math.round(PeresechenieSilovoe[Pour].X);
      dy = Lay - Math.round(PeresechenieSilovoe[Pour].Y);
      PeresechenieSilovoe[Pour].X = PeresechenieSilovoe[Pour].X + dx;
      PeresechenieSilovoe[Pour].Y = PeresechenieSilovoe[Pour].Y + dy;
      break;

    case 'Un_PeresechenieUpravlenie':
      dx = Lax - Math.round(PeresechenieUpravlenie[Pour].X);
      dy = Lay - Math.round(PeresechenieUpravlenie[Pour].Y);
      PeresechenieUpravlenie[Pour].X = PeresechenieUpravlenie[Pour].X + dx;
      PeresechenieUpravlenie[Pour].Y = PeresechenieUpravlenie[Pour].Y + dy;
      break;

    case 'Une_Pamyat':
      dx = Lax - Pamyat[Pour].X;
      dy = Lay - Pamyat[Pour].Y;
      Pamyat[Pour].X = Pamyat[Pour].X + dx;
      Pamyat[Pour].Y = Pamyat[Pour].Y + dy;
      for (let Pour2 = 1; Pour2 <= 4; Pour2++) {
        Pamyat[Pour].ExtX[Pour2] = Pamyat[Pour].ExtX[Pour2] + dx;
        Pamyat[Pour].ExtY[Pour2] = Pamyat[Pour].ExtY[Pour2] + dy;
      }
      break;
  }

  for (let Pour2 = 1; Pour2 <= Nb_CanalSilovoe; Pour2++) {
    for (let Pour3 = 1; Pour3 <= 2; Pour3++) {
      if (CanalSilovoe[Pour2].Soedinenie[Pour3].Tip == Objet) {
        if (CanalSilovoe[Pour2].Soedinenie[Pour3].Lequel == Pour) {
          if (Pour3 == 2) {
            if (CanalSilovoe[Pour2].NbPoint == 2) {
              CanalSilovoe[Pour2].NbPoint = 3;
              CanalSilovoe[Pour2].ParcoursX[3] = CanalSilovoe[Pour2].ParcoursX[2];
              CanalSilovoe[Pour2].ParcoursY[3] = CanalSilovoe[Pour2].ParcoursY[2];
              CanalSilovoe[Pour2].ParcoursX[2] = (CanalSilovoe[Pour2].ParcoursX[1] + CanalSilovoe[Pour2].ParcoursX[3]) / 2;
              CanalSilovoe[Pour2].ParcoursY[2] = (CanalSilovoe[Pour2].ParcoursY[1] + CanalSilovoe[Pour2].ParcoursY[3]) / 2;
            }

            if ((Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint]) == Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1])) && (Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1]) == Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 2]))) {
              CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] + dx;
              CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] + dy;
              CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint];
            } else {
              if ((Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint]) == Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1])) && (Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1]) == Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 2]))) {
                CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] + dx;
                CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] + dy;
                CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint];
                CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 2];
              } else {
                if ((Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint]) == Math.round(CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1])) && (Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1]) == Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 2]))) {
                  CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] + dx;
                  CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] + dy;
                  CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint];
                } else {
                  if ((Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint]) == Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1])) && (Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 1]) == Math.round(CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint - 2]))) {
                    CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint] + dx;
                    CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] = CanalSilovoe[Pour2].ParcoursY[CanalSilovoe[Pour2].NbPoint] + dy;
                    CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint - 1] = CanalSilovoe[Pour2].ParcoursX[CanalSilovoe[Pour2].NbPoint];
                  }
                }
              }
            }
          } else if (Pour3 == 1) {
            if (CanalSilovoe[Pour2].NbPoint == 2) {
              CanalSilovoe[Pour2].NbPoint = 3;
              CanalSilovoe[Pour2].ParcoursX[3] = CanalSilovoe[Pour2].ParcoursX[2];
              CanalSilovoe[Pour2].ParcoursY[3] = CanalSilovoe[Pour2].ParcoursY[2];
              CanalSilovoe[Pour2].ParcoursX[2] = (CanalSilovoe[Pour2].ParcoursX[1] + CanalSilovoe[Pour2].ParcoursX[3]) / 2;
              ParcoursY[2] = (ParcoursY[1] + ParcoursY[3]) / 2;
            }

            if ((Math.round(CanalSilovoe[Pour2].ParcoursY[1]) == Math.round(CanalSilovoe[Pour2].ParcoursY[2])) && (Math.round(CanalSilovoe[Pour2].ParcoursX[2]) == Math.round(CanalSilovoe[Pour2].ParcoursX[3]))) {
              CanalSilovoe[Pour2].ParcoursX[1] = CanalSilovoe[Pour2].ParcoursX[1] + dx;
              CanalSilovoe[Pour2].ParcoursY[1] = CanalSilovoe[Pour2].ParcoursY[1] + dy;
              CanalSilovoe[Pour2].ParcoursY[2] = CanalSilovoe[Pour2].ParcoursY[1];
            } else {
              if ((Math.round(CanalSilovoe[Pour2].ParcoursX[1]) == Math.round(CanalSilovoe[Pour2].ParcoursX[2])) && (Math.round(CanalSilovoe[Pour2].ParcoursX[2]) == Math.round(CanalSilovoe[Pour2].ParcoursX[3]))) {
                CanalSilovoe[Pour2].ParcoursX[1] = CanalSilovoe[Pour2].ParcoursX[1] + dx;
                CanalSilovoe[Pour2].ParcoursY[1] = CanalSilovoe[Pour2].ParcoursY[1] + dy;
                CanalSilovoe[Pour2].ParcoursY[2] = CanalSilovoe[Pour2].ParcoursY[3];
                CanalSilovoe[Pour2].ParcoursX[2] = CanalSilovoe[Pour2].ParcoursX[1];
              } else {
                if ((Math.round(CanalSilovoe[Pour2].ParcoursX[1]) == Math.round(CanalSilovoe[Pour2].ParcoursX[2])) && (Math.round(CanalSilovoe[Pour2].ParcoursY[2]) == Math.round(CanalSilovoe[Pour2].ParcoursY[3]))) {
                  CanalSilovoe[Pour2].ParcoursX[1] = CanalSilovoe[Pour2].ParcoursX[1] + dx;
                  CanalSilovoe[Pour2].ParcoursY[1] = CanalSilovoe[Pour2].ParcoursY[1] + dy;
                  CanalSilovoe[Pour2].ParcoursX[2] = CanalSilovoe[Pour2].ParcoursX[1];
                } else {
                  if ((Math.round(CanalSilovoe[Pour2].ParcoursY[1]) == Math.round(CanalSilovoe[Pour2].ParcoursY[2])) && (Math.round(CanalSilovoe[Pour2].ParcoursY[2]) == Math.round(CanalSilovoe[Pour2].ParcoursY[3]))) {
                    CanalSilovoe[Pour2].ParcoursX[1] = CanalSilovoe[Pour2].ParcoursX[1] + dx;
                    CanalSilovoe[Pour2].ParcoursY[1] = CanalSilovoe[Pour2].ParcoursY[1] + dy;
                    CanalSilovoe[Pour2].ParcoursX[2] = CanalSilovoe[Pour2].ParcoursX[1];
                  }
                }
              }
            }
          }
        }
      }
    }
  }





  for (let Pour2 = 1; Pour2 <= Nb_CanalUpravlenie; Pour2++) {
    for (let Pour3 = 1; Pour3 <= 2; Pour3++) {
      if (CanalUpravlenie[Pour2].Soedinenie[Pour3].Tip == Objet) {
        if (CanalUpravlenie[Pour2].Soedinenie[Pour3].Lequel == Pour) {
          if (Pour3 == 2) {
            if (CanalUpravlenie[Pour2].NbPoint == 2) {
              CanalUpravlenie[Pour2].NbPoint = 3;
              CanalUpravlenie[Pour2].ParcoursX[3] = CanalUpravlenie[Pour2].ParcoursX[2];
              CanalUpravlenie[Pour2].ParcoursY[3] = CanalUpravlenie[Pour2].ParcoursY[2];
              CanalUpravlenie[Pour2].ParcoursX[2] = (CanalUpravlenie[Pour2].ParcoursX[1] + CanalUpravlenie[Pour2].ParcoursX[3]) / 2;
              CanalUpravlenie[Pour2].ParcoursY[2] = (CanalUpravlenie[Pour2].ParcoursY[1] + CanalUpravlenie[Pour2].ParcoursY[3]) / 2;
            }

            if ((Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1])) && (Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 2]))) {
              CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] + dx;
              CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] + dy;
              CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint];
            } else {
              if ((Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1])) && (Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 2]))) {
                CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] + dx;
                CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] + dy;
                CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint];
                CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 2];
              } else {
                if ((Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1])) && (Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 2]))) {
                  CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] + dx;
                  CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] + dy;
                  CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint];
                } else {
                  if ((Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1])) && (Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 1]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint - 2]))) {
                    CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint] + dx;
                    CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] = CanalUpravlenie[Pour2].ParcoursY[CanalUpravlenie[Pour2].NbPoint] + dy;
                    CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint - 1] = CanalUpravlenie[Pour2].ParcoursX[CanalUpravlenie[Pour2].NbPoint];
                  }
                }
              }
            }
          } else {
            if (Pour3 == 1) {
              if (CanalUpravlenie[Pour2].NbPoint == 2) {
                CanalUpravlenie[Pour2].NbPoint = 3;
                CanalUpravlenie[Pour2].ParcoursX[3] = CanalUpravlenie[Pour2].ParcoursX[2];
                CanalUpravlenie[Pour2].ParcoursY[3] = CanalUpravlenie[Pour2].ParcoursY[2];
                CanalUpravlenie[Pour2].ParcoursX[2] = (CanalUpravlenie[Pour2].ParcoursX[1] + CanalUpravlenie[Pour2].ParcoursX[3]) / 2;
                CanalUpravlenie[Pour2].ParcoursY[2] = (CanalUpravlenie[Pour2].ParcoursY[1] + CanalUpravlenie[Pour2].ParcoursY[3]) / 2;
              }

              if ((Math.round(CanalUpravlenie[Pour2].ParcoursY[1]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[2])) && (Math.round(CanalUpravlenie[Pour2].ParcoursX[2]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[3]))) {
                CanalUpravlenie[Pour2].ParcoursX[1] = CanalUpravlenie[Pour2].ParcoursX[1] + dx;
                CanalUpravlenie[Pour2].ParcoursY[1] = CanalUpravlenie[Pour2].ParcoursY[1] + dy;
                CanalUpravlenie[Pour2].ParcoursY[2] = CanalUpravlenie[Pour2].ParcoursY[1];
              } else {
                if ((Math.round(CanalUpravlenie[Pour2].ParcoursX[1]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[2])) && (Math.round(CanalUpravlenie[Pour2].ParcoursX[2]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[3]))) {
                  CanalUpravlenie[Pour2].ParcoursX[1] = CanalUpravlenie[Pour2].ParcoursX[1] + dx;
                  CanalUpravlenie[Pour2].ParcoursY[1] = CanalUpravlenie[Pour2].ParcoursY[1] + dy;
                  CanalUpravlenie[Pour2].ParcoursY[2] = CanalUpravlenie[Pour2].ParcoursY[3];
                  CanalUpravlenie[Pour2].ParcoursX[2] = CanalUpravlenie[Pour2].ParcoursX[1];
                } else {
                  if ((Math.round(CanalUpravlenie[Pour2].ParcoursX[1]) == Math.round(CanalUpravlenie[Pour2].ParcoursX[2])) && (Math.round(CanalUpravlenie[Pour2].ParcoursY[2]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[3]))) {
                    CanalUpravlenie[Pour2].ParcoursX[1] = CanalUpravlenie[Pour2].ParcoursX[1] + dx;
                    CanalUpravlenie[Pour2].ParcoursY[1] = CanalUpravlenie[Pour2].ParcoursY[1] + dy;
                    CanalUpravlenie[Pour2].ParcoursX[2] = CanalUpravlenie[Pour2].ParcoursX[1];
                  } else {
                    if ((Math.round(CanalUpravlenie[Pour2].ParcoursY[1]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[2])) && (Math.round(CanalUpravlenie[Pour2].ParcoursY[2]) == Math.round(CanalUpravlenie[Pour2].ParcoursY[3]))) {
                      CanalUpravlenie[Pour2].ParcoursX[1] = CanalUpravlenie[Pour2].ParcoursX[1] + dx;
                      CanalUpravlenie[Pour2].ParcoursY[1] = CanalUpravlenie[Pour2].ParcoursY[1] + dy;
                      CanalUpravlenie[Pour2].ParcoursX[2] = CanalUpravlenie[Pour2].ParcoursX[1];
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Redess(false);
}