//Новый компонент кнопка
function Composant1Click() {  // Добавление нового компонента
  Fichiermodifie = true;

  Ajoute_Objet();       //Вывод на экран компонентов
  ActionMouse = 'Pointe_Objet2';  

}

//Текст кнопка
function Texte1Click() {

  if (Nb_Texte < Max_Texte) {
    Fichiermodifie = true;
    ActionMouse = 'Texte'
    Sozdat_Texte();

    if (Textenter != '') {
      Nb_Texte++;
      Texte[Nb_Texte].X = Xe;
      Texte[Nb_Texte].Y = Ye;
      Texte[Nb_Texte].Le_Texte = S;
      Texte[Nb_Texte].Lataille = 1;
    }
  }

}

//Стереть кнопка
function Efface1Click() {

  Fichiermodifie = true;
  PetitMenu('#808000', '<Очистить> Правая кнопка = Назад');
  Pointe_Tip = 'Tout';
  
  Pointe_Objet(Pointe_Tip, '#0000FF'); //Выбор компонента
  ActionMouse = 'Remove'; 
  

}

//Силовая цепь кнопка
function Puissance1Click() {

  if (Nb_SilovoePitanie > 0) {
    Fichiermodifie = true;
    
    Sozdat_CanalZero();  //Обнуление нового канала (для ввода новых данных)

    Puissance = true;  //Силовая цепь активна (создание)
    PetitMenu('#FF0000', '<Силовая цепь>  Начало и конец помещены в точки присоединения, правая кнопка=Возврат');
    Ext = true;
    Debut = true;

    Old_XL = X_s;
    Old_YL = Y_s;

    EntrepointView();  //Вывод точек каналов (отображение на экране жирными точками)
    ActionMouse = 'DRA1';
  } else { alert('Нет питания (красный)') }


}

//Коммандная цепь  кнопка
function Commande1Click() {


  if (Nb_UpravleniePitanie > 0) {
    Fichiermodifie = true;

    Sozdat_CanalZero_Upravlenie();  //Обнуление нового канала (для ввода новых данных)
 
    Puissance = false;  //Командная цепь активна (создание)
    PetitMenu('#FF00FF', '<Схема управления>  Начало и конец помещены в точки присоединения, правая кнопка=Возврат');
    Ext = true;
    Debut = true;
    Old_XL = X_s;
    Old_YL = Y_s;

    EntrepointView();  //Вывод точек каналов (отображение на экране жирными точками)
    ActionMouse = 'DRA2';
  } else { alert('Нет контроля мощности (фиолетовый)') }

}



//Мышка вверх  кнопка
function Image1MouseUp(Sender, Button, Shift, X, Y) {  //
  if (button == mbright) { Pravyj = false } else { Levyj = false }
  Compteursouris = 0;
}

//Новый  кнопка
function Nouveau1Click() {
  Super_Raz();
  Faktor = 1;
  Redess(false);
  Fichiermodifie = true;
}



//Закрыть кнопка
function FormCloseQuery(Sender, CanClose) {
  Pravyj = true;
  if (Fichiermodifie) {
    Dialogvaleur = MessageDlg('Сохранить файл ?', mtConfirmation, [mbYes, mbno, mbcancel], 0);
    switch (Dialogvaleur) {
      case 'id_yes':
        Enregregistersous1Click(Self);
        break;
      case 'id_Cancel':
        Canclose = false;
        break;
    }
  }
}

//Выход  кнопка
function Quitter1Click(Sender) {
  Close();
}

//О программе
function Apropos1Click() {
  alert('Air-simulator');

}

//Черный и белый  кнопка
function Noiretblanc1Click(Sender) {
  Redess(true);
}

//
function Timer1Timer(Sender) {
  if (Compteursouris < 10) { Compteursouris++ }
  if (Compteursouris > 4) { if (heure) { if ((GetAsyncKeyState(VK_LBUTTON) && $8000) != 0) { Levyj = true; } } }
}

//Лупа увеличить  кнопка
function Loupe1Click() {
  if (Faktor > 3.5) { return false }
  Faktor = Faktor * 1.1;
  

  Redess(false);
  Otobrazit_Nomera();
}

//Лупа уменьшить  кнопка
function Loupe2Click() {
  if (Faktor < 0.9) { return false }
  Faktor = Faktor / 1.1;
  if (Faktor < 1) { Faktor = 1 }  //Добавил чтоб ниже 1 не опускалось
 
  Redess(false);
  Otobrazit_Nomera();
}

//Выход  кнопка
function Sortir1Click() {
  Pravyj = true;
  ActionMouse = 'Exit';
  PetitMenu('#000000', '<Симулятор> Готов!');
}

//Движение  кнопка
function Dplacer1Click() {
	Fichiermodifie = true;
	PetitMenu('#A6CAF0', '<Переместить>  Выбор компонента ?');

	Objet2 = 'Toutsaufcanal';

	Pointe_Objet(Objet2, '#0000FF'); //Выбор компонента
	ActionMouse = 'Move1';
}

//Время
function Timer2Timer(Sender) {

  X_s = Math.round(20 * Faktor);
  Y_s = Math.round(30 * Faktor);
  Levyj = true;
}


//Пошаговый запуск кнопка
 function Anime1Click() {
  
  //Pasapas = true;
  //Anime1();

  //PetitMenu('#00FF00', '<Выполнить> Левая кнопка: Действие (открыть или закрыть)    Правая кнопка: Выход из анимации ');
  //L_Action = 'Action';
  //Pointe_Objet( L_Action, '#0000FF'); //Выбор компонента
  RazEtap = 1;
  Fichiermodifie = true;
  ActionMouse = 'Anime1';
  //Mouse1Click()

}


//Непрерывный запуск кнопка
function Continu1Click() {
  
  //Pasapas = true;
  
  
  //PetitMenu('#00FF00', '<Выполнить> Левая кнопка: Действие (открыть или закрыть) Правая кнопка: Выход из анимации или кнопка: Возврат ');
  //L_Action = 'Action';
  //Pointe_Objet( L_Action, '#0000FF'); //Выбор компонента
  //RazEtap = 1;
  Fichiermodifie = true;
  ActionMouse = 'Anime3';
  PetitMenu('#00FF00', '<Выполнить>   Нажмите  Левую кнопку: Непрерывный запуск   Правая кнопка: Выход из анимации или кнопка: Возврат');
  
  //id = setInterval(function () {AnimeWork()}, 1000);

}

//Изменение положения компонента кнопка
function RAZ1Click() {
  var Objet = '';
  Objet = 'Toutsaufcanal';
  Pointe_Objet(Objet, '#0000FF')
  PetitMenu('#A6CAF0', '<Маневр>  Выбор компонента ?');
  Fichiermodifie = true;
  ActionMouse = 'RAZ1'
}




//Слева  кнопка
function Levyj1Click() {  //Переместить все компоненты влево
  if (Minimumh() > 30) { Decah(-15) };
  Redess(false);
  Otobrazit_Nomera();
}

//Справа  кнопка
function Pravyj1Click() {  //Переместить все компоненты вправо
  if (Minimumh() < 1200) { Decah(15) };
  Redess(false);
  Otobrazit_Nomera();
}

//Выше  кнопка
function Dessus1Click() {  //Переместить все компоненты выше
  if (Minimumv() > 30) { Decav(-15) };
  Redess(false);
  Otobrazit_Nomera();
}

//Ниже  кнопка
function Dessous1Click() {  //Переместить все компоненты ниже
  if (Minimumv() < 900) { Decav(15) };
  Redess(false);
  Otobrazit_Nomera();
}

