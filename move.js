//Перемещение по оси X
function Decah(Combien) {
    var Pour = 0, Pour2 = 0;
  
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { CanalSilovoe[Pour].ParcoursX[Pour2] = CanalSilovoe[Pour].ParcoursX[Pour2] + Combien } }
    for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { CanalUpravlenie[Pour].ParcoursX[Pour2] = CanalUpravlenie[Pour].ParcoursX[Pour2] + Combien } }
  
    for (let Pour = 1; Pour <= Nb_Datchik; Pour++) {
      Datchik[Pour].X = Datchik[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Datchik[Pour].ExtX[Pour2] = Datchik[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { SilovoePitanie[Pour].X = SilovoePitanie[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { UpravleniePitanie[Pour].X = UpravleniePitanie[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { PeresechenieSilovoe[Pour].X = PeresechenieSilovoe[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { PeresechenieUpravlenie[Pour].X = PeresechenieUpravlenie[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Manometr[Pour].X = Manometr[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { Vyhod[Pour].X = Vyhod[Pour].X + Combien }
  
    for (let Pour = 1; Pour <= Nb_Kran; Pour++) {
      Kran[Pour].X = Kran[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Kran[Pour].EntreeX[Pour2] = Kran[Pour].EntreeX[Pour2] + Combien }
    }
    
    for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) {
      Gidrocilindr[Pour].X = Gidrocilindr[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Gidrocilindr[Pour].EntreeX[Pour2] = Gidrocilindr[Pour].EntreeX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
      Sequenceur[Pour].X = Sequenceur[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) { Sequenceur[Pour].ExtX[Pour2] = Sequenceur[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) {
      Pamyat[Pour].X = Pamyat[Pour].X + Combien;
      for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Pamyat[Pour].ExtX[Pour2] = Pamyat[Pour].ExtX[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
      Raspredelitel[Pour].X = Raspredelitel[Pour].X + Combien;
      for (let Pour2 = 0; Pour2 <= 6; Pour2++) (Raspredelitel[Pour].ExtX[Pour2] = Raspredelitel[Pour].ExtX[Pour2] + Combien)
    }
  
    for (let Pour = 1; Pour <= Nb_Commande; Pour++) { Commande[Pour].X = Commande[Pour].X + Combien }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Texte[Pour].X = Texte[Pour].X + Combien }
  }
  
  //Перемещение по оси Y
  function Decav(Combien) {
    var Pour = 0, Pour2 = 0;
    
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { CanalSilovoe[Pour].ParcoursY[Pour2] = CanalSilovoe[Pour].ParcoursY[Pour2] + Combien } }
    for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { for (let Pour2 = 1; Pour2 <= 11; Pour2++) { CanalUpravlenie[Pour].ParcoursY[Pour2] = CanalUpravlenie[Pour].ParcoursY[Pour2] + Combien } }
  
    for (let Pour = 1; Pour <= Nb_Datchik; Pour++) {
      Datchik[Pour].Y = Datchik[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Datchik[Pour].ExtY[Pour2] = Datchik[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { SilovoePitanie[Pour].Y = SilovoePitanie[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { UpravleniePitanie[Pour].Y = UpravleniePitanie[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { PeresechenieSilovoe[Pour].Y = PeresechenieSilovoe[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { PeresechenieUpravlenie[Pour].Y = PeresechenieUpravlenie[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Manometr[Pour].Y = Manometr[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { Vyhod[Pour].Y = Vyhod[Pour].Y + Combien }
  
    for (let Pour = 1; Pour <= Nb_Kran; Pour++) {
      Kran[Pour].Y = Kran[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Kran[Pour].EntreeY[Pour2] = Kran[Pour].EntreeY[Pour2] + Combien }
    }
    
    for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) {
      Gidrocilindr[Pour].Y = Gidrocilindr[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Gidrocilindr[Pour].EntreeY[Pour2] = Gidrocilindr[Pour].EntreeY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
      Sequenceur[Pour].Y = Sequenceur[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 22; Pour2++) { Sequenceur[Pour].ExtY[Pour2] = Sequenceur[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) {
      Pamyat[Pour].Y = Pamyat[Pour].Y + Combien;
      for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Pamyat[Pour].ExtY[Pour2] = Pamyat[Pour].ExtY[Pour2] + Combien }
    }
  
    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
      Raspredelitel[Pour].Y = Raspredelitel[Pour].Y + Combien;
      for (let Pour2 = 0; Pour2 <= 6; Pour2++) { Raspredelitel[Pour].ExtY[Pour2] = Raspredelitel[Pour].ExtY[Pour2] + Combien } 
    }
  
    for (let Pour = 1; Pour <= Nb_Commande; Pour++) { Commande[Pour].Y = Commande[Pour].Y + Combien }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { Texte[Pour].Y = Texte[Pour].Y + Combien }
  }

//Минимальный
function Minimumh() {
    var Pour = 0;
    var mini = 10000;
    for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { if (Datchik[Pour].X < mini) { mini = Datchik[Pour].X } }
    for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { if (SilovoePitanie[Pour].X < mini) { mini = SilovoePitanie[Pour].X } }
    for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { if (UpravleniePitanie[Pour].X < mini) { mini = UpravleniePitanie[Pour].X } }
    for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { if (PeresechenieSilovoe[Pour].X < mini) { mini = PeresechenieSilovoe[Pour].X } }
    for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { if (PeresechenieUpravlenie[Pour].X < mini) { mini = PeresechenieUpravlenie[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) { if (Gidrocilindr[Pour].X < mini) { mini = Gidrocilindr[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) { if (Raspredelitel[Pour].X < mini) { mini = Raspredelitel[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) { if (Pamyat[Pour].X < mini) { mini = Pamyat[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { if (Sequenceur[Pour].X < mini) { mini = Sequenceur[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Kran; Pour++) { if (Kran[Pour].X < mini) { mini = Kran[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { if (Manometr[Pour].X < mini) { mini = Manometr[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { if (Vyhod[Pour].X < mini) { mini = Vyhod[Pour].X } }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { if (Texte[Pour].X < mini) { mini = Texte[Pour].X } }
    
    return mini;
  }


  //Минимальный
function Minimumv() {
    var Pour = 0;
    var mini = 10000;
    for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { if (Datchik[Pour].Y < mini) { mini = Datchik[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { if (SilovoePitanie[Pour].Y < mini) { mini = SilovoePitanie[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { if (UpravleniePitanie[Pour].Y < mini) { mini = UpravleniePitanie[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { if (PeresechenieSilovoe[Pour].Y < mini) { mini = PeresechenieSilovoe[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { if (PeresechenieUpravlenie[Pour].Y < mini) { mini = PeresechenieUpravlenie[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) { if (Gidrocilindr[Pour].Y < mini) { mini = Gidrocilindr[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) { if (Raspredelitel[Pour].Y < mini) { mini = Raspredelitel[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) { if (Pamyat[Pour].Y < mini) { mini = Pamyat[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { if (Sequenceur[Pour].Y < mini) { mini = Sequenceur[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Kran; Pour++) { if (Kran[Pour].Y < mini) { mini = Kran[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { if (Manometr[Pour].Y < mini) { mini = Manometr[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { if (Vyhod[Pour].Y < mini) { mini = Vyhod[Pour].Y } }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { if (Texte[Pour].Y < mini) { mini = Texte[Pour].Y } }

    return mini;
  }

