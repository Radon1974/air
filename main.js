var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  w = canvas.width,
  h = canvas.height;

document.oncontextmenu = function () { return false };  //Запретить выпадающее меню в браузере
document.onmousedown = document.onselectstart = function () { return false };  //Запретить выделения текста в браузере




const Button1 = document.getElementById('Button1'),

  Button4 = document.getElementById('Button4'),
  Button5 = document.getElementById('Button5'),
  Button6 = document.getElementById('Button6'),
  Button7 = document.getElementById('Button7'),
  Button8 = document.getElementById('Button8'),
  Button9 = document.getElementById('Button9'),
  Button10 = document.getElementById('Button10'),
  Button11 = document.getElementById('Button11'),
  Button12 = document.getElementById('Button12'),
  Button13 = document.getElementById('Button13'),
  Button14 = document.getElementById('Button14'),
  Button15 = document.getElementById('Button15'),
  Button16 = document.getElementById('Button16'),
  Button17 = document.getElementById('Button17'),
  Button18 = document.getElementById('Button18'),
  Button19 = document.getElementById('Button19'),
  Button20 = document.getElementById('Button20');


//Часы
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();




//Текущие координаты мыши
var mouse = { x: 0, y: 0 };
var ActionMouse = ''



//Получение событий мыши
/*if (canvas.addEventListener) {
  canvas.addEventListener('click', funcEventMoveCanvas.bind(null));
}else if (canvas.attachEvent) { // IE DOM
  canvas.attachEvent('onclick', funcEventMoveCanvas.bind(null));
}*/

FormCreate();


//Обработчик событий мыши

Button1.addEventListener('click', function (e) {    //Создать новый файл
  Nouveau1Click();
});

Button4.addEventListener('click', function (e) {    //Создать новый компонент
  Composant1Click()
});
Button5.addEventListener('click', function (e) {    //Создать текст
  Texte1Click()
});
Button6.addEventListener('click', function (e) {    //Удалить компонент
  Efface1Click()
});
Button7.addEventListener('click', function (e) {    //Переместить компонент
  Dplacer1Click();
});
Button8.addEventListener('click', function (e) {    //Добавить силовую цепь
  Puissance1Click();
});
Button9.addEventListener('click', function (e) {    //Добавить цепь управления
  Commande1Click();
});
Button10.addEventListener('click', function (e) {   //Пошаговое выполнение
  Anime1Click();
});
Button11.addEventListener('click', function (e) {   //Непрерывное выполнение
  Continu1Click();
});
Button12.addEventListener('click', function (e) {   //Изменить состояние компонента
  RAZ1Click();
});
Button13.addEventListener('click', function (e) {   //Увеличить
  Loupe1Click();
});
Button14.addEventListener('click', function (e) {   //Уменьшить
  Loupe2Click();
});
Button15.addEventListener('click', function (e) {   //Влево
  Levyj1Click();
});
Button16.addEventListener('click', function (e) {   //Вправо
  Pravyj1Click();
});
Button17.addEventListener('click', function (e) {   //Вверх
  Dessus1Click();
});
Button18.addEventListener('click', function (e) {   //Вниз
  Dessous1Click();
});
Button19.addEventListener('click', function (e) {   //Возврат
  Sortir1Click();
});
Button20.addEventListener('click', function (e) {   //О программе
  Apropos1Click();
});



canvas.addEventListener('mousedown', function (f) {
  X_s = f.pageX - this.offsetLeft;
  Y_s = f.pageY - this.offsetTop;
  //X_s = mouse.x * Faktor;
  //Y_s = mouse.y * Faktor;
  //X_s = mouse.x;
  //Y_s = mouse.y;

	  //++++++++++++++++++++++++++++++++++++++

		//  if ((event.which == 1) && Fichiermodifie) {
		if (event.which == 1) {
			Levyj = true;
			Pravyj = false;
			//clearInterval(id);
			//Mouse1Click();
		}
	
		if (event.which == 3) {
			Pravyj = true;
			Levyj = false;
			PetitMenu('#000000', 'Готов!');
			ActionMouse = '';
		}
			
		if (Fichiermodifie && Levyj) {
			Mouse1Click();
		}	
		
	}
);

