// Отображение номеров на экране
function Otobrazit_Nomera() {  
  var Pour = 0;
  //ctx.font = '10px Arial'

  //for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { Otobrazit_CanalSilovoe_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { Otobrazit_CanalUpravlenie_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) { Otobrazit_Gidrocilindr_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) { Otobrazit_Raspredelitel_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { Otobrazit_Datchik_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { Otobrazit_SilovoePitanie_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { Otobrazit_UpravleniePitanie_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { Otobrazit_PeresechenieSilovoe_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { Otobrazit_PeresechenieUpravlenie_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) { Otobrazit_Pamyat_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) { Otobrazit_Sequenceur_Nomera(Pour) }
  for (let Pour = 1; Pour <= Nb_Kran; Pour++) { Otobrazit_Kran_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Otobrazit_Manometr_Nomera(Pour) }
  //for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { Otobrazit_Vyhod_Nomera(Pour) }
  

  //ctx.font = '10px Arial'
}

function Vybor_Cveta_Silovoe(Nomer) {

    switch (Nomer) {
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

function Vybor_Cveta_Upravlenie(Nomer) {

    switch (Nomer) {
      case 0: Couleur('#000000');
        break;
      case 1: Couleur('#FF00FF');
        break;
      case 2: Couleur('#808080');
        break;
    }
	
}

//Отобразить номера канала силового
function Otobrazit_CanalSilovoe_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(CanalSilovoe[Nomer].Etat)

	//ctx.font = (Math.round(Texte[Nomer].Lataille * 8 * Faktor) + 4) + 'px Arial';
	Otxy(Math.round(((CanalSilovoe[Nomer].ParcoursX[2] + CanalSilovoe[Nomer].ParcoursX[1]) / 2) + 2), Math.round(((CanalSilovoe[Nomer].ParcoursY[2] + CanalSilovoe[Nomer].ParcoursY[1]) / 2) - 2), Nomer);
	//ctx.font.height = (Math.round(8 * Faktor)) + 'px Arial';
	Couleur('#000000');
}

//Отобразить номера канала управления
function Otobrazit_CanalUpravlenie_Nomera(Nomer) {

	Vybor_Cveta_Upravlenie(CanalUpravlenie[Nomer].Etat)

	Otxy(Math.round(((CanalUpravlenie[Nomer].ParcoursX[2] + CanalUpravlenie[Nomer].ParcoursX[1]) / 2) + 2), Math.round(((CanalUpravlenie[Nomer].ParcoursY[2] + CanalUpravlenie[Nomer].ParcoursY[1]) / 2) - 2), Nomer);

	Couleur('#000000');
}

//Отобразить номера канала гидроцилиндра
function Otobrazit_Gidrocilindr_Nomera(Nomer) {
	
  switch (Gidrocilindr[Nomer].Modele) {
      case 'Simple_R':
      case 'R_Simple':

	Vybor_Cveta_Silovoe(Gidrocilindr[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Gidrocilindr[Nomer].EntreeX[1] + 2), Math.round(Gidrocilindr[Nomer].EntreeY[1] + 2), '1');
        break;

      case 'Double2':
      case 'Double_T':
      case 'Double_A':
      case 'Double_T_A':

	Vybor_Cveta_Silovoe(Gidrocilindr[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Gidrocilindr[Nomer].EntreeX[1] + 2), Math.round(Gidrocilindr[Nomer].EntreeY[1] + 2), '1');
	    
	Vybor_Cveta_Silovoe(Gidrocilindr[Nomer].Etat_Ext[2])
	
      Otxy(Math.round(Gidrocilindr[Nomer].EntreeX[2] + 2), Math.round(Gidrocilindr[Nomer].EntreeY[2] + 2), '2');
        break;
		
      case 'Double_V':

	Vybor_Cveta_Silovoe(Gidrocilindr[Nomer].Etat_Ext[1])
	
	  Otxy(Math.round(Gidrocilindr[Nomer].EntreeX[1] - 8), Math.round(Gidrocilindr[Nomer].EntreeY[1] - 2), '1');
  
	Vybor_Cveta_Silovoe(Gidrocilindr[Nomer].Etat_Ext[2])
	
    Otxy(Math.round(Gidrocilindr[Nomer].EntreeX[2] - 8), Math.round(Gidrocilindr[Nomer].EntreeY[2] - 2), '2');  
        break;  
  }
  Couleur('#000000');
  
}

//Отобразить номера распределителя
function Otobrazit_Raspredelitel_Nomera(Nomer) {
	
	/*Vybor_Cveta_Upravlenie(Raspredelitel[Nomer].Etat_Ext[0])

	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[0] + 2), Math.round(Raspredelitel[Nomer].ExtY[0] + 11), '0');

	Vybor_Cveta_Upravlenie(Raspredelitel[Nomer].Etat_Ext[6])

	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[6] - 9), Math.round(Raspredelitel[Nomer].ExtY[6] + 11), '6');*/	  

    if (['_2_2_', '_2_2', '_3_2', '_4_2', '_5_2', '_4_3', '_5_3'].includes(Raspredelitel[Nomer].Modele)) {	  
  
	Vybor_Cveta_Silovoe(Raspredelitel[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[1] + 2), Math.round(Raspredelitel[Nomer].ExtY[1] + 11), '1');  
	}
	
    if (['_3_2', '_4_2', '_5_2', '_4_3', '_5_3'].includes(Raspredelitel[Nomer].Modele)) {		
	
	Vybor_Cveta_Silovoe(Raspredelitel[Nomer].Etat_Ext[2])
	
	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[2] + 2), Math.round(Raspredelitel[Nomer].ExtY[2] + 11), '2'); 
	}	  

    if (['_4_2', '_5_2', '_4_3', '_5_3'].includes(Raspredelitel[Nomer].Modele)) {	
  
	Vybor_Cveta_Silovoe(Raspredelitel[Nomer].Etat_Ext[3])
	
	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[3] + 2), Math.round(Raspredelitel[Nomer].ExtY[3] - 2), '3'); 
	}	  

    if (['_2_2_', '_2_2', '_3_2', '_4_2', '_5_2', '_4_3', '_5_3'].includes(Raspredelitel[Nomer].Modele)) {	
 
	Vybor_Cveta_Silovoe(Raspredelitel[Nomer].Etat_Ext[4])
	
	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[4] + 2), Math.round(Raspredelitel[Nomer].ExtY[4] - 2), '4'); 
	}	  

    if (['_5_2', '_5_3'].includes(Raspredelitel[Nomer].Modele)) {	

	Vybor_Cveta_Silovoe(Raspredelitel[Nomer].Etat_Ext[5])
	
	  Otxy(Math.round(Raspredelitel[Nomer].ExtX[5] + 2), Math.round(Raspredelitel[Nomer].ExtY[5] + 11), '5');
	}	  

  Couleur('#000000');
}

