
function RAZ1Click2() {  //Функция изменить положение
    var Pour = 0;
    //var Objet = '';
    //Objet2 = 'Toutsaufcanal';
    Pointe_Objet2(Objet2, Prox2);
    Pour = Celui_La2;
    switch (Objet2) {
        case 'Rien':
        case 'Ouste':
            Redess(false);
            //Cestfini();
            return false;

        case 'Un_Gidrocil':
            Gidrocilindr[Pour].Tige = Max((Gidrocilindr[Pour].Tige + 1) % 10, 2);
            break;
        case 'Un_Raspred':

            switch (Raspredelitel[Pour].Modele) {
                case '_3_2':
                case '_4_2':
                case '_5_2':
                case '_2_2':
                case '_2_2_':
                    Raspredelitel[Pour].Position = Max((Raspredelitel[Pour].Position + 1) % 3, 1);
                    break;
                case '_4_3':
                case '_5_3':
                    Raspredelitel[Pour].Position = Max((Raspredelitel[Pour].Position + 1) % 4, 1);
                    break;
            }
            break;
        case 'Un_Dat':
            if (!(['Et', 'Ou', 'Inhibition'].includes(Datchik[Pour].Modele))) { Datchik[Pour].Etat = Max((Datchik[Pour].Etat + 1) % 3, 1) }
            break;
        case 'Une_Pamyat':
            Pamyat[Pour].Etat = Max((Pamyat[Pour].Etat + 1) % 3, 1);
            break;
        case 'Un_Sequenceur':
            Sequenceur[Pour].Etat = (Sequenceur[Pour].Etat + 1) % (Sequenceur[Pour].Combien + 1);
            break;
        case 'Un_Kran':
            if (Kran[Pour].Modele == 'Kran') { Kran[Pour].Position = Max((Kran[Pour].Position + 1) % 3, 1) };
            break;
    }
    Redess(false);
}

function Max(a, b) {
    if (a > b) { Max2 = a } else { Max2 = b }
    return Max2
}

function Min(a, b) {
    if (a < b) { Min2 = a } else { Min2 = b }
    return Min2
}









//Анимация
function Anime1() {  // Выполнение анимации компонентов
    var Pour = 0;
    var Pour2 = 0;
    var Pour3 = 0;
    var Celui_La = 0;
    var Fois = 0;
    var Encours = 0;
    var Le_Type = '';
    var En_Un = false;
    var En_Deux = false;
    var L_Action = '';
    var Tempo = 0;

    //Управление часами
    //Otobrazit_Temps(20, 30, true);
    //while (true) {


    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
        if (!(['_4_3', '_5_3'].includes(Raspredelitel[Pour].Modele))) {
            if ((Raspredelitel[Pour].Com[2].Tip == 'Pruzhina_Pravyj') && (Raspredelitel[Pour].Com[1].Tip == 'Tolkatel_Levyj')) { Place_Raspredelitel_a(Pour, 1) }
        }
    }
    //PetitMenu('#00FF00', '<Выполнить>  Левая кнопка: Действие (открыть или закрыть)  Правая кнопка: Выход из анимации ');

    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
        if (Raspredelitel[Pour].Com[2].Tip == 'Pruzhina_Pravyj') {
            if (Raspredelitel[Pour].Com[1].Tip != 'Upravlenie_Levyj') { Place_Raspredelitel_a(Pour, 1) }
        }
    }

    for (let Pour = 1; Pour <= Nb_Datchik; Pour++) {

        if (['A_Tolkatel'].includes(Datchik[Pour].Modele)) { Place_Datchik_a(Pour, 1) }
        if (['A_Galet', 'A_Galet_V'].includes(Datchik[Pour].Modele)) {
            Place_Datchik_a(Pour, 1);
            for (let Pour3 = 1; Pour3 <= Nb_Gidrocilindr; Pour3++) {
                if (!(Gidrocilindr[Pour3].Modele == 'Double_V')) {
                    if ((Math.round(Math.abs(((Gidrocilindr[Pour3].X + (Gidrocilindr[Pour3].Tige - 1) * L_Soedinenie + VL_Tige + 2 * L_Soedinenie) - Datchik[Pour].X))) < 11) && ((Gidrocilindr[Pour3].Y - Datchik[Pour].Y) < 0) && (Math.abs(Gidrocilindr[Pour3].Y - Datchik[Pour].Y) < 40)) { Place_Datchik_a(Pour, 2) }
                } else {
                    if ((Math.round(Math.abs(((Gidrocilindr[Pour3].Y - (Gidrocilindr[Pour3].Tige - 1) * L_Soedinenie - VL_Tige - 2 * L_Soedinenie) - Datchik[Pour].Y))) < 11) && ((Gidrocilindr[Pour3].X - Datchik[Pour].X) < 0) && (Math.abs(Gidrocilindr[Pour3].X - Datchik[Pour].X) < 40)) { Place_Datchik_a(Pour, 2) }
                }
            }
        }
    }
}