//Обработка событий мыши
function Mouse1Click() {


  switch (ActionMouse) {
    case 'File':
      alert('Файл');
      funcCursor("default");
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Pointe_Objet2':

      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Ajoute_Objet2(Objet2, Celui_La2); //
      Ou_Que(); //Выбор места установки компонента
      ActionMouse = 'Ajoute_Objet3';
	  Levyj = false;
	  Pravyj = false;
      break;
    case 'Ajoute_Objet3':

      Ajoute_Objet3(Objet2, X_s / Faktor, Y_s / Faktor, Tip_Donc2, Celui_La2); //Вставка компонента
      PetitMenu('#000000', 'Готов!');
      Redess(false); //Перерисовка холста
	  Otobrazit_Nomera();
      funcCursor("default");
      ClearObjet();
      ActionMouse = '';
      Fichiermodifie = false;
	  Levyj = false;
	  Pravyj = false;
      break;

    //++++++++++++++++++++++++++++++++++++++
    case 'Texte':

      Sozdat_Texte2()
      Redess(false); //Перерисовка холста
	  Otobrazit_Nomera();

      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
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

	  Levyj = true;
	  Pravyj = false;
      } else {
		funcCursor("default");  
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
      }	  	  
      break;

	//++++++++++++++++++++++++++++++++++++++
	case 'Remove':
	 
      Celui_La2 = 1;
      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Effacer()  //
	  Redess(false);
	  Otobrazit_Nomera();
      //Ajoute_Objet2(Objet2, Celui_La2); //
      //Ou_Que(Lax2, Lay2, false, Tip_Donc2); //Выбор места установки компонента
      //PetitMenu('#000000', 'Готов!');
      //ActionMouse = '';
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
	  PetitMenu('#808000', '<Очистить> Правая кнопка = Назад');
	  Pointe_Tip = 'Tout';
  	  Pointe_Objet(Pointe_Tip, '#0000FF'); //Выбор компонента	  

      ActionMouse = 'Remove'
	  Levyj = true;
	  Pravyj = false;
      } else {
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
      }	  
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Move1':

      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
      Ou_Que(); //Выбор места установки компонента
      PetitMenu('#A6CAF0', '<Переместить>  Укажите новую позицию ?');
      ActionMouse = 'Move2';
	  Levyj = false;
	  Pravyj = false;
      break;

    case 'Move2':
      Deplace_Objet()
	  
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
	  PetitMenu('#A6CAF0', '<Переместить>  Выбор компонента ?');
      Objet2 = 'Toutsaufcanal';
	  Pointe_Objet(Objet2, '#0000FF'); //Выбор компонента	  

      ActionMouse = 'Move1'
	  Levyj = true;
	  Pravyj = false;
      } else {
		funcCursor("default");  
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
      }	  	  
      break;
    //++++++++++++++++++++++++++++++++++++++
    case 'DRA1':

      DRA(X_s, Y_s); //Ввод точки канала
      Entre_Canal(); //Ввод канала
      if (Ext) {
        Sozdat_Canal(); //Запись канала после введения данных
        Redess(false);  //Перерисовка холста
		Otobrazit_Nomera();
		
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
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
			
			} else { alert('Нет питания (красный)') } 

			ActionMouse = 'DRA1';
			Levyj = true;
			Pravyj = false;
		} else {
			funcCursor("default");  
			PetitMenu('#000000', 'Готов!');
			ActionMouse = '';
			Fichiermodifie = false;
			Levyj = false;
			Pravyj = false;
		}		

      }
      break;

    //++++++++++++++++++++++++++++++++++++++        
    case 'DRA2':

      DRA(X_s, Y_s); //Ввод точки канала
      Entre_CanalUpravlenie(); //Ввод канала
      if (Ext) {
        Sozdat_CanalUpravlenie(); //Запись канала после введения данных
        Redess(false); //Перерисовка холста
		Otobrazit_Nomera();
		
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
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
		   } else { alert('Нет контроля мощности (фиолетовый)') }
		   
			ActionMouse = 'DRA2'
			Levyj = true;
			Pravyj = false;
		} else {
			funcCursor("default");  
			PetitMenu('#000000', 'Готов!');
			ActionMouse = '';
			Fichiermodifie = false;
			Levyj = false;
			Pravyj = false;
		}			

      }
      break;
    case 'RAZ1': //Выбор положения при нажатии

      RAZ1Click2();
	  
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
	  
      Objet = 'Toutsaufcanal';
      Pointe_Objet(Objet, '#0000FF')
      PetitMenu('#A6CAF0', '<Маневр>  Выбор компонента ?');
	  
      ActionMouse = 'RAZ1';
	  Levyj = true;
	  Pravyj = false;
      } else {
		funcCursor("default");  
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
      }		  
      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime1': //Выбор положения при нажатии
      //Pasapas = true;
      
		Anime1();
        Redess(false);
	    Otobrazit_Nomera();
	    PetitMenu('#00FF00', '<Выполнить>   Нажмите  Левую кнопку: Пошаговый запуск   Правая кнопка: Выход из анимации или кнопка: Возврат ');
	    
		L_Action = 'Action';
		Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

		//ActionMouse = 'Anime1';

      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
        ActionMouse = 'Anime2'
		Levyj = true;
	    Pravyj = false;		
		
      } else {
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
      }

      break;

    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime2':        //Выбор положения при нажатии

      Heure = true;
      Pointe_Objet2(Objet2, Prox2); //Выбор компонента
	  RazEtap = 1; //Очистка каналов
      Anime2();


      Redess(false);
      Otobrazit_Nomera();
      ActionMouse = 'Anime1';

      if (['Un_Raspred', 'Un_Dat'].includes(Objet2)) {

        //Pasapas = true;
        //Anime1();

        //PetitMenu('#00FF00', '<Выполнить>   Нажмите  Левую кнопку: Пошаговый запуск   Правая кнопка: Выход из анимации или кнопка: Возврат');
        L_Action = 'Action';
        Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента


        ActionMouse = 'Anime2'
		Levyj = false;
	    Pravyj = false;
      }
	  Levyj = false;
	  Pravyj = false;
      funcCursor("default");
      break;


    //++++++++++++++++++++++++++++++++++++++  
    case 'Anime3':        //Выбор положения при нажатии
		
		Anime1();
		Redess(false);
	    Otobrazit_Nomera();
		PetitMenu('#00FF00', '<Выполнить> Действие (открыть или закрыть)');

		
		L_Action = 'Action';
		Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента


        
      if (Objet2 != 'Rien' || ActionMouse != 'Exit') { //Если нажата клавиша "Возврат" - то выход
        ActionMouse = 'Anime4'
		Levyj = true;
	    Pravyj = false;		
		
      } else {
        PetitMenu('#000000', 'Готов!');
        ActionMouse = '';
        Fichiermodifie = false;
		Levyj = false;
	    Pravyj = false;
		
      }
		
      break;
	  
	  
	//++++++++++++++++++++++++++++++++++++++ 
    case 'Anime4':        //Выбор положения при нажатии
	
		Heure = true;
		Pointe_Objet2(Objet2, Prox2); //Выбор компонента
		RazEtap = 1; //Очистка каналов
		Anime2();
		
		
		Redess(false);
		Otobrazit_Nomera();
		ActionMouse = 'Anime5';
		
		
		
	    if (['Un_Raspred', 'Un_Dat'].includes(Objet2)) {
        //Pasapas = true;
        //Anime1();
        //PetitMenu('#00FF00', '<Выполнить>   Нажмите  Левую кнопку: Пошаговый запуск   Правая кнопка: Выход из анимации или кнопка: Возврат');
        L_Action = 'Action';
        Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента
        ActionMouse = 'Anime4';
		Levyj = false;
	    Pravyj = false;
      }
	  //id = setInterval(function () {AnimeWork()}, 1000);
		
		Levyj = false;
	    Pravyj = false;
		funcCursor("default");
      break;

	//++++++++++++++++++++++++++++++++++++++ 
    case 'Anime5':
		id = setInterval(function () {AnimeWork()}, 1000);
		ActionMouse = 'Anime6';
		//clearInterval(id);
	  break;
	  
	  	//++++++++++++++++++++++++++++++++++++++ 
    case 'Anime6':
		//id = setInterval(function () {AnimeWork()}, 1000);
		ActionMouse = 'Anime3';
		clearInterval(id);
	  break;
  }

}

