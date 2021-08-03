//Создание силового канала


function Entre_Canal() {  //Присвоение точек каналу
   
    if (CanalSilovoe[Nb_CanalSilovoe].NbPoint > 9) {
        CanalSilovoe[Nb_CanalSilovoe].NbPoint = 0;
        return false;  //заместо Encore =false; и Exit; 
    }


    if (Debut) {
        CanalSilovoe[Nb_CanalSilovoe].Soedinenie[1] = Object.assign({},Branche2);
        CanalSilovoe[Nb_CanalSilovoe].NbPoint++;
        CanalSilovoe[Nb_CanalSilovoe].ParcoursX[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = XL;   //Ввод первой точки
        CanalSilovoe[Nb_CanalSilovoe].ParcoursY[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = YL;
    }

    if (Ext) {                      //Если конечная точка то присвоить значения
        XFin = XL;
        YFin = YL;
        CanalSilovoe[Nb_CanalSilovoe].Soedinenie[2] = Object.assign({},Branche2);
    }

    if (!Debut) {                   //Если 2 точка, то нарисовать 1 линию

        if (Math.abs(Old_XL - XL) <= (Math.abs(Old_YL - YL))) { XL = Old_XL } else { YL = Old_YL; }
        Ligne(XL, YL, Old_XL, Old_YL);
        CanalSilovoe[Nb_CanalSilovoe].NbPoint++;
        CanalSilovoe[Nb_CanalSilovoe].ParcoursX[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = XL;   //Ввод второй точки
        CanalSilovoe[Nb_CanalSilovoe].ParcoursY[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = YL;
    }

    Old_XL = XL;                    //Присвоить значение введенной точки как предыдущую введенную точку
    Old_YL = YL;

    if (Ext) {                      //Если конечная точка, то нарисовать 2 линию 
        Ligne(XL, YL, XFin, YFin);
        CanalSilovoe[Nb_CanalSilovoe].NbPoint++;
        CanalSilovoe[Nb_CanalSilovoe].ParcoursX[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = XFin;
        CanalSilovoe[Nb_CanalSilovoe].ParcoursY[CanalSilovoe[Nb_CanalSilovoe].NbPoint] = YFin;
    }

    Debut = false;                  //Ввод 1 точки закончен
    

}


//Создание канала управления
function Entre_CanalUpravlenie(Encore) {  //
   
        if (CanalUpravlenie[Nb_CanalUpravlenie].NbPoint > 9) {
            CanalUpravlenie[Nb_CanalUpravlenie].NbPoint = 0;
            //Encore =false;
            return false;
        }
      

        if (Debut) {
            CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[1] = Object.assign({},Branche2);
            CanalUpravlenie[Nb_CanalUpravlenie].NbPoint++;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursX[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = XL;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursY[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = YL;
        }

        if (Ext) {
            XFin = XL;
            YFin = YL;
            CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[2] = Object.assign({},Branche2);
        }

        if (!Debut) {

            if (Math.abs(Old_XL - XL) <= (Math.abs(Old_YL - YL))) { XL = Old_XL } else { YL = Old_YL }
            Ligne(XL, YL, Old_XL, Old_YL);
            CanalUpravlenie[Nb_CanalUpravlenie].NbPoint++;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursX[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = XL;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursY[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = YL;
        }

        Old_XL = XL;
        Old_YL = YL;

        if (Ext) {
            Ligne(XL, YL, XFin, YFin);
            CanalUpravlenie[Nb_CanalUpravlenie].NbPoint++;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursX[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = XFin;
            CanalUpravlenie[Nb_CanalUpravlenie].ParcoursY[CanalUpravlenie[Nb_CanalUpravlenie].NbPoint] = YFin;
        }

        Debut = false;

   
}
















//Создание канала
function Sozdat_CanalZero() {  //Обнуление нового канала (для ввода новых данных)


    var Encore = true;

    //    Encore = true;
    if (Nb_CanalSilovoe == Max_CanalSilovoe) { Encore = false }
    //while (Encore) {
    Nb_CanalSilovoe++;
    NewCanalSilovoe(Nb_CanalSilovoe);

}

function Sozdat_Canal() {  //Запись канала после введения данных


    //Entre_Canal(Encore);
    var Pour = 0;
    var Pouet = false;
    var Encore = true;

    if (CanalSilovoe[Nb_CanalSilovoe].NbPoint == 0) { Pouet = true }
    CanalSilovoe[Nb_CanalSilovoe].X = CanalSilovoe[Nb_CanalSilovoe].ParcoursX[1];
    CanalSilovoe[Nb_CanalSilovoe].Y = CanalSilovoe[Nb_CanalSilovoe].ParcoursY[1];
    if (!Pouet) {
        for (let Pour = 1; Pour <= 2; Pour++) {

            if ((CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Tip == 'Une_Sila') && (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[3 - Pour].Tip == 'Une_Sila')) { Pouet = true }
            if ((CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Tip == 'Un_Raspred') && (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[3 - Pour].Tip == 'Un_Raspred') && (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[1].Lequel == CanalSilovoe[Nb_CanalSilovoe].Soedinenie[2].Lequel)) { Pouet = true }
            if (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Tip == 'Un_Gidrocil') {

                if (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[3 - Pour].Tip == 'Un_Gidrocil') { Pouet = true }
                if ((Gidrocilindr[CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Lequel].Modele == 'Simple_R') && (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Podklyuchenie == 2)) { Pouet = true }
                if ((Gidrocilindr[CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Lequel].Modele == 'R_Simple') && (CanalSilovoe[Nb_CanalSilovoe].Soedinenie[Pour].Podklyuchenie == 1)) { Pouet = true }
            }
        }
    }
    if (Pouet) { Nb_CanalSilovoe-- }
    if (Nb_CanalSilovoe == Max_CanalSilovoe) { Encore = false }

}











//Создание канала управления
function Sozdat_CanalZero_Upravlenie() {  //
    var Pour = 0;
    //var Pouet = false;
    var Encore = true;

    //    Encore = true;
    if (Nb_CanalUpravlenie == Max_CanalUpravlenie) { Encore = false }
    //while (Encore) {
    Nb_CanalUpravlenie++;
    NewCanalUpravlenie(Nb_CanalUpravlenie);
   
}

function Sozdat_CanalUpravlenie() {  //Запись канала после введения данных
    //Entre_CanalUpravlenie(Encore);
    var Pouet = false;
    var Encore = true;

    if (CanalUpravlenie[Nb_CanalUpravlenie].NBPoint == 0) { Pouet = true }
    CanalUpravlenie[Nb_CanalUpravlenie].X = CanalUpravlenie[Nb_CanalUpravlenie].ParcoursX[1];
    CanalUpravlenie[Nb_CanalUpravlenie].Y = CanalUpravlenie[Nb_CanalUpravlenie].ParcoursY[1];
    if (!Pouet) {
        for (let Pour = 1; Pour <= 2; Pour++) {

            if ((CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[Pour].Tip == 'Une_UpravleniePitanie') && (CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[3 - Pour].Tip == 'Une_UpravleniePitanie')) (Pouet = true)
            if ((CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[Pour].Tip == 'Un_Dat') && (CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[3 - Pour].Tip == 'Un_Dat') && (CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[1].Lequel == CanalUpravlenie[Nb_CanalUpravlenie].Soedinenie[2].Lequel)) (Pouet = true)
        }
    }
    if (Pouet) { Nb_CanalUpravlenie-- }
    if (Nb_CanalUpravlenie == Max_CanalUpravlenie) { Encore = false }
}


















function EntrepointView() {  // Вывод на экран каналов
  


    //Нарисовать красный прямоугольник (силовой линии)
    function Entre_Pave(X, Y) {  //X, Y - координаты

        if (Nb_Point < 200) { Nb_Point++ }
        Les_points[Nb_Point][1] = X;
        Les_points[Nb_Point][2] = Y;
        if (Puissance) { NPave(X, Y, '#FF0000') } else { NPave(X, Y, '#FF00FF') }
    }

    funcCursor('crosshair'); //Курсор в виде креста
    Nb_Point = 0;
    if (Puissance) {

        for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) { Entre_Pave(SilovoePitanie[Pour].X, SilovoePitanie[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
            switch (Raspredelitel[Pour].Modele) {
                case '_3_2':
                    for (let Pour2 = 1; Pour2 <= 2; Pour2++) { Entre_Pave(Raspredelitel[Pour].ExtX[Pour2], Raspredelitel[Pour].ExtY[Pour2]) }
                    Entre_Pave(Raspredelitel[Pour].ExtX[4], Raspredelitel[Pour].ExtY[4]);
                    break;
                case '_5_2':
                case '_5_3':
                    for (let Pour2 = 1; Pour2 <= 5; Pour2++) { Entre_Pave(Raspredelitel[Pour].ExtX[Pour2], Raspredelitel[Pour].ExtY[Pour2]) }
                    break;
                case '_4_2':
                case '_4_3':
                    for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Entre_Pave(Raspredelitel[Pour].ExtX[Pour2], Raspredelitel[Pour].ExtY[Pour2]) }
                    break;
                case '_2_2':
                case '_2_2_':
                    Entre_Pave(Raspredelitel[Pour].ExtX[1], Raspredelitel[Pour].ExtY[1]);
                    Entre_Pave(Raspredelitel[Pour].ExtX[4], Raspredelitel[Pour].ExtY[4]);
                    break;
            }
        }
        for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) { Entre_Pave(PeresechenieSilovoe[Pour].X, PeresechenieSilovoe[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) {

            Entre_Pave(Gidrocilindr[Pour].EntreeX[1], Gidrocilindr[Pour].EntreeY[1]);
            if (['Double2', 'Double_T', 'Double_A', 'Double_T_A', 'Double_V'].includes(Gidrocilindr[Pour].Modele)) { Entre_Pave(Gidrocilindr[Pour].EntreeX[2], Gidrocilindr[Pour].EntreeY[2]) }
        }
        for (let Pour = 1; Pour <= Nb_Kran; Pour++) {

            Entre_Pave(Kran[Pour].EntreeX[1], Kran[Pour].EntreeY[1]);
            if (['Kran', 'Obrat_klapan'].includes(Kran[Pour].Modele)) { Entre_Pave(Kran[Pour].EntreeX[2], Kran[Pour].EntreeY[2]) }
        }
        for (let Pour = 1; Pour <= Nb_Manometr; Pour++) { Entre_Pave(Manometr[Pour].X, Manometr[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) { Entre_Pave(Vyhod[Pour].X, Vyhod[Pour].Y) }
    } else {
        for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) { Entre_Pave(UpravleniePitanie[Pour].X, UpravleniePitanie[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) { Entre_Pave(PeresechenieUpravlenie[Pour].X, PeresechenieUpravlenie[Pour].Y) }
        for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
            if (Raspredelitel[Pour].Com[1].Tip == 'Upravlenie_Levyj') { Entre_Pave(Raspredelitel[Pour].ExtX[6], Raspredelitel[Pour].ExtY[6]) }
            if (Raspredelitel[Pour].Com[2].Tip == 'Upravlenie_Pravyj') { Entre_Pave(Raspredelitel[Pour].ExtX[0], Raspredelitel[Pour].ExtY[0]) }
        }
        for (let Pour = 1; Pour <= Nb_Datchik; Pour++) { for (let Pour2 = 1; Pour2 <= 3; Pour2++) { Entre_Pave(Datchik[Pour].ExtX[Pour2], Datchik[Pour].ExtY[Pour2]) } }
        for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) { for (let Pour2 = 1; Pour2 <= 4; Pour2++) { Entre_Pave(Pamyat[Pour].ExtX[Pour2], Pamyat[Pour].ExtY[Pour2]) } }
        for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
            for (let Pour2 = 1; Pour2 <= Sequenceur[Pour].Combien; Pour2++) {
                Entre_Pave(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]);
                Entre_Pave(Sequenceur[Pour].ExtX[Pour2 + 8], Sequenceur[Pour].ExtY[Pour2 + 8]);
            }
            for (let Pour2 = 17; Pour2 <= 22; Pour2++) { Entre_Pave(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]) }
        }
    }
}




function DRA(X_s, Y_s) {  // Ввод точки канала
    var Distance = 100000;
    

    //Расстояние определение
    function Dista(X, Y) {  //X, Y - координаты

        return Math.sqrt(Math.pow(X_s - X, 2) + Math.pow(Y_s - Y, 2));
    }


    PourPt = 1;
    while (PourPt <= Nb_Point) {  //Ввести координаты точки линии (силовой или управления)
        Di = Math.sqrt(Math.pow(X_s - (Les_points[PourPt][1]) * Faktor, 2) + Math.pow(Y_s - (Les_points[PourPt][2]) * Faktor, 2));
        if ((Di < MobDist) && (Di > 0)) { //было от 4 до 1
            X_s = Math.round(Les_points[PourPt][1]);
            Y_s = Math.round(Les_points[PourPt][2]);
            PourPt = Nb_Point + 1;
        }
        PourPt++;
    }
    //Croix(X, Y);
    X = X_s;
    Y = Y_s;
    if (Pravyj) {
        Entrepoint = false;
        funcCursor('default');   //Курсор в виде стрелки
        //Exit;
        return false;
    } else {
        if (Levyj) {

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_SilovoePitanie; Pour++) {
                    D = Dista(SilovoePitanie[Pour].X, SilovoePitanie[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = SilovoePitanie[Pour].X;  //Присвоить координаты силовой линии
                        Yd = SilovoePitanie[Pour].Y;
                        Branche2.Tip = 'Une_Sila';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_PeresechenieSilovoe; Pour++) {
                    D = Dista(PeresechenieSilovoe[Pour].X, PeresechenieSilovoe[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = PeresechenieSilovoe[Pour].X;     //Присвоить координаты  линии управления
                        Yd = PeresechenieSilovoe[Pour].Y;
                        Branche2.Tip = 'Un_PeresechenieSilovoe';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Manometr; Pour++) {
                    D = Dista(Manometr[Pour].X, Manometr[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = Manometr[Pour].X;     //Присвоить координаты  линии управления
                        Yd = Manometr[Pour].Y;
                        Branche2.Tip = 'Un_Manometr';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Vyhod; Pour++) {
                    D = Dista(Vyhod[Pour].X, Vyhod[Pour].Y);

                    if (D < Distance) {
                        Distance = D;
                        Xd = Vyhod[Pour].X;     //Присвоить координаты  линии управления
                        Yd = Vyhod[Pour].Y;
                        Branche2.Tip = 'Un_Vyhod';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }            

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_UpravleniePitanie; Pour++) {
                    D = Dista(UpravleniePitanie[Pour].X, UpravleniePitanie[Pour].Y);
                    if (D < Distance) {
                        Distance = D;
                        Xd = UpravleniePitanie[Pour].X;    //Присвоить координаты силовой линии (пересечение)
                        Yd = UpravleniePitanie[Pour].Y;
                        Branche2.Tip = 'Une_UpravleniePitanie';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_PeresechenieUpravlenie; Pour++) {
                    D = Dista(PeresechenieUpravlenie[Pour].X, PeresechenieUpravlenie[Pour].Y);
                    if (D < Distance) {
                        Distance = D;
                        Xd = PeresechenieUpravlenie[Pour].X;  //Присвоить координаты  линии управления (пересечение)
                        Yd = PeresechenieUpravlenie[Pour].Y;
                        Branche2.Tip = 'Un_PeresechenieUpravlenie';
                        Branche2.Lequel = Pour;
                        Branche2.Podklyuchenie = 0;
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
                    if (Raspredelitel[Pour].Modele == '_5_2') { Combien = 5 } else { Combien = 4 }
                    for (let Pour2 = 1; Pour2 <= Combien; Pour2++) {
                        D = Dista(Raspredelitel[Pour].ExtX[Pour2], Raspredelitel[Pour].ExtY[Pour2]);

                        if ((!((Pour2 == 3) && (Raspredelitel[Pour].Modele == '_3_2'))) && (!(([2, 3].includes(Pour2)) && (['_2_2', '_2_2_'].includes(Raspredelitel[Pour].Modele))))) {
                            if (D < Distance) {
                                Distance = D;
                                Xd = Raspredelitel[Pour].ExtX[Pour2];  //Присвоить координаты  Raspredelitel
                                Yd = Raspredelitel[Pour].ExtY[Pour2];
                                Branche2.Tip = 'Un_Raspred';
                                Branche2.Lequel = Pour;
                                Branche2.Podklyuchenie = Pour2;
                            }
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Raspredelitel; Pour++) {
                    for (let Pour2 = 0; Pour2 <= 6; Pour2 = Pour2 + 6) {
                        D = Dista(Raspredelitel[Pour].ExtX[Pour2], Raspredelitel[Pour].ExtY[Pour2]);

                        if (!((Pour2 == 3) && (Raspredelitel[Pour].Modele == '_3_2'))) {
                            if (D < Distance) {
                                Distance = D;
                                Xd = Raspredelitel[Pour].ExtX[Pour2];  //Присвоить координаты  Raspredelitel (пересечение)
                                Yd = Raspredelitel[Pour].ExtY[Pour2];
                                Branche2.Tip = 'Un_Raspred';
                                Branche2.Lequel = Pour;
                                Branche2.Podklyuchenie = Pour2;
                            }
                        }
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Gidrocilindr; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                        D = Dista(Gidrocilindr[Pour].EntreeX[Pour2], Gidrocilindr[Pour].EntreeY[Pour2]);

                        if (D < Distance) {
                            Distance = D;
                            Xd = Gidrocilindr[Pour].EntreeX[Pour2];    //Присвоить координаты  Gidrocilindr
                            Yd = Gidrocilindr[Pour].EntreeY[Pour2];
                            Branche2.Tip = 'Un_Gidrocil';    //Тип компонента (гидроцилиндр)
                            Branche2.Lequel = Pour;    //Номер  гидроцилиндра
                            Branche2.Podklyuchenie = Pour2;  //Номер точки присоединения к гидроцилиндру
                        }
                    }
                }
            }

            if (Puissance) {
                for (let Pour = 1; Pour <= Nb_Kran; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 2; Pour2++) {
                        D = Dista(Kran[Pour].EntreeX[Pour2], Kran[Pour].EntreeY[Pour2]);

                        if (D < Distance) {
                            Distance = D;
                            Xd = Kran[Pour].EntreeX[Pour2];    //Присвоить координаты  Kran
                            Yd = Kran[Pour].EntreeY[Pour2];
                            Branche2.Tip = 'Un_Kran';    //Тип компонента (запорная арматура)
                            Branche2.Lequel = Pour;    //Номер  запорной арматуры
                            Branche2.Podklyuchenie = Pour2;  //Номер точки присоединения к запорной арматуре
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Datchik; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 3; Pour2++) {
                        D = Dista(Datchik[Pour].ExtX[Pour2], Datchik[Pour].ExtY[Pour2]);

                        if (D < Distance) {
                            Distance = D;
                            Xd = Datchik[Pour].ExtX[Pour2];  //Присвоить координаты  Gidrocilindr (пересечение)
                            Yd = Datchik[Pour].ExtY[Pour2];
                            Branche2.Tip = 'Un_Dat';
                            Branche2.Lequel = Pour;
                            Branche2.Podklyuchenie = Pour2;
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Pamyat; Pour++) {
                    
                    for (let Pour2 = 1; Pour2 <= 4; Pour2++)
                    {
                        
                        D = Dista(Pamyat[Pour].ExtX[Pour2], Pamyat[Pour].ExtY[Pour2]);
                        if (D < Distance) {
                            Distance = D;
                            Xd = Pamyat[Pour].ExtX[Pour2];   //Присвоить координаты  Pamyat (пересечение)
                            Yd = Pamyat[Pour].ExtY[Pour2];
                            Branche2.Tip = 'Une_Pamyat';
                            Branche2.Lequel = Pour;
                            Branche2.Podklyuchenie = Pour2;
                        }
                    }
                }
            }

            if (!Puissance) {
                for (let Pour = 1; Pour <= Nb_Sequenceur; Pour++) {
                    for (let Pour2 = 1; Pour2 <= 22; Pour2++) {
                        D = Dista(Sequenceur[Pour].ExtX[Pour2], Sequenceur[Pour].ExtY[Pour2]);
                        if (D < Distance) {
                            Distance = D;
                            Xd = Sequenceur[Pour].ExtX[Pour2];   //Присвоить координаты  Sequenceur (пересечение)
                            Yd = Sequenceur[Pour].ExtY[Pour2];
                            Branche2.Tip = 'Un_Sequenceur';
                            Branche2.Lequel = Pour;
                            Branche2.Podklyuchenie = Pour2;
                        }
                    }
                }
            }


            if (Distance < 6) {
                XL = Xd;
                YL = Yd;
               
                if (!Ext) { Ext = true } else { Ext = false }
            } else {
                if (!Ext) {
                  
                    XL = X_s;
                    YL = Y_s;
                    
                }
            }
        }
    }
}