//Анимация
function Anime2() {  // Выполнение анимации компонентов
    var Pour = 0;
    var Pour2 = 0;
    var Pour3 = 0;
    var Celui_La = 0;
    var Fois = 0;
    var Encours = 0;
    var Le_Type = '';
    var En_Un = false;
    var En_Deux = false;
    var L_Action = '';
    var Tempo = 0;

    L_Action = Objet2;
    Celui_La = Celui_La2;

    if (['Un_Raspred', 'Un_Dat', 'Un_Kran'].includes(L_Action)) {

        //L_Action = 'Action';


        Heure = false;
        if (Celui_La == 0) {
            Redess(false);
            PetitMenu('#FFFFFF', 'Симулятор');
            return false;
        }
        switch (L_Action) {
            case 'Un_Raspred':
                if ((Raspredelitel[Celui_La].Com[1].Tip == 'Tolkatel_Levyj') && (['Pruzhina_Pravyj', 'Pila_Pravyj'].includes(Raspredelitel[Celui_La].Com[2].Tip))) {
                    Place_Raspredelitel_a(Celui_La, 3 - Raspredelitel[Celui_La].Position)
                };
                break;
            case 'Un_Dat':
                Change_Etat_Datchik(Celui_La);
                break;
            case 'Un_Kran':
                if (Kran[Celui_La].Modele == 'Kran') { Change_Etat_Kran(Celui_La) };
                break;
        }

        return;
    }
    if (RazEtap == 1) { Raz(), RazEtap = 0 };  //Очистка всех значений давления
    Raz_Sila();  //Очистка значений присоединения к источнику силового давления

    for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { 
		for (Pour2 = 1; Pour2 <= 2; Pour2++) { 
			if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Une_UpravleniePitanie') { CanalUpravlenie[Pour].Etat = Un 
			} 
		} 
	}
    //for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { CanalSilovoe[Pour].Etat = Zero }
	
	//*****************************************************************
    //*********************** Линия управления ************************
	//*****************************************************************
	
    for (let Fois = 1; Fois <= 16; Fois++) {
        //Присвоение пересечениям значения неработающего канала управления
        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            if (CanalUpravlenie[Pour].Etat != Bof) {
				if (CanalUpravlenie[Pour].Etat == Zero) {
					for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
						if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieUpravlenie') {
							PeresechenieUpravlenie[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat = CanalUpravlenie[Pour].Etat
						}
					}
				}
            }
        }
		
        //Присвоение пересечениям значения работающего канала управления
        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            if (CanalUpravlenie[Pour].Etat != Bof) {
				if (CanalUpravlenie[Pour].Etat == Un) {
					for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
						if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieUpravlenie') {
							PeresechenieUpravlenie[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat = CanalUpravlenie[Pour].Etat
						}
					}
				}
            }
        }		
		
        //Присвоение датчикам значения работающего канала
        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            if (CanalUpravlenie[Pour].Etat != Bof) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Dat') {
                        if ([1, 2].includes(CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie)) {
                            Datchik[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalUpravlenie[Pour].Etat
                        }
                    }
                }
            }
        }

        for (let Pour = 1; Pour <= Nb_Datchik; Pour++) {
            switch (Datchik[Pour].Modele) {
                case 'Ou':
                    if ((Datchik[Pour].Etat_Ext[1] == 1) || (Datchik[Pour].Etat_Ext[2] == 1)) { Datchik[Pour].Etat_Ext[3] = 1 }
                    else {
                        if ((Datchik[Pour].Etat_Ext[1] != Bof) && (Datchik[Pour].Etat_Ext[2] != Bof)) { Datchik[Pour].Etat_Ext[3] = 0 }
                    };
                    break;
                case 'Et':
                    if ((Datchik[Pour].Etat_Ext[1] != Bof) && (Datchik[Pour].Etat_Ext[2] != Bof)) {
                        if ((Datchik[Pour].Etat_Ext[1] == 1) && (Datchik[Pour].Etat_Ext[2] == 1)) {
                            Datchik[Pour].Etat_Ext[3] = 1
                        }
                        else { Datchik[Pour].Etat_Ext[3] = 0 }
                    };
                    break;
                case 'Inhibition':
                    if ((Datchik[Pour].Etat_Ext[1] == 1) && (Datchik[Pour].Etat_Ext[2] == 0)) { Datchik[Pour].Etat_Ext[3] = 1 }
                    else {
                        if ((Datchik[Pour].Etat_Ext[1] != Bof) && (Datchik[Pour].Etat_Ext[2] != Bof)) { Datchik[Pour].Etat_Ext[3] = 0 }
                    }
                    break;
                default:
                    switch (Datchik[Pour].Etat) {
                        case 1:
                            if ([0, 1].includes(Datchik[Pour].Etat_Ext[2])) { Datchik[Pour].Etat_Ext[3] = 0 };
                            break;
                        case 2:
                            Datchik[Pour].Etat_Ext[3] = Datchik[Pour].Etat_Ext[2];
                            break;
                    }
            }
        }

        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Dat') {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie == 3) {
                        if (Datchik[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[3] != Bof) {
                            CanalUpravlenie[Pour].Etat = Datchik[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[3]
                        }
                    }
                }
            }

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieUpravlenie') {
                    if (PeresechenieUpravlenie[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat == 1) {
                        CanalUpravlenie[Pour].Etat = 1
                    }
                }
            }
        }
        //Присвоение памяти значений работающих каналов (1-работа, 0-стоп)
        for (Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            if (CanalUpravlenie[Pour].Etat == 1) {
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Une_Pamyat') {
                        if (CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie != 3) {
                            Pamyat[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] = 1
                        }
                    }
                }
                //Присвоение секвенсеру значений работающих каналов (1-работа, 0-стоп)
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Sequenceur') {
                        Sequenceur[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] = 1
                    }
                }
            }
        }
        //Присвоение состояния памяти работа или стоп и вывод на экран (2-работа, 1-стоп)
        for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) {
            if ((Pamyat[Pour].Etat_Ext[1] == 1) && (Pamyat[Pour].Etat_Ext[2] != 1)) { Pamyat[Pour].Etat = 2 }
            if ((Pamyat[Pour].Etat_Ext[1] != 1) && (Pamyat[Pour].Etat_Ext[2] == 1)) { Pamyat[Pour].Etat = 1 }
            Otobrazit_Pamyat(Pour, 15, false);
        }
        //Присвоение каналу вывода памяти (3) состояния (1-работа, 0-стоп)
        for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) {
            if (Pamyat[Pour].Etat == 1) { Pamyat[Pour].Etat_Ext[3] = 0 }
            else {
                if (Pamyat[Pour].Etat_Ext[4] == 1) { Pamyat[Pour].Etat_Ext[3] = 1 }
                else { Pamyat[Pour].Etat_Ext[3] = 0 }
            }
        }

        for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
            if (CanalUpravlenie[Pour].Etat != 1) {
                //Присвоение каналу управления состояния работа, после выхода его из памяти (если у него нет работы)                   
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Une_Pamyat') {
                        if (CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie == 3) { CanalUpravlenie[Pour].Etat = Pamyat[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[3] }
                    }
                }
                //Присвоение каналу управления состояния работа, после выхода его из секвенсора (если у него нет работы) иначе стоп
                for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Sequenceur') {
                        if (Sequenceur[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] == 1) { CanalUpravlenie[Pour].Etat = 1 }
                        else {
                            if ([9, 10, 11, 12, 13, 14, 15, 16, 21, 22].includes(CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie)) {
                                if (Sequenceur[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] == 0) { CanalUpravlenie[Pour].Etat = 0 }
                            }
                        }
                    }
                }
            }
        }
        //Работа секвенсора
        for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
            if (Sequenceur[Pour].Etat_Ext[18] == 1) { Sequenceur[Pour].Etat = 0 };
            if ((Sequenceur[Pour].Etat != 0) && (Sequenceur[Pour].Etat_Ext[19] == 1)) { Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat + 8] = 1 };
            if ((Sequenceur[Pour].Etat == Sequenceur[Pour].Combien) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat_Ext[22] = 1 } else { Sequenceur[Pour].Etat_Ext[22] = 0 }; //Если точка на конце секвенсера
            if (Sequenceur[Pour].Etat == 1) { Sequenceur[Pour].Etat_Ext[17] = 1 };
            if (Sequenceur[Pour].Etat != 0) {   //Если включен секвенсер то...
                if (Sequenceur[Pour].Etat != Sequenceur[Pour].Combien) {        //Если не конечная позиция то...
                    if ((Sequenceur[Pour].Etat_Ext[19] == 1) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat = Sequenceur[Pour].Etat % Sequenceur[Pour].Combien + 1 } //Если питание включено и на 20 подано то...
                }
                else {
                    if ((Sequenceur[Pour].Etat_Ext[20] == 1) && (Sequenceur[Pour].Etat_Ext[Sequenceur[Pour].Etat] == 1)) { Sequenceur[Pour].Etat = 1 }
                }
            }
            else {
                if (Sequenceur[Pour].Etat_Ext[20] == 1) { Sequenceur[Pour].Etat = 1 }
            }
            Otobrazit_Etat_Sequenceur(Pour);  //Отображение точки на секвенсере
        }
    }

    for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) {
        if (CanalUpravlenie[Pour].Etat == 1) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    Raspredelitel[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] = 1
                }
            }
        }
        //Обнуление точки подключения управления на распределителе (когда нет давления)
        if (CanalUpravlenie[Pour].Etat == 0) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (CanalUpravlenie[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    Raspredelitel[CanalUpravlenie[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalUpravlenie[Pour].Soedinenie[Pour2].Podklyuchenie] = 0
                }
            }
        }

    }

    for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
        if (!(['_4_3', '_5_3'].includes(Raspredelitel[Pour].Modele))) {
            if (Raspredelitel[Pour].Etat_Ext[6] == 1) {
                if (Raspredelitel[Pour].Etat_Ext[0] == 0) { Place_Raspredelitel_a(Pour, 2) };
            } else {
                if (((Raspredelitel[Pour].Com[2].Tip == 'Pruzhina_Pravyj') && (Raspredelitel[Pour].Modele != '_2_2')) || (Raspredelitel[Pour].Etat_Ext[0] == 1)) { Place_Raspredelitel_a(Pour, 1) };
            }
        } else {

            if ((Raspredelitel[Pour].Etat_Ext[6] == 1) && (Raspredelitel[Pour].Etat_Ext[0] == 0)) { Place_Raspredelitel_a(Pour, 2) }
            else {
                if ((Raspredelitel[Pour].Etat_Ext[6] == 0) && (Raspredelitel[Pour].Etat_Ext[0] == 1)) { Place_Raspredelitel_a(Pour, 3) }
                else { if ((Raspredelitel[Pour].Etat_Ext[6] == 0) && (Raspredelitel[Pour].Etat_Ext[0] == 0)) { Place_Raspredelitel_a(Pour, 1) } }
            }
        }
    }
	//******************************************************************************
    //*********************** Силовая линия (выход -> вход) ************************
	//******************************************************************************

		//Проверка соединений распределителя с выходами на нем
        for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
			
            if (!(['_4_3', '_5_3'].includes(Raspredelitel[Pour].Modele))) {
				
                switch (Raspredelitel[Pour].Position) {
					
                    case 1:
						if (['_3_2', '_4_2'].includes(Raspredelitel[Pour].Modele)) {
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[4] = Bouche;
						Raspredelitel[Pour].Etat_Ext[4] = Zero;
						}
						if (['_5_2'].includes(Raspredelitel[Pour].Modele)) {
						Raspredelitel[Pour].Sila_Vyhod[5] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[4] = Bouche;
						Raspredelitel[Pour].Etat_Ext[4] = Zero;
						}
                        break;
                    case 2:
						if (['_3_2', '_4_2'].includes(Raspredelitel[Pour].Modele)) {
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[3] = Bouche;
						Raspredelitel[Pour].Etat_Ext[3] = Zero;
						}
						if (['_5_2'].includes(Raspredelitel[Pour].Modele)) {
						Raspredelitel[Pour].Sila_Vyhod[5] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[3] = Bouche;
						Raspredelitel[Pour].Etat_Ext[3] = Zero;
						}						
                        break;
                }
            } else {

                switch (Raspredelitel[Pour].Position) {

                    case 1:
						if (['_4_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[4] = Bouche;
						Raspredelitel[Pour].Etat_Ext[4] = Zero;
						}
						if (['_5_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[5] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[4] = Bouche;
						Raspredelitel[Pour].Etat_Ext[4] = Zero;
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
						}						
                        break;
                    case 2:
						if (['_4_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
						}
						if (['_5_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[5] = Bouche;
                        Raspredelitel[Pour].Sila_Vyhod[4] = Bouche;
						Raspredelitel[Pour].Etat_Ext[4] = Zero;
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[3] = Bouche;
						Raspredelitel[Pour].Etat_Ext[3] = Zero;
						}							
                        break;
                    case 3:
						if (['_4_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[3] = Bouche;
						Raspredelitel[Pour].Etat_Ext[3] = Zero;
						}
						if (['_5_3'].includes(Raspredelitel[Pour].Modele)) {
                        Raspredelitel[Pour].Sila_Vyhod[5] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[2] = Bouche;
						Raspredelitel[Pour].Sila_Vyhod[3] = Bouche;
						Raspredelitel[Pour].Etat_Ext[3] = Zero;
						}
                        break;
				}
			}
		}
	//Проверка на соединение с выходом (свечой)
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
        for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Vyhod') {
                CanalSilovoe[Pour].Etat = Zero;
                CanalSilovoe[Pour].Sila_Vyhod = Bouche;   
                CanalSilovoe[Pour].Pressure = 0;
            }
            if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
				if (Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] == Bouche) {
                CanalSilovoe[Pour].Etat = Zero;
                CanalSilovoe[Pour].Sila_Vyhod = Bouche;
                CanalSilovoe[Pour].Pressure = 0;
				}
            }			
			
        }
    }





    //*********************** Проверка на соединение с выходом (выход -> вход) *****
    for (let Fois = 1; Fois <= 10; Fois++) {

        //Присвоение входу  компонента состояние работа от силового канала
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            if ([Bouche].includes(CanalSilovoe[Pour].Sila_Vyhod)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    //Разветвление силовое
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                        PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod = CanalSilovoe[Pour].Sila_Vyhod;
                    }
                    //Манометр
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod = CanalSilovoe[Pour].Sila_Vyhod;
                    }
                    //Распределитель
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
						Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod
						
						
                        //if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                        //    Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod
                        //}
                    }
                    //Гидроцилиндр
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Gidrocil') {
                        Gidrocilindr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod;
                    }
                    //Кран
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                        Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod;
                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position == 1 && Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Kran') {  //Если кран открыт, то присваивается 1 входу и выходу крана
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[2] = 3;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[1] = 3;
                            }
                        }
                        //Обратный клапан
                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Obrat_klapan') {
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[1] = 3;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[2] = 3;
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[1] = 3;
                            }
                        }
                    }
                }
            }
        }


        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                //Распределитель
                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    if ([Bouche].includes(Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel])) {
                        CanalSilovoe[Pour].Sila_Vyhod = Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel];
                    }
                }
                //Разветвление силовое
                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                    if ([Bouche].includes(PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod)) {
                        CanalSilovoe[Pour].Sila_Vyhod = PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod;
                    }
                }
                //Манометр
                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                    if ([Bouche].includes(Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod)) {
                        CanalSilovoe[Pour].Sila_Vyhod = Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod;
                    }
                }
                //Кран
                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                    if ([Bouche].includes(Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Sila_Vyhod = Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie];
                    }
                }
            }
        }
    }










    //*********************** Силовая линия (выход -> вход) ************************
    for (let Fois = 1; Fois <= 10; Fois++) {
        //Присвоение входу компонента состояние стравлено от силового канала
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            if (CanalSilovoe[Pour].Etat == 0 && CanalSilovoe[Pour].Sila_Vyhod == 3) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    //Пересечение силовое
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                        PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat = CanalSilovoe[Pour].Etat;
                    }
                    //Манометр
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat = CanalSilovoe[Pour].Etat;
                        if (Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Pressure == 0) { Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Pressure = CanalSilovoe[Pour].Pressure }
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].View = 1;
                    }
                    //Распределитель
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                        if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                            Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat
                        }
                    }
                    //Гидроцилиндр
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Gidrocil') {
                        Gidrocilindr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat;
                    }
                    //Кран
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                        Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat;
                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position == 1 && Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Kran') {
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[2] = CanalSilovoe[Pour].Etat;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[1] = CanalSilovoe[Pour].Etat;
                            }
                        }
                        //Обратный клапан
                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Obrat_klapan') {
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[1] = 0;
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position = 1;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[2] = 0;
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[1] = 0;
                            }


                        }
                    }
                }
            }
        }
        //Присвоение выходу компонента состояние работа от силового канала
        /*for (let Pour = 1; Pour <= Nb_Kran; Pour++) {
            if (Kran[Pour].Etat == 1 && (Kran[Pour].Etat_Ext[1] == 1 || Kran[Pour].Etat_Ext[2] == 1) || Kran[Pour].Modele == 'Obrat_klapan') {
                if (Kran[Pour].Modele == 'Obrat_klapan' && Kran[Pour].Etat_Ext[2] == 1) {
                    Kran[Pour].Etat_Ext[1] = 0;                                //Проверить
                }
                if (Kran[Pour].Modele == 'Obrat_klapan' && Kran[Pour].Etat_Ext[1] == 1) {
                    Kran[Pour].Etat_Ext[1] = 1, Kran[Pour].Etat_Ext[2] = 1;   //Проверить
                }
                if (Kran[Pour].Modele == 'Kran') {
                    Kran[Pour].Etat_Ext[1] = 1, Kran[Pour].Etat_Ext[2] = 1;   //Проверить
                }
            };
        }*/

        for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
            if (!(['_4_3', '_5_3'].includes(Raspredelitel[Pour].Modele))) {
                switch (Raspredelitel[Pour].Position) {
                    case 1:
                        Raspredelitel[Pour].Etat_Ext[3] = Raspredelitel[Pour].Etat_Ext[1];
                        if (Raspredelitel[Pour].Modele == '_2_2_') { Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1] }
                        if (Raspredelitel[Pour].Modele == '_2_2') { Raspredelitel[Pour].Etat_Ext[4] = Bouche }
                        break;
                    case 2:
                        if (!(Raspredelitel[Pour].Modele == '_2_2_')) {
                            Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1]
                        } else { Raspredelitel[Pour].Etat_Ext[4] = Bouche }
                        break;
                }
            } else {

                switch (Raspredelitel[Pour].Position) {

                    case 1:
                        Raspredelitel[Pour].Etat_Ext[3] = Bouche;
                        Raspredelitel[Pour].Etat_Ext[4] = Bouche;
                        break;
                    case 2:
                        Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1];
                        break;
                    case 3:
                        Raspredelitel[Pour].Etat_Ext[3] = Raspredelitel[Pour].Etat_Ext[1];
                        break;
                }
            }
        }
        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {

            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    if ([Zero].includes(Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Etat = Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie]
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                    if ([Zero].includes(PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat)) {
                        CanalSilovoe[Pour].Etat = PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                    if ([Zero].includes(Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat)) {
                        CanalSilovoe[Pour].Etat = Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                    if ([Zero].includes(Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Etat = Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie]
                    }
                }
            }
        }
    }



    //Отладка
    //for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
    //    for (Pour2 = -1; Pour2 <= 5; Pour2++) {
    //        console.log("№", Pour2 , "Etat_Ext", Raspredelitel[Pour].Etat_Ext[Pour2] , "Sila_Vyhod", Raspredelitel[Pour].Sila_Vyhod[Pour2]);
    //    }
    //}
    //alert("Путь от выхода");



    //*********************** Силовая линия (вход -> выход) ************************
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
        for (Pour2 = 1; Pour2 <= 2; Pour2++) {
            if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Une_Sila') {
                CanalSilovoe[Pour].Etat = Un;
                CanalSilovoe[Pour].Sila_Vyhod = 1;
                CanalSilovoe[Pour].Pressure = SilovoePitanie[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Pressure
                /*for (Pour3 = 1; Pour3 <= Nb_SilovoePitanie; Pour3++) {
                    for (Pour4 = 1; Pour4 <= CanalSilovoe[Pour].NbPoint; Pour4++) {
                        if (CanalSilovoe[Pour].ParcoursX[Pour4] == SilovoePitanie[Pour3].X && CanalSilovoe[Pour].ParcoursY[Pour4] == SilovoePitanie[Pour3].Y) {
                            CanalSilovoe[Pour].Pressure = SilovoePitanie[Pour3].Pressure
                        }
                    }
                }*/
            }
        }
    }

    for (let Fois = 1; Fois <= 10; Fois++) {
        //Присвоение входу  компонента состояние работа от силового канала
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            if ([Bouche, Un].includes(CanalSilovoe[Pour].Etat)) {

                for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                        PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat = CanalSilovoe[Pour].Etat;

                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat = CanalSilovoe[Pour].Etat;

                        if (Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Pressure == 0) { Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Pressure = CanalSilovoe[Pour].Pressure }
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].View = 1;
                    }

                    /*for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
                        if ([Bouche, Un].includes(CanalSilovoe[Pour].Etat)) {
                            for (Pour2 = 1; Pour2 <= 2; Pour2++) {
                                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Vyhod') {
                                    Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod = CanalSilovoe[Pour].Sila_Vyhod;
                                }
                            }
                        }
                    }*/


                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                        //if (Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position == 2) { //Ошибка, наверно надо убрать условие
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat;

                            }
                        //}
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Gidrocil') {
                        Gidrocilindr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat;
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                        Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Etat;

                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position == 1 && Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Kran') {  //Если кран открыт, то присваивается 1 входу и выходу крана
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[2] = 1;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[1] = 1;
                            }
                        }

                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Obrat_klapan') {
                            if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[1] == 0) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position = 1;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position = 2;
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[2] = 1;
                            }
                        }
                    }
                }
            }
        }
        //Присвоение выходу компонента состояние работа от силового канала
        /*for (let Pour = 1; Pour <= Nb_Kran; Pour++) {
            if (Kran[Pour].Etat == 1 && (Kran[Pour].Etat_Ext[1] == 1 || Kran[Pour].Etat_Ext[2] == 1) || Kran[Pour].Modele == 'Obrat_klapan') {
                if (Kran[Pour].Modele == 'Obrat_klapan' && Kran[Pour].Etat_Ext[2] == 1) {
                    Kran[Pour].Etat_Ext[1] = 0;
                    Kran[Pour].Sila_Vyhod[1] = 0;
                }
                if (Kran[Pour].Modele == 'Obrat_klapan' && Kran[Pour].Etat_Ext[1] == 1) {
                    Kran[Pour].Etat_Ext[1] = 1, Kran[Pour].Etat_Ext[2] = 1;
                    Kran[Pour].Sila_Vyhod[1] = 1, Kran[Pour].Sila_Vyhod[2] = 1;
                }
                if (Kran[Pour].Modele == 'Kran') {
                    Kran[Pour].Etat_Ext[1] = 1, Kran[Pour].Etat_Ext[2] = 1;
                    Kran[Pour].Sila_Vyhod[1] = 1, Kran[Pour].Sila_Vyhod[2] = 1;
                }
            } else {
                Kran[Pour].Sila_Vyhod[1] = 0, Kran[Pour].Sila_Vyhod[2] = 0;
            }
        }*/

        for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
            if (!(['_4_3', '_5_3'].includes(Raspredelitel[Pour].Modele))) {
                switch (Raspredelitel[Pour].Position) {
                    case 1:
                        Raspredelitel[Pour].Etat_Ext[3] = Raspredelitel[Pour].Etat_Ext[1];

                        if (Raspredelitel[Pour].Modele == '_2_2_') {
                            Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1];

                        }
                        if (Raspredelitel[Pour].Modele == '_2_2') {
                            Raspredelitel[Pour].Etat_Ext[4] = Zero;

                        }
                        break;
                    case 2:
                        if (!(Raspredelitel[Pour].Modele == '_2_2_')) {
                            Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1];

                        } else {
                            Raspredelitel[Pour].Etat_Ext[4] = Zero;

                        }
                        break;
                }
            } else {

                switch (Raspredelitel[Pour].Position) {

                    case 1:
                        Raspredelitel[Pour].Etat_Ext[3] = Zero;

                        Raspredelitel[Pour].Etat_Ext[4] = Zero;

                        break;
                    case 2:
                        Raspredelitel[Pour].Etat_Ext[4] = Raspredelitel[Pour].Etat_Ext[1];

                        break;
                    case 3:
                        Raspredelitel[Pour].Etat_Ext[3] = Raspredelitel[Pour].Etat_Ext[1];

                        break;
                }
            }
        }
        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    if ([Bouche, Un].includes(Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Etat = Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie];
                    }
                }



                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                    if ([Bouche, Un].includes(PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat)) {
                        CanalSilovoe[Pour].Etat = PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                    if ([Bouche, Un].includes(Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat)) {
                        CanalSilovoe[Pour].Etat = Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                    if ([Bouche, Un].includes(Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Etat = Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Etat_Ext[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie];
                    }
                }
            }
        }
    }

    //*********************** Проверка на соединение с источником ************************
    for (let Fois = 1; Fois <= 10; Fois++) {

        //Присвоение входу  компонента состояние работа от силового канала
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            if ([Un].includes(CanalSilovoe[Pour].Sila_Vyhod)) {
                for (Pour2 = 1; Pour2 <= 2; Pour2++) {

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                        PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod = CanalSilovoe[Pour].Sila_Vyhod;
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                        Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod = CanalSilovoe[Pour].Sila_Vyhod;
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                        if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                            Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod
                        }
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Gidrocil') {
                        Gidrocilindr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod;
                    }

                    if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                        Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie] = CanalSilovoe[Pour].Sila_Vyhod;
                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Position == 1 && Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Kran') {  //Если кран открыт, то присваивается 1 входу и выходу крана
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[2] = 1;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[1] = 1;
                            }
                        }

                        if (Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Modele == 'Obrat_klapan') {
                            if (CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie == 1) {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[2] = 1;
                            } else {
                                Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[2] = 1;
                            }
                        }
                    }
                }
            }
        }


        //Присвоение силовому каналу состояния работа на выходе из компонента
        for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {
            for (let Pour2 = 1; Pour2 <= 2; Pour2++) {

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Raspred') {
                    if ([Un].includes(Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel])) {
                        CanalSilovoe[Pour].Sila_Vyhod = Raspredelitel[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel];
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_PeresechenieSilovoe') {
                    if ([Un].includes(PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod)) {
                        CanalSilovoe[Pour].Sila_Vyhod = PeresechenieSilovoe[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Manometr') {
                    if ([Un].includes(Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod)) {
                        CanalSilovoe[Pour].Sila_Vyhod = Manometr[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod;
                    }
                }

                if (CanalSilovoe[Pour].Soedinenie[Pour2].Tip == 'Un_Kran') {
                    if ([Un].includes(Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie])) {
                        CanalSilovoe[Pour].Sila_Vyhod = Kran[CanalSilovoe[Pour].Soedinenie[Pour2].Lequel].Sila_Vyhod[CanalSilovoe[Pour].Soedinenie[Pour2].Podklyuchenie];
                    }
                }
            }
        }
    }
    //Отладка
    //for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
    //    for (Pour2 = -1; Pour2 <= 5; Pour2++) {
    //        console.log("№", Pour2 , "Etat_Ext", Raspredelitel[Pour].Etat_Ext[Pour2] , "Sila_Vyhod", Raspredelitel[Pour].Sila_Vyhod[Pour2]);
    //    }
    //}
    //alert("Путь от источника");

    //*********************** Присвоение каналам cиловой линии (в изолированных участках) состояния Etat = Bof  ************************
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) {

        if (CanalSilovoe[Pour].Etat == Un && CanalSilovoe[Pour].Sila_Vyhod == 0) {
            CanalSilovoe[Pour].Etat = Bof;
        }

    }


    //*********************** Отображение анимации цилиндров ************************
    for (let Pour = 1; Pour <= Nb_CanalSilovoe; Pour++) { Otobrazit_CanalSilovoe(Pour, false) }
    for (let Pour = 1; Pour <= Nb_CanalUpravlenie; Pour++) { Otobrazit_CanalUpravlenie(Pour, false) }
    for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) {
        En_Un = Gidrocilindr[Pour].Etat_Ext[1] == 1;
        En_Deux = Gidrocilindr[Pour].Etat_Ext[2] == 1;
        switch (Gidrocilindr[Pour].Modele) {
            case 'Simple_R':
            case 'R_Simple':
                if (Gidrocilindr[Pour].Modele == 'R_Simple') { En_Un = En_Deux }
                if (En_Un) {
                    if (Gidrocilindr[Pour].Tige < 9) {
                        //Otobrazit_Gidrocilindr(Pour, '#FFFFFF', false);
                        Gidrocilindr[Pour].Tige++;
                        //Otobrazit_Gidrocilindr(Pour, '#000000', false);
                    }
                } else {
                    if (!((Gidrocilindr[Pour].Modele == 'Simple_R') && (Gidrocilindr[Pour].Etat_Ext[1] == Bouche))) {
                        if (!((Gidrocilindr[Pour].Modele == 'R_Simple') && (Gidrocilindr[Pour].Etat_Ext[2] == Bouche))) {
                            if (Gidrocilindr[Pour].Tige > 2) {
                                //Otobrazit_Gidrocilindr(Pour, '#FFFFFF', false);
                                Gidrocilindr[Pour].Tige--;
                                //Otobrazit_Gidrocilindr(Pour, '#000000', false);
                            }
                        }
                    }
                }
                break;

            case 'Double2':
            case 'Double_T':
            case 'Double_A':
            case 'Double_T_A':
            case 'Double_V':
                if (En_Un && En_Deux) {
                    PetitMenu('#FF0000', 'Обе камеры запитаны !');
                    //Pause(5);
                } else {
                    if (!En_Un && !En_Deux) {
                        PetitMenu('#FF0000', 'Нет камеры с питанием !');
                        //Pause(5);
                    }
                    else {
                        if (En_Un) {
                            if (Gidrocilindr[Pour].Tige < 9) {
                                if (!(Gidrocilindr[Pour].Etat_Ext[2] == Bouche)) {
                                    //Otobrazit_Gidrocilindr(Pour, '#FFFFFF', false);
                                    Gidrocilindr[Pour].Tige++;
                                    //Otobrazit_Gidrocilindr(Pour, '#000000', false);
                                }
                            }
                        } else {
                            if (Gidrocilindr[Pour].Tige > 2) {
                                if (!(Gidrocilindr[Pour].Etat_Ext[1] == Bouche)) {
                                    //Otobrazit_Gidrocilindr(Pour, '#FFFFFF', false);
                                    Gidrocilindr[Pour].Tige--;
                                    //Otobrazit_Gidrocilindr(Pour, '#000000', false);
                                }
                            }
                        }
                    }
                }
                break;

        }
    }
}