function AnimeWork() {

	
		//Pasapas = false;
		Anime1();
		Redess(false);
	    Otobrazit_Nomera();		
		//L_Action = 'Action';
		//Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента

		PetitMenu('#00FF00', '<Выполнение> Непрерывный запуск');
		
	    		
		//Heure = true;
		//Pointe_Objet2(Objet2, Prox2); //Выбор компонента
		//RazEtap = 1; //Очистка каналов
		Anime2();
        Redess(false);
		Otobrazit_Nomera();
	  
	  
	  	//if (['Un_Raspred', 'Un_Dat'].includes(Objet2)) {
        //Pasapas = true;
        //Anime1();
        //PetitMenu('#00FF00', '<Выполнить>   Нажмите  Левую кнопку: Пошаговый запуск   Правая кнопка: Выход из анимации или кнопка: Возврат');
        //L_Action = 'Action';
        //Pointe_Objet(L_Action, '#0000FF'); //Выбор компонента
        
		//Levyj = false;
	    //Pravyj = false;
      //}
        if (Objet2 == 'Rien' || ActionMouse == 'Exit' || Pravyj == true) {
          clearInterval(id);
		  Pasapas = true;
  
		  
        }	
		
}



//Константы
var Max_Raspredelitel = 35;
var Max_Gidrocilindr = 30;
var Max_Commande = 70;
var Max_CanalSilovoe = 100;
var Max_CanalUpravlenie = 200;
var Max_SilovoePitanie = 50;
var Max_Datchik = 60;
var Max_UpravleniePitanie = 50;
var Max_PeresechenieSilovoe = 50;
var Max_PeresechenieUpravlenie = 50;
var Max_Pamyat = 20;
var Max_Sequenceur = 5;
var Max_Kran = 30;
var Max_Manometr = 30;
var Max_Vyhod = 30;
var Max_Texte = 80;
var Coef = 1.2;
var VHauteur = 35 * Coef;//Высота элемента
var VLargeur = 130 * Coef;//Ширина элемента
var VH_Tige = 4 * Coef;//Высота штока
var VL_Tige = 130 * Coef;//Ширина штока
var VH_Soedinenie = 6 * Coef;//Высота окончания
var VCanal = 8 * Coef;
var VAmor = 10 * Coef;
var DLargeur = 30 * Coef;
var A_Pravyj = true;
var L_Soedinenie = VLargeur / 10;
var ARayon = 5;
var CLargeur = 20 * Coef;
var DPamyat = 24 * Coef;
var SLargeur = 36 * Coef;
var Maxtige = 9;
var Mintige = 2;
var Cote = 2.6 * Coef;
var Un = 1;
var Zero = 0;
var Bof = 2;
var Bouche = 3;
var MobDist = 5;//Дистанция между соединениями (при создании цепи)

