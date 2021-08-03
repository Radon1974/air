var Objet2 = '', Celui_La2 = 0

//Добавить объект
function Ajoute_Objet() {  //
  var Objet = '';
  var Pour = 0, Celui_La = 0, Lax = 0, Lay = 0;
  var Tip_Donc = '';
  var requete = '';
  var Pour3 = 0;
  var Pasbon = false;


  Objet = 'Tout';
  Staryj_Faktor = Faktor;
  Faktor = 1;
  ClearDevice();
  Couleur('#000000');
  PetitMenu('#A6CAF0', '<Новый Компонент>   Укажите компонент');
  Staryj_Nb_Gidrocilindr = Nb_Gidrocilindr;
  Staryj_Nb_Raspredelitel = Nb_Raspredelitel;
  Staryj_Nb_Datchik = Nb_Datchik;
  Staryj_Nb_Sila = Nb_SilovoePitanie;
  Staryj_Nb_UpravleniePitanie = Nb_UpravleniePitanie;
  Staryj_Nb_PeresechenieUpravlenie = Nb_PeresechenieUpravlenie;
  Staryj_Nb_PeresechenieSilovoe = Nb_PeresechenieSilovoe;
  Staryj_Nb_Commande = Nb_Commande;
  Staryj_Nb_Canal = Nb_CanalSilovoe;
  Staryj_Nb_CanalUpravlenie = Nb_CanalUpravlenie;
  Staryj_Nb_Pamyat = Nb_Pamyat;
  Staryj_Nb_Sequenceur = Nb_Sequenceur;
  Staryj_Nb_Kran = Nb_Kran;
  Staryj_Nb_Manometr = Nb_Manometr;
  Staryj_Nb_Vyhod = Nb_Vyhod;
  Staryj_Nb_Texte = Nb_Texte;
  Nb_Texte = 0; //Лишняя
  if (Nb_Gidrocilindr < Max_Gidrocilindr - 4) {
    Sozdat_Gidrocilindr(80, 30, 'Simple_R');
    Sozdat_Gidrocilindr(80, 95, 'Double2');
    Sozdat_Gidrocilindr(45, 320, 'Double_V');
  }

  if (Nb_Raspredelitel < Max_Raspredelitel - 14) {
    Sozdat_Raspredelitel(270, 225, '_3_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
    Sozdat_Raspredelitel(608, 225, '_3_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
    Sozdat_Raspredelitel(430, 225, '_3_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
    Sozdat_Raspredelitel(270, 280, '_4_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
    Sozdat_Raspredelitel(608, 280, '_4_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
    Sozdat_Raspredelitel(430, 280, '_4_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
    Sozdat_Raspredelitel(270, 335, '_5_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
    Sozdat_Raspredelitel(608, 335, '_5_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
    Sozdat_Raspredelitel(430, 335, '_5_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
    Sozdat_Raspredelitel(270, 170, '_2_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
    Sozdat_Raspredelitel(430, 170, '_2_2_', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
    Sozdat_Raspredelitel(608, 170, '_2_2', 'Tolkatel_Levyj', 'Pruzhina_Pravyj', 1);
    Sozdat_Raspredelitel(608, 30, '_4_3', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
    Sozdat_Raspredelitel(608, 85, '_5_3', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
    Otxy(750, 225, '3/2');
    Otxy(750, 280, '4/2');
    Otxy(750, 335, '5/2');
    Otxy(750, 170, '2/2');
    Otxy(760, 40, '4/3');
    Otxy(760, 95, '5/3');
    Otxy(380, 380, 'бистабильный');
    Otxy(640, 380, 'моностабильный');
  }

  if (Nb_Datchik < Max_Datchik - 7) {
    Sozdat_Datchik(20, 450, 'A_Tolkatel', 1);
    Sozdat_Datchik(70, 450, 'A_Tolkatel_Bistable', 1);
    Sozdat_Datchik(120, 450, 'A_Galet', 1);
    Sozdat_Datchik(430, 20, 'Et', 1);
    Sozdat_Datchik(480, 20, 'Ou', 1);
    Sozdat_Datchik(530, 20, 'Inhibition', 1);
    Sozdat_Datchik(170, 460, 'A_Galet_V', 1);
  }

  if (Nb_Pamyat < Max_Pamyat - 1) { Sozdat_Pamyat(480, 80, 2) }

  if (Nb_Sequenceur < Max_Sequenceur - 1) {
    Sozdat_Sequenceur(20, 370, 3);
    Sequenceur[Nb_Sequenceur].Etat = 1;
    Otobrazit_Etat_Sequenceur(Nb_Sequenceur);
  }

  if (Nb_Kran < Max_Kran - 2) {
    Sozdat_Kran(150, 170, 'Kran', 1);
    Sozdat_Kran(150, 225, 'Obrat_klapan', 1);
  }

  if (Nb_Manometr < Max_Manometr - 1) { Sozdat_Manometr(150, 300) }
  if (Nb_Vyhod < Max_Vyhod - 1) { Sozdat_Vyhod(640, 420) }
  if (Nb_SilovoePitanie < Max_SilovoePitanie - 1) { Sozdat_SilovoePitanie(640, 460) }
  if (Nb_UpravleniePitanie < Max_UpravleniePitanie - 1) { Sozdat_UpravleniePitanie(640, 500) }
  if (Nb_PeresechenieSilovoe < Max_PeresechenieSilovoe - 1) { Sozdat_PeresechenieSilovoe(680, 460) }
  if (Nb_PeresechenieUpravlenie < Max_PeresechenieUpravlenie - 1) { Sozdat_PeresechenieUpravlenie(680, 500) }


  for (let Pour = Staryj_Nb_Gidrocilindr + 1; Pour <= Nb_Gidrocilindr; Pour++) { Otobrazit_Gidrocilindr(Pour, '#000000', true) }
  for (let Pour = Staryj_Nb_Raspredelitel + 1; Pour <= Nb_Raspredelitel; Pour++) { Otobrazit_Raspredelitel(Pour, '#000000', true) }
  for (let Pour = Staryj_Nb_Datchik + 1; Pour <= Nb_Datchik; Pour++) { Otobrazit_Datchik(Pour, '#000000', true) }
  for (let Pour = Staryj_Nb_Sila + 1; Pour <= Nb_SilovoePitanie; Pour++) { Otobrazit_SilovoePitanie(Pour, '#FF0000', false) }
  for (let Pour = Staryj_Nb_UpravleniePitanie + 1; Pour <= Nb_UpravleniePitanie; Pour++) { Otobrazit_UpravleniePitanie(Pour, '#FF00FF', false) }
  for (let Pour = Staryj_Nb_PeresechenieUpravlenie + 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { Otobrazit_PeresechenieUpravlenie(Pour, false) }
  for (let Pour = Staryj_Nb_PeresechenieSilovoe + 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { Otobrazit_PeresechenieSilovoe(Pour, false) }
  for (let Pour = Staryj_Nb_Pamyat + 1; Pour <= Nb_Pamyat; Pour++) { Otobrazit_Pamyat(Pour, 15, true) }
  for (let Pour = Staryj_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) { Otobrazit_Sequenceur(Pour, true) }
  for (let Pour = Staryj_Nb_Kran + 1; Pour <= Nb_Kran; Pour++) { Otobrazit_Kran(Pour, '#000000', true) }
  for (let Pour = Staryj_Nb_Manometr + 1; Pour <= Nb_Manometr; Pour++) { Otobrazit_Manometr(Pour, '#000000', true) }
  for (let Pour = Staryj_Nb_Vyhod + 1; Pour <= Nb_Vyhod; Pour++) { Otobrazit_Vyhod(Pour, '#000000') }

  Couleur('#FF0000');
  Otxy(600, 480, 'Силовой источник');
  Couleur('#FF00FF');
  Otxy(600, 520, 'Управляющий источник');
  Couleur('#000000');
  Otxy(620, 440, 'Выход');
  Otxy(200, 490, 'Пересечения должны быть созданы до подачи каналов');
  Otxy(150, 420, 'Поместите колесо датчиков положения в конец стержней цилиндров');
  Otxy(360, 130, 'Память должна быть включена');
  //Выбрать компонент
  Pointe_Objet(Objet, '#0000FF');


}

//Добавить объект2
function Ajoute_Objet2(Objet, Celui_La) {  //

  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;
  if (Objet == 'Un_Gidrocil') { if (Gidrocilindr[Celui_La].Modele == 'Double_V') { Immonde_rustine_double_v = true } }
  if (Objet == 'Un_Dat') { if (Datchik[Celui_La].Modele == 'A_Galet_V') { Immonde_rustine_galet_v = true } }

  Nb_Gidrocilindr = Staryj_Nb_Gidrocilindr;
  Nb_Raspredelitel = Staryj_Nb_Raspredelitel;
  Nb_Datchik = Staryj_Nb_Datchik;
  Nb_SilovoePitanie = Staryj_Nb_Sila;
  Nb_UpravleniePitanie = Staryj_Nb_UpravleniePitanie;
  Nb_PeresechenieUpravlenie = Staryj_Nb_PeresechenieUpravlenie;
  Nb_PeresechenieSilovoe = Staryj_Nb_PeresechenieSilovoe;
  Nb_Commande = Staryj_Nb_Commande;
  Nb_Pamyat = Staryj_Nb_Pamyat;
  Nb_Sequenceur = Staryj_Nb_Sequenceur;
  Nb_Kran = Staryj_Nb_Kran;
  Nb_Manometr = Staryj_Nb_Manometr;
  Nb_Vyhod = Staryj_Nb_Vyhod;
  Nb_Texte = Staryj_Nb_Texte;
  Raz_Staryj();
  Faktor = Staryj_Faktor;
  ClearDevice();
  if (Objet == 'Rien') {
    Redess(false);
    PetitMenu('#FFFFFF', 'Выход');
    return false;
  }

  Redess(false);
  PetitMenu('#A6CAF0', '<Новый Компонент>   Положение компонента ?');


  if ((Objet == 'Un_Dat') && ([4, 5, 6].includes(Celui_La - Nb_Datchik))) {
    Tip_Donc = 'Une_Cellule';
    Objet2 = Objet;
    Tip_Donc2 = Tip_Donc;


  } else {
    Tip_Donc = Objet;
    Objet2 = Objet;
    Tip_Donc2 = Tip_Donc;

  }
  Immonde_rustine_double_v = false;
  Immonde_rustine_galet_v = false;

}

//Добавить объект3
function Ajoute_Objet3(Objet, Lax, Lay, Tip_Donc, Celui_La) {  //

  if (Tip_Donc == 'Ouste') { return false };
  switch (Objet) {
    case 'Un_Gidrocil':
      Sozdat_Gidrocilindr(Lax, Lay, Gidrocilindr[Celui_La].Modele);
      break;
    case 'Un_Raspred':

      Celui_La = Celui_La - Nb_Raspredelitel;

      switch (Celui_La) {
        case 1:
          Sozdat_Raspredelitel(Lax, Lay, '_3_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
          break;
        case 2:
          Sozdat_Raspredelitel(Lax, Lay, '_3_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
          break;
        case 3:
          Sozdat_Raspredelitel(Lax, Lay, '_3_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
          break;
        case 4:
          Sozdat_Raspredelitel(Lax, Lay, '_4_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
          break;
        case 5:
          Sozdat_Raspredelitel(Lax, Lay, '_4_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
          break;
        case 6:
          Sozdat_Raspredelitel(Lax, Lay, '_4_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
          break;
        case 7:
          Sozdat_Raspredelitel(Lax, Lay, '_5_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
          break;
        case 8:
          Sozdat_Raspredelitel(Lax, Lay, '_5_2', 'Upravlenie_Levyj', 'Pruzhina_Pravyj', 1);
          break;
        case 9:
          Sozdat_Raspredelitel(Lax, Lay, '_5_2', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
          break;
        case 10:
          Sozdat_Raspredelitel(Lax, Lay, '_2_2', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
          break;
        case 11:
          Sozdat_Raspredelitel(Lax, Lay, '_2_2_', 'Tolkatel_Levyj', 'Pila_Pravyj', 1);
          break;
        case 12:
          Sozdat_Raspredelitel(Lax, Lay, '_2_2', 'Tolkatel_Levyj', 'Pruzhina_Pravyj', 1);
          break;
        case 13:
          Sozdat_Raspredelitel(Lax, Lay, '_4_3', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
          break;
        case 14:
          Sozdat_Raspredelitel(Lax, Lay, '_5_3', 'Upravlenie_Levyj', 'Upravlenie_Pravyj', 1);
          break;
      }
      break;
    case 'Un_Dat':
      Celui_La = Celui_La - Nb_Datchik;
      switch (Celui_La) {
        case 1:
          Sozdat_Datchik(Lax, Lay, 'A_Tolkatel', 1);
          break;
        case 2:
          Sozdat_Datchik(Lax, Lay, 'A_Tolkatel_Bistable', 1);
          break;
        case 3:
          Sozdat_Datchik(Lax, Lay, 'A_Galet', 1);
          Pasbon = true;

          for (let Pour3 = 1; Pour3 <= Nb_Gidrocilindr; Pour3++) {
            if ((Lax > Gidrocilindr[Pour3].X + (0) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie - 13) &&
              (Lax < Gidrocilindr[Pour3].X + (9) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie + 13) && ((Gidrocilindr[Pour3].Y - Lay) < 0) &&
              (Math.abs(Gidrocilindr[Pour3].Y - Lay) < 40)) { Pasbon = false }
          }
          if (Pasbon) {
            Otobrazit_Datchik(Nb_Datchik, '#FF0000', true);
            PetitMenu('#000000', 'Этот концевой выключатель, похоже, не может эксплуатироваться с существующим гидроцилиндром!');
          }

          break;
        case 4:
          Sozdat_Datchik(Lax, Lay, 'Et', 1);
          break;
        case 5:
          Sozdat_Datchik(Lax, Lay, 'Ou', 1);
          break;
        case 6:
          Sozdat_Datchik(Lax, Lay, 'Inhibition', 1);
          break;
        case 7:
          Sozdat_Datchik(Lax, Lay, 'A_Galet_V', 1);
          Pasbon = true;
          for (let Pour3 = 1; Pour3 <= Nb_Gidrocilindr; Pour3++) {
            if ((Math.abs((Gidrocilindr[Pour3].X - (Datchik[Nb_Datchik].X - DLargeur / 3 - DLargeur / 8))) < 15)
              && (Datchik[Nb_Datchik].Y > Gidrocilindr[Pour3].Y - (Maxtige - 1) * L_Soedinenie - VL_Tige - 1.5 * L_Soedinenie - 15)
              && (Datchik[Nb_Datchik].Y < Gidrocilindr[Pour3].Y - (Mintige - 1) * L_Soedinenie - VL_Tige - 1.5 * L_Soedinenie + 10)) { Pasbon = false }
          }

          if (Pasbon) {
            Otobrazit_Datchik(Nb_Datchik, '#FF0000', true);
            PetitMenu('#000000', 'Этот концевой выключатель, похоже, не может эксплуатироваться с существующим гидроцилиндром!');
          }
          break;
      }
      break;
    case 'Une_Sila':
      //str = Ed('Ведите давление в формате: *.**', '', true);
      Sozdat_SilovoePitanie(Lax, Lay);  //Sozdat_SilovoePitanie(Lax, Lay, Number(str));
      break;
    case 'Une_UpravleniePitanie':
      Sozdat_UpravleniePitanie(Lax, Lay);
      break;
    case 'Un_PeresechenieUpravlenie':
      Sozdat_PeresechenieUpravlenie(Lax, Lay);
      break;
    case 'Un_PeresechenieSilovoe':
      Sozdat_PeresechenieSilovoe(Lax, Lay);
      break;
    case 'Une_Pamyat':
      Sozdat_Pamyat(Lax, Lay, 1);
      break;
    case 'Un_Sequenceur':
      requete = '9';
      while ((requete.length != 1) || !(['2', '3', '4', '5', '6', '7', '8'].includes(requete))) { requete = Ed('Ведите количество шагов (от 2 до 8)', '', true); }
      Sozdat_Sequenceur(Lax, Lay, parseInt(requete));
      break;
    case 'Un_Kran':
      Celui_La = Celui_La - Nb_Kran;
      switch (Celui_La) {
        case 1:
          Sozdat_Kran(Lax, Lay, 'Kran', 1);
          break;
        case 2:
          Sozdat_Kran(Lax, Lay, 'Obrat_klapan', 1);
          break;
      }
      break;
    case 'Un_Manometr':
      Sozdat_Manometr(Lax, Lay);
      break;
    case 'Un_Vyhod':
      Sozdat_Vyhod(Lax, Lay);
      break;
  }
}

//Точки объекта
function Pointe_Objet(Objet, Co) {  //
  var Point = Array[1, 2];
  var Pour = 0;
  var X = 0;
  var Y = 0;
  var Pour2 = 0;
  var Combien = 0;
  var Di = 0;
  var D = 0;
  var Xd = 0;
  var Yd = 0;
  var Nombre = 0;
  var C = '';
  var PourPt = 0;
  var Prox = 0;
  var Acote = true;





  function PaveP(X, Y) {  //X,Y - координаты
    NPave(X, Y, Co);
    if (Nb_Point < 200) { Nb_Point++ }
    Les_points[Nb_Point][1] = X * Faktor;
    Les_points[Nb_Point][2] = Y * Faktor;
  }


  funcCursor('pointer');  //Курсор в виде руки
  Acote = false;
  if (Objet == 'Action') { Prox = 13 } else { Prox = 10 } //Проверить
  Nb_Point = 0;
  Couleur(Co);
  if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
    for (let Pour = Staryj_Nb_Sila + 1; Pour <= Nb_SilovoePitanie; Pour++) { PaveP(SilovoePitanie[Pour].X, SilovoePitanie[Pour].Y) }
    for (let Pour = Staryj_Nb_UpravleniePitanie + 1; Pour <= Nb_UpravleniePitanie; Pour++) { PaveP(UpravleniePitanie[Pour].X, UpravleniePitanie[Pour].Y) }
    for (let Pour = Staryj_Nb_Gidrocilindr + 1; Pour <= Nb_Gidrocilindr; Pour++) { PaveP(Gidrocilindr[Pour].X, Gidrocilindr[Pour].Y) }
    for (let Pour = Staryj_Nb_Pamyat + 1; Pour <= Nb_Pamyat; Pour++) { PaveP(Pamyat[Pour].X, Pamyat[Pour].Y) }
    for (let Pour = Staryj_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) { PaveP(Sequenceur[Pour].X, Sequenceur[Pour].Y) }
    for (let Pour = Staryj_Nb_PeresechenieSilovoe + 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { PaveP(PeresechenieSilovoe[Pour].X, PeresechenieSilovoe[Pour].Y) }
    for (let Pour = Staryj_Nb_PeresechenieUpravlenie + 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { PaveP(PeresechenieUpravlenie[Pour].X, PeresechenieUpravlenie[Pour].Y) }
    for (let Pour = Staryj_Nb_Manometr + 1; Pour <= Nb_Manometr; Pour++) { PaveP(Manometr[Pour].X, Manometr[Pour].Y) }
    for (let Pour = Staryj_Nb_Vyhod + 1; Pour <= Nb_Vyhod; Pour++) { PaveP(Vyhod[Pour].X, Vyhod[Pour].Y) }
    for (let Pour = 1; Pour <= Nb_Texte; Pour++) { PaveP(Texte[Pour].X, Texte[Pour].Y) }
  }
  if (Objet == 'Tout') {
    for (let Pour = Staryj_Nb_Canal + 1; Pour <= Nb_CanalSilovoe; Pour++) { PaveP((CanalSilovoe[Pour].ParcoursX[2] + CanalSilovoe[Pour].ParcoursX[1]) / 2, (CanalSilovoe[Pour].ParcoursY[2] + CanalSilovoe[Pour].ParcoursY[1]) / 2) }
    for (let Pour = Staryj_Nb_CanalUpravlenie + 1; Pour <= Nb_CanalUpravlenie; Pour++) { PaveP((CanalUpravlenie[Pour].ParcoursX[2] + CanalUpravlenie[Pour].ParcoursX[1]) / 2, (CanalUpravlenie[Pour].ParcoursY[2] + CanalUpravlenie[Pour].ParcoursY[1]) / 2) }
  }
  if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
    for (let Pour = Staryj_Nb_Raspredelitel + 1; Pour <= Nb_Raspredelitel; Pour++) {
      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal') || (['Tolkatel_Levyj'].includes(Raspredelitel[Pour].Com[1].Tip))) { PaveP(Raspredelitel[Pour].X, Raspredelitel[Pour].Y) }
    }
  }

  if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
    for (let Pour = Staryj_Nb_Datchik + 1; Pour <= Nb_Datchik; Pour++) {
      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal') || (['A_Tolkatel', 'A_Levier', 'A_Tolkatel_Bistable', 'A_Levier_Bistable'].includes(Datchik[Pour].Modele))) { PaveP(Datchik[Pour].X, Datchik[Pour].Y) }
    }
  }

  if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
    for (let Pour = Staryj_Nb_Kran + 1; Pour <= Nb_Kran; Pour++) {
      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal') || (['Kran', 'Obrat_klapan'].includes(Kran[Pour].Modele))) { PaveP(Kran[Pour].X, Kran[Pour].Y) }
    }
  }

  X = X_s;
  Y = Y_s;

  //if (Objet == 'Action') { PaveP(20, 30) }
  //while (true) {

  /*if (Objet == 'Action') { Otobrazit_Temps(20, 30, false) }*/
  if (Acote) { funcCursor('pointer') } else { funcCursor('default') } // Курсор в виде руки или стрелки
  //Levyj = false;
  //Pravyj = false;
  Objet2 = Objet; //Передать данные в другую функцию
  Prox2 = Prox; //Передать данные в другую функцию

}

//Точки объекта2
function Pointe_Objet2(Objet, Prox) {  //
  var Di = 0;
  var PourPt = 0;
  //var Prox = 0; 

  Acote = false;
  PourPt = 1;

  //Дистанция
  function Dist(X, Y) {  //X,Y - координаты
    if (Math.sqrt(Math.pow(X_s - X * Faktor, 2) + Math.pow(Y_s - Y * Faktor, 2)) < Prox) { return true } else { return false }
  }


  while (PourPt <= Nb_Point) {   //Точки выбора компонентов

    //Di = Math.sqrt(Math.pow((X_s - Les_points[PourPt] [1]), 2) + Math.pow((Y_s - Les_points[PourPt] [2]), 2));
    Di = Math.sqrt(Math.pow(X_s - (Les_points[PourPt][1]) * Faktor, 2) + Math.pow(Y_s - (Les_points[PourPt][2]) * Faktor, 2));
    //console.log("Расстояние", Di, "x=", Les_points[PourPt] [1], "y=", Les_points[PourPt] [2] );

    if ((Di < MobDist) && (Di > 0)) { //было от 5 до 1

      Acote = true;
      X_s = Math.round(Les_points[PourPt][1]);
      Y_s = Math.round(Les_points[PourPt][2]);
      PourPt = Nb_Point + 1;
    }
    PourPt++;
  }
  X = X_s;
  Y = Y_s;


  if (Pravyj) {    //Нажата правая кнопка мыши - выход

    Objet = 'Rien';
    Celui_La = 0;
    Objet2 = Objet;
    Celui_La2 = Celui_La;

    funcCursor('default');   //Курсор в виде стрелки
    return false;
  } else {
    if (Levyj) {

      if (Heure) {

        if (Dist(20, 30)) {

          Celui_La = 255;
          Objet = 'Temps';
          Celui_La2 = Celui_La;
          Objet2 = Objet;
          return false;
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Sila + 1; Pour <= Nb_SilovoePitanie; Pour++) {

          if (Dist(SilovoePitanie[Pour].X, SilovoePitanie[Pour].Y)) {

            Objet = 'Une_Sila';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_PeresechenieSilovoe + 1; Pour <= Nb_PeresechenieSilovoe; Pour++) {
          if (Dist(PeresechenieSilovoe[Pour].X, PeresechenieSilovoe[Pour].Y)) {
            Objet = 'Un_PeresechenieSilovoe';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_PeresechenieUpravlenie + 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) {
          if (Dist(PeresechenieUpravlenie[Pour].X, PeresechenieUpravlenie[Pour].Y)) {
            Objet = 'Un_PeresechenieUpravlenie';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_UpravleniePitanie + 1; Pour <= Nb_UpravleniePitanie; Pour++) {
          if (Dist(UpravleniePitanie[Pour].X, UpravleniePitanie[Pour].Y)) {
            Objet = 'Une_UpravleniePitanie';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Raspredelitel + 1; Pour <= Nb_Raspredelitel; Pour++) {
          if (Dist(Raspredelitel[Pour].X, Raspredelitel[Pour].Y)) {
            Objet = 'Un_Raspred';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Gidrocilindr + 1; Pour <= Nb_Gidrocilindr; Pour++) {
          if (Dist(Gidrocilindr[Pour].X, Gidrocilindr[Pour].Y)) {
            Objet = 'Un_Gidrocil';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Datchik + 1; Pour <= Nb_Datchik; Pour++) {
          if (Dist(Datchik[Pour].X, Datchik[Pour].Y)) {
            Objet = 'Un_Dat';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Pamyat + 1; Pour <= Nb_Pamyat; Pour++) {
          if (Dist(Pamyat[Pour].X, Pamyat[Pour].Y)) {
            Objet = 'Une_Pamyat';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Sequenceur + 1; Pour <= Nb_Sequenceur; Pour++) {
          if (Dist(Sequenceur[Pour].X, Sequenceur[Pour].Y)) {
            Objet = 'Un_Sequenceur';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Action') || (Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = Staryj_Nb_Kran + 1; Pour <= Nb_Kran; Pour++) {
          if (Dist(Kran[Pour].X, Kran[Pour].Y)) {
            Objet = 'Un_Kran';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = 1; Pour <= Nb_Manometr; Pour++) {
          if (Dist(Manometr[Pour].X, Manometr[Pour].Y)) {
            Objet = 'Un_Manometr';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) {
          if (Dist(Vyhod[Pour].X, Vyhod[Pour].Y)) {
            Objet = 'Un_Vyhod';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }
      
      if ((Objet == 'Tout') || (Objet == 'Toutsaufcanal')) {
        for (let Pour = 1; Pour <= Nb_Texte; Pour++) {
          if (Dist(Texte[Pour].X, Texte[Pour].Y)) {
            Objet = 'Un_Texte';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if (Objet == 'Tout') {
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
          if (Dist((CanalSilovoe[Pour].ParcoursX[2] + CanalSilovoe[Pour].ParcoursX[1]) / 2, (CanalSilovoe[Pour].ParcoursY[2] + CanalSilovoe[Pour].ParcoursY[1]) / 2)) {
            Objet = 'Un_Canal';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }

      if (Objet == 'Tout') {
        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
          if (Dist((CanalUpravlenie[Pour].ParcoursX[2] + CanalUpravlenie[Pour].ParcoursX[1]) / 2, (CanalUpravlenie[Pour].ParcoursY[2] + CanalUpravlenie[Pour].ParcoursY[1]) / 2)) {
            Objet = 'Un_CanalUpravlenie';
            Celui_La = Pour;
            Objet2 = Objet;
            Celui_La2 = Celui_La;
            return false;
          }
        }
      }
    }
  }
}       