//Изменить состояние запорной арматуры
function Change_Etat_Kran(Numero) {
    //Otobrazit_Kran(Numero, '#FFFFFF', false);
    Kran[Numero].Position = 3 - Kran[Numero].Position;
    //Otobrazit_Kran(Numero, '#000000', false);
}


//Изменить состояние датчика
function Change_Etat_Datchik(Numero) {
    //Otobrazit_Datchik(Numero, '#FFFFFF', false);
    Datchik[Numero].Etat = 3 - Datchik[Numero].Etat;
    //Otobrazit_Datchik(Numero, '#000000', false);
}

//Поместите датчик
function Place_Datchik_a(Numero, Combien) {
    if (Datchik[Numero].Etat != Combien) { Change_Etat_Datchik(Numero) }
}

//Поместите распределитель
function Place_Raspredelitel_a(Numero, Combien) {
    //Otobrazit_Raspredelitel(Numero, '#FFFFFF', false);
    Raspredelitel[Numero].Position = Combien;
    Commande[Raspredelitel[Numero].Com[1].Laquelle].Etat = Raspredelitel[Numero].Position;
    Commande[Raspredelitel[Numero].Com[2].Laquelle].Etat = Raspredelitel[Numero].Position;
    //Otobrazit_Raspredelitel(Numero, '#000000', false);
}