//Отобразить номера датчика
function Otobrazit_Datchik_Nomera(Nomer) {

    if (['Et', 'Ou', 'Inhibition'].includes(Datchik[Nomer].Modele)) {
		
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Datchik[Nomer].ExtX[1] - 4), Math.round(Datchik[Nomer].ExtY[1] - 2), '1');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[2])

	  Otxy(Math.round(Datchik[Nomer].ExtX[2] - 4), Math.round(Datchik[Nomer].ExtY[2] - 2), '2');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[3])

	  Otxy(Math.round(Datchik[Nomer].ExtX[3] - 4), Math.round(Datchik[Nomer].ExtY[3] - 2), '3');  
	}

    if (['A_Tolkatel', 'A_Tolkatel_Bistable', 'A_Galet'].includes(Datchik[Nomer].Modele)) {
		
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Datchik[Nomer].ExtX[1] - 8), Math.round(Datchik[Nomer].ExtY[1] - 2), '1');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[2])

	  Otxy(Math.round(Datchik[Nomer].ExtX[2] - 8), Math.round(Datchik[Nomer].ExtY[2] - 2), '2');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[3])

	  Otxy(Math.round(Datchik[Nomer].ExtX[3] + 2), Math.round(Datchik[Nomer].ExtY[3] - 2), '3');  
	}	
	
	if (['A_Galet_V'].includes(Datchik[Nomer].Modele)) {
	
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Datchik[Nomer].ExtX[1] - 8), Math.round(Datchik[Nomer].ExtY[1] + 11), '1');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[2])

	  Otxy(Math.round(Datchik[Nomer].ExtX[2] - 8), Math.round(Datchik[Nomer].ExtY[2] + 11), '2');  
    
	Vybor_Cveta_Upravlenie(Datchik[Nomer].Etat_Ext[3])

	  Otxy(Math.round(Datchik[Nomer].ExtX[3] + 2), Math.round(Datchik[Nomer].ExtY[3] - 2), '3'); 
	
	}
	
	Couleur('#000000');
}

//Отобразить номера источника силового
function Otobrazit_SilovoePitanie_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(1)

	  Otxy(Math.round(SilovoePitanie[Nomer].X + 6), Math.round(SilovoePitanie[Nomer].Y - 2), Nomer);  

	Couleur('#000000');
}

//Отобразить номера источника управления
function Otobrazit_UpravleniePitanie_Nomera(Nomer) {

	Vybor_Cveta_Upravlenie(1)

	  Otxy(Math.round(UpravleniePitanie[Nomer].X + 6), Math.round(UpravleniePitanie[Nomer].Y - 2), Nomer);  

	Couleur('#000000');
}

