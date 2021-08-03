
//Стереть канал
function Efface_Canal(Celui_La2) {  //
  var Pour = 0;
  for (let Pour = Celui_La2; Pour <= Nb_CanalSilovoe - 1; Pour++) {
    CanalSilovoe[Pour] = CanalSilovoe[Pour + 1];
  }
  Nb_CanalSilovoe--;
}

//Стереть канал пилота
function Efface_CanalUpravlenie(Celui_La2) {  //
  var Pour = 0;
  for (let Pour = Celui_La2; Pour <= Nb_CanalUpravlenie - 1; Pour++) {
    CanalUpravlenie[Pour] = CanalUpravlenie[Pour + 1];
  }
  Nb_CanalUpravlenie--;
}

//Очистка ненужных элементов
function ClearObjet() {
  Gidrocilindr.splice(Nb_Gidrocilindr + 1, Max_Gidrocilindr);
  Raspredelitel.splice(Nb_Raspredelitel + 1, Max_Raspredelitel);
  Commande.splice(Nb_Commande + 1, Max_Commande);
  CanalSilovoe.splice(Nb_CanalSilovoe + 1, Max_CanalSilovoe);
  CanalUpravlenie.splice(Nb_CanalUpravlenie + 1, Max_CanalUpravlenie);
  SilovoePitanie.splice(Nb_SilovoePitanie + 1, Max_SilovoePitanie);
  Datchik.splice(Nb_Datchik + 1, Max_Datchik);
  UpravleniePitanie.splice(Nb_UpravleniePitanie + 1, Max_UpravleniePitanie);
  PeresechenieSilovoe.splice(Nb_PeresechenieSilovoe + 1, Max_PeresechenieSilovoe);
  PeresechenieUpravlenie.splice(Nb_PeresechenieUpravlenie + 1, Max_PeresechenieUpravlenie);
  Pamyat.splice(Nb_Pamyat + 1, Max_Pamyat);
  Sequenceur.splice(Nb_Sequenceur + 1, Max_Sequenceur);
  Kran.splice(Nb_Kran + 1, Max_Kran);
  Manometr.splice(Nb_Manometr + 1, Max_Manometr);
  Vyhod.splice(Nb_Vyhod + 1, Max_Vyhod);
  Texte.splice(Nb_Texte + 1, Max_Texte);
}