//Массивы
var Raspredelitel = [];
var Sequenceur = [];
var Pointe = [];
var Gidrocilindr = [];
var Commande = [];
var CanalSilovoe = [];
var CanalUpravlenie = [];
var SilovoePitanie = [];
var UpravleniePitanie = [];
var Datchik = [];
var PeresechenieSilovoe = [];
var PeresechenieUpravlenie = [];
var Pamyat = [];
var Kran = [];
var Manometr = [];
var Vyhod = [];
var Texte = [];
var T_Parcours = [];
var Les_points = [];


//Сложные типы переменных
var Str16 = ''; //Можно убрать

//Переменные
var Nb_Gidrocilindr = 0, Nb_Raspredelitel = 0, Nb_Commande = 0, Nb_CanalSilovoe = 0, Nb_SilovoePitanie = 0, Nb_Datchik = 0;
var Nb_UpravleniePitanie = 0, Nb_CanalUpravlenie = 0, Nb_PeresechenieSilovoe = 0, Nb_PeresechenieUpravlenie = 0, Nb_Pamyat = 0;
var Nb_Sequenceur = 0, Nb_Kran = 0, Nb_Manometr = 0, Nb_Vyhod = 0, Nb_Texte = 0;
var G_Pour = 0, G_K = 0, X_s = 0, Y_s = 0, Nb_Point = 0;
var Staryj_Nb_Gidrocilindr = 0, Staryj_Nb_Raspredelitel = 0, Staryj_Nb_Datchik = 0, Staryj_Nb_Sila = 0;
var Staryj_Nb_UpravleniePitanie = 0, Staryj_Nb_PeresechenieSilovoe = 0, Staryj_Nb_PeresechenieUpravlenie = 0, Staryj_Nb_Commande = 0;
var Staryj_Nb_Canal = 0, Staryj_Nb_CanalUpravlenie = 0, Staryj_Nb_Pamyat = 0, Staryj_Nb_Sequenceur = 0, Staryj_Nb_Kran = 0;
var Staryj_Nb_Manometr = 0, Staryj_Nb_Vyhod = 0, Staryj_Nb_Texte = 0;
var Heur = 0, Minute = 0, Seconde = 0, Sec100 = 0;