//Отобразить номера источника силового
function Otobrazit_PeresechenieSilovoe_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(PeresechenieSilovoe[Nomer].Etat)

	  Otxy(Math.round(PeresechenieSilovoe[Nomer].X + 6), Math.round(PeresechenieSilovoe[Nomer].Y - 2), Nomer);  

	Couleur('#000000');
}

//Отобразить номера источника управления
function Otobrazit_PeresechenieUpravlenie_Nomera(Nomer) {

	Vybor_Cveta_Upravlenie(PeresechenieUpravlenie[Nomer].Etat)

	  Otxy(Math.round(PeresechenieUpravlenie[Nomer].X + 6), Math.round(PeresechenieUpravlenie[Nomer].Y - 2), Nomer);  

	Couleur('#000000');
}

//Отобразить номера памяти
function Otobrazit_Pamyat_Nomera(Nomer) {

	Vybor_Cveta_Upravlenie(Pamyat[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Pamyat[Nomer].ExtX[1] - 1), Math.round(Pamyat[Nomer].ExtY[1] + 11), '1');  
    
	Vybor_Cveta_Upravlenie(Pamyat[Nomer].Etat_Ext[2])

	  Otxy(Math.round(Pamyat[Nomer].ExtX[2] - 1), Math.round(Pamyat[Nomer].ExtY[2] + 11), '2');  
    
	Vybor_Cveta_Upravlenie(Pamyat[Nomer].Etat_Ext[3])

	  Otxy(Math.round(Pamyat[Nomer].ExtX[3] - 6), Math.round(Pamyat[Nomer].ExtY[3] + 11), '3'); 
	  
	Vybor_Cveta_Upravlenie(Pamyat[Nomer].Etat_Ext[4])

	  Otxy(Math.round(Pamyat[Nomer].ExtX[4] + 2), Math.round(Pamyat[Nomer].ExtY[4] + 4), '4');  
	
	Couleur('#000000');
}

//Отобразить номера секвенсера
function Otobrazit_Sequenceur_Nomera(Nomer) {
	
  for (let Pour = 1; Pour <= Sequenceur[Nomer].Combien; Pour++) {
	  
	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[Pour])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[Pour] + 2), Math.round(Sequenceur[Nomer].ExtY[Pour] ), Pour); 
  }	  
    
  for (let Pour = 1; Pour <= Sequenceur[Nomer].Combien; Pour++) {
	  
	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[Pour + 8])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[Pour + 8] + 2), Math.round(Sequenceur[Nomer].ExtY[Pour + 8] + 9), Pour + 8); 
  }	 

	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[17])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[17] - 4), Math.round(Sequenceur[Nomer].ExtY[17] - 2), 17);
  
	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[18])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[18] - 14), Math.round(Sequenceur[Nomer].ExtY[18] + 3), 18);

	 	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[17])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[19] - 14), Math.round(Sequenceur[Nomer].ExtY[19] + 6), 19);
	  
	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[20])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[20] - 4), Math.round(Sequenceur[Nomer].ExtY[20] + 11), 20);  	  

  for (let Pour = 1; Pour <= 2; Pour++) {
	  
	Vybor_Cveta_Upravlenie(Sequenceur[Nomer].Etat_Ext[Pour + 20])
	
	  Otxy(Math.round(Sequenceur[Nomer].ExtX[Pour + 20] - 10), Math.round(Sequenceur[Nomer].ExtY[Pour + 20] - 2), Pour + 20); 
  }	 
	
	Couleur('#000000');
}

//Отобразить номера крана
function Otobrazit_Kran_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(Kran[Nomer].Etat_Ext[1])

	  Otxy(Math.round(Kran[Nomer].EntreeX[1] + 2), Math.round(Kran[Nomer].EntreeY[1] - 2), '1');  
    
	Vybor_Cveta_Silovoe(Kran[Nomer].Etat_Ext[2])

	  Otxy(Math.round(Kran[Nomer].EntreeX[2] - 8), Math.round(Kran[Nomer].EntreeY[2] - 2), '2');  
    
	Couleur('#000000');
}

//Отобразить номера манометра
function Otobrazit_Manometr_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(Manometr[Nomer].Etat)

	  Otxy(Math.round(Manometr[Nomer].X + 6), Math.round(Manometr[Nomer].Y - 2), Nomer);  
    
	Couleur('#000000');
}

//Отобразить номера выхода
function Otobrazit_Vyhod_Nomera(Nomer) {

	Vybor_Cveta_Silovoe(Vyhod[Nomer].Etat)

	  Otxy(Math.round(Vyhod[Nomer].X + 6), Math.round(Vyhod[Nomer].Y - 2), Nomer);  
    
	Couleur('#000000');
}