//Стереть
function Effacer() {  //
  var Pour = 0;

  var Pour2 = 0;

  var On_Efface = false;

  //Очистка вместе с компонентом силовых каналов
  Pointe_Tip = Objet2;
  if (Pointe_Tip == 'Rien') { return false }
  if (['Une_Sila', 'Un_PeresechenieSilovoe', 'Un_Raspred', 'Un_Gidrocil', 'Un_Kran', 'Un_Manometr', 'Un_Vyhod'].includes(Pointe_Tip)) {
    Pour = 1;
    while (Pour <= Nb_CanalSilovoe) {
      On_Efface = false;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
        if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == Pointe_Tip) {
          if (CanalSilovoe[Pour].Soedinenie[Pour2].Lequel == Celui_La2) { On_Efface = true }
          if (CanalSilovoe[Pour].Soedinenie[Pour2].Lequel > Celui_La2) { CanalSilovoe[Pour].Soedinenie[Pour2].Lequel = (CanalSilovoe[Pour].Soedinenie[Pour2].Lequel - 1) }
        }
      }
      if (On_Efface) { Efface_Canal(Pour) } else { Pour++ }
    }
  }
  //Очистка вместе с компонентом каналов управления
  if (['Une_UpravleniePitanie', 'Un_PeresechenieUpravlenie', 'Un_Dat', 'Un_Raspred', 'Une_Pamyat', 'Un_Sequenceur'].includes(Pointe_Tip)) {

    Pour = 1;
    while (Pour <= Nb_CanalUpravlenie) {
      On_Efface = false;
      for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
        if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == Pointe_Tip) {
          if (CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel == Celui_La2) { On_Efface = true }
          if (CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel > Celui_La2) { CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel = (CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel - 1) };
        }
      }
      if (On_Efface) { Efface_CanalUpravlenie(Pour) } else { Pour++ }
    }
  }
  //Очистка самих компонентов
  if (Pointe_Tip == 'Un_Canal') {
    Efface_Canal(Celui_La2);
  } else {
    if (Pointe_Tip == 'Un_CanalUpravlenie') {
      Efface_CanalUpravlenie(Celui_La2)
    } else {
      if (Pointe_Tip == 'Un_Dat') {
        for (let Pour = Celui_La2; Pour <= Nb_Datchik - 1; Pour++) { Datchik[Pour] = Datchik[Pour + 1] }
        Nb_Datchik--;
      } else {
        if (Pointe_Tip == 'Un_Sequenceur') {
          for (let Pour = Celui_La2; Pour <= Nb_Sequenceur - 1; Pour++) { Sequenceur[Pour] = Sequenceur[Pour + 1] }
          Nb_Sequenceur--;
        } else {
          if (Pointe_Tip == 'Une_Pamyat') {
            for (let Pour = Celui_La2; Pour <= Nb_Pamyat - 1; Pour++) { Pamyat[Pour] = Pamyat[Pour + 1] }
            Nb_Pamyat--;
          } else {
            if (Pointe_Tip == 'Un_Raspred') {
              for (let Pour = Celui_La2; Pour <= Nb_Raspredelitel - 1; Pour++) { Raspredelitel[Pour] = Raspredelitel[Pour + 1] }
              Nb_Raspredelitel--;
            } else {
              if (Pointe_Tip == 'Un_Gidrocil') {
                for (let Pour = Celui_La2; Pour <= Nb_Gidrocilindr - 1; Pour++) { Gidrocilindr[Pour] = Gidrocilindr[Pour + 1] }
                Nb_Gidrocilindr--;
              } else {
                if (Pointe_Tip == 'Une_Sila') {
                  for (let Pour = Celui_La2; Pour <= Nb_SilovoePitanie - 1; Pour++) { SilovoePitanie[Pour] = SilovoePitanie[Pour + 1] }
                  Nb_SilovoePitanie--;
                } else {
                  if (Pointe_Tip == 'Une_UpravleniePitanie') {
                    for (let Pour = Celui_La2; Pour <= Nb_UpravleniePitanie - 1; Pour++) { UpravleniePitanie[Pour] = UpravleniePitanie[Pour + 1] }
                    Nb_UpravleniePitanie--;
                  } else {
                    if (Pointe_Tip == 'Un_PeresechenieSilovoe') {
                      for (let Pour = Celui_La2; Pour <= Nb_PeresechenieSilovoe - 1; Pour++) { PeresechenieSilovoe[Pour] = PeresechenieSilovoe[Pour + 1] }
                      Nb_PeresechenieSilovoe--;
                    } else {
                      if (Pointe_Tip == 'Un_Texte') {
                        for (let Pour = Celui_La2; Pour <= Nb_Texte - 1; Pour++) { Texte[Pour] = Texte[Pour + 1] }
                        Nb_Texte--;
                      } else {
                        if (Pointe_Tip == 'Un_PeresechenieUpravlenie') {
                          for (let Pour = Celui_La2; Pour <= Nb_PeresechenieUpravlenie - 1; Pour++) { PeresechenieUpravlenie[Pour] = PeresechenieUpravlenie[Pour + 1] }
                          Nb_PeresechenieUpravlenie--;
                        } else {
                          if (Pointe_Tip == 'Un_Kran') {
                            for (let Pour = Celui_La2; Pour <= Nb_Kran - 1; Pour++) { Kran[Pour] = Kran[Pour + 1] }
                            Nb_Kran--;
                          } else {
                            if (Pointe_Tip == 'Un_Manometr') {
                              for (let Pour = Celui_La2; Pour <= Nb_Manometr - 1; Pour++) { Manometr[Pour] = Manometr[Pour + 1] }
                              Nb_Manometr--;
                            } else {
                              if (Pointe_Tip == 'Un_Vyhod') {
                                for (let Pour = Celui_La2; Pour <= Nb_Vyhod - 1; Pour++) { Vyhod[Pour] = Vyhod[Pour + 1] }
                                Nb_Vyhod--;
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
          }
        }
      }
    }
    Redess(false);
    ClearObjet();
	}
}