var Levyj = true, Pravyj = true, SVG = true, Immonde_rustine_double_v = true, Immonde_rustine_galet_v = true;
var Actionencours = true, Fichiermodifie = true, Pasapas = true;
var Dialogvaleur = 0;
var Compteursouris = 0;
//var      MetaFile:TMetaFile;
var Faktor = 1, Staryj_Faktor = 0, XG = 0, YG = 0;
var Textenter = '', Heure = false, Prox2 = 0, Objet2 = '', Celui_La2 = 0, Tip_Donc2 = '', Lax2 = 0, Lay2 = 0;
var Puissance = true, Ext = true, Debut = true, XL = 0, YL = 0, Old_XL = 0, Old_YL = 0, XFin = 0, YFin = 0;
var Pointe_Tip = '', timerId = 0, RazEtap = 0;
//Raspredelitel.append()


function NewRaspredelitel(i) {

  Raspredelitel[i] = {
    X: 0,       //Координата X гидрораспределителя
    Y: 0,       //Координата Y гидрораспределителя
    Etat_Ext: [],
    Sila_Vyhod: [],
    ExtX: [],   //Координата X точки присоединения к распределителю 
    ExtY: [],   //Координата Y точки присоединения к распределителю 
    Com: [{
      Tip: '',
      Laquelle: 0
    }, {
      Tip: '',   //Тип концов распределителя
      Laquelle: 0
    }, {
      Tip: '',   //Тип концов распределителя
      Laquelle: 0
    }],
    Modele: '',   ////Модель распределителя
    Position: 1   //Положение распределителя 1 или 2
  }

}

function NewSequenceur(i) {

  Sequenceur[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Combien: 0
  }

}

function NewGidrocilindr(i) {

  Gidrocilindr[i] = {
    X: 0,
    Y: 0,
    Tige: 0,
    Etat_Ext: [],
    Sila_Vyhod: [],
    EntreeX: [],
    EntreeY: [],
    Modele: ''
  }

}

function NewCommande(i) {

  Commande[i] = {
    X: 0,
    Y: 0,
    Etat: 0,
    Modele: ''
  }

}

function NewCanalSilovoe(i) {

  CanalSilovoe[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Sila_Vyhod: 0,
    Pressure: 0, //Давление в линии
    Soedinenie: [{
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }, {
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }, {
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }]
  }

}

function NewCanalUpravlenie(i) {

  CanalUpravlenie[i] = {
    X: 0,
    Y: 0,
    NbPoint: 0,
    ParcoursX: [],
    ParcoursY: [],
    Etat: 0,
    Soedinenie: [{
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }, {
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }, {
      Tip: '',
      Lequel: 0,
      Podklyuchenie: 0
    }]
  }

}

function NewSilovoePitanie(i) {

  SilovoePitanie[i] = {
    X: 0,
    Y: 0,
    Pressure: 1 //Давление в линии
  }

}

function NewUpravleniePitanie(i) {

  UpravleniePitanie[i] = {
    X: 0,
    Y: 0
  }

}

function NewDatchik(i) {

  Datchik[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Modele: '',
    Etat: 0,
    Lie_a: 0,
    Position: 0
  }

}

function NewPeresechenieSilovoe(i) {

  PeresechenieSilovoe[i] = {
    X: 0,
    Y: 0,
    Etat: 0,
    Sila_Vyhod: 0
  }

}

function NewPeresechenieUpravlenie(i) {

  PeresechenieUpravlenie[i] = {
    X: 0,
    Y: 0,
    Etat: 0
  }

}

function NewPamyat(i) {

  Pamyat[i] = {
    X: 0,
    Y: 0,
    Etat_Ext: [],
    ExtX: [],
    ExtY: [],
    Etat: 0
  }

}

function NewKran(i) {

  Kran[i] = {
    X: 0,           //Координата X запорной арматуры
    Y: 0,           //Координата Y запорной арматуры
    Etat_Ext: [],   //Точки которые подключены
    Sila_Vyhod: [],
    Position: 1,       //Состояние запорной арматуры 1 - открыта, 2 - закрыта
    EntreeX: [],    //Координата X точки подключения
    EntreeY: [],    //Координата Y точки подключения
    Modele: ''      //Тип запорной арматуры
  }

}

function NewManometr(i) {

  Manometr[i] = {
    X: 0,           //Координата X манометра
    Y: 0,           //Координата Y манометра
    Etat: 0,        //Состояние манометра 1 - есть давление, 0 - нет давления
    Sila_Vyhod: 0,
    Pressure: 0,    //Давление в линии
    View: 0         //Отображение цифр на манометре 1 - отображаются, 2 - не отображаются
  }

}

function NewVyhod(i) {

  Vyhod[i] = {
    X: 0,           //Координата X выхода
    Y: 0,           //Координата Y выхода
  }

}

function NewTexte(i) {

  Texte[i] = {
    X: 0,
    Y: 0,
    Lataille: 0,
    Le_Texte: ''
  }

}


for (let i = 1; i <= 200; i++) {
  Les_points[i] = new Array(2);
}


var Branche2 = {
  Tip: '',
  Lequel: 0,
  Podklyuchenie: 0
}



//Примеры
//X=120;
//Y=100;
//Кран закрытый
//Triangle2(X-20, Y+10, X-20, Y-10, X, Y, true);
//Triangle2(X+20, Y+10, X+20, Y-10, X, Y, true);
//Ligne(X-20, Y, X-30, Y);
//Ligne(X+20, Y, X+30, Y);

//X=50;
//Y=100;
//Кран открытый
//Triangle2(X-20, Y+10, X-20, Y-10, X, Y, false);
//Triangle2(X+20, Y+10, X+20, Y-10, X, Y, false);
//Ligne(X-20, Y, X-30, Y);
//Ligne(X+20, Y, X+30, Y);

//X=200;
//Y=100;
//Обратный клапан закрытый
//Ligne(X-7, Y, X, Y-8);
//Ligne(X-7, Y, X, Y+8);
//Cercle(X, Y, 5);
//Ligne(X-7, Y, X-15, Y);
//Ligne(X+5, Y, X+15, Y);

//X=250;
//Y=100;
//Обратный клапан открытый
//Ligne(X-7, Y, X, Y-8);
//Ligne(X-7, Y, X, Y+8);
//Cercle(X+5, Y, 5);
//Ligne(X-7, Y, X-15, Y);
//Ligne(X+10, Y, X+15, Y);

//X=350;
//Y=100;
//Манометр
//Ligne(X, Y, X, Y-20);
//Cercle(X, Y-40, 20)
//Ligne(X+15, Y-25, X-15, Y-55);
//Ligne(X-15, Y-55, X-5, Y-50);
//Ligne(X-15, Y-55, X-10, Y-45);
//ctx.textAlign = 'center';
//ctx.font = (Math.round(10 * Faktor) + 4) + 'px Arial';
//Otxy(X, Y-35, "0.00")

//X=350;
//Y=200;
//Выход
//Ligne(X, Y, X, Y-20);
//Triangle2(X+10, Y-20, X-10, Y-20, X, Y-35, false)