var p_url=location.search.substring(1);
var wrapper = document.getElementById("start");

window.onload = function () {
    create_left(person_arr[p_url].ava, person_arr[p_url].name, person_arr[p_url].like);
    create_right(person_arr[p_url].name, person_arr[p_url].data, person_arr[p_url].about_1, person_arr[p_url].about_2, person_arr[p_url].about_3,person_arr[p_url].about_4, person_arr[p_url].about_5, person_arr[p_url].about_6,person_arr[p_url].about_7, person_arr[p_url].foto1, person_arr[p_url].foto2, person_arr[p_url].foto3, person_arr[p_url].foto4, person_arr[p_url].foto5);
    
  };
  function create_left(ava, name, like){
    var left = document.createElement("div");
    left.className = "left";
    var avatar = document.createElement("img");
    avatar.className = 'avatar';
    avatar.src = ava;
    var left__head = document.createElement("div");
    left__head.className = "left__head";
    var left__head__content = document.createElement("div");
    left__head__content.className = "left__head__content";
    var left__1__block = document.createElement("div");
    left__1__block.className = "left__1__block";
    var nickname = document.createElement("div");
    nickname.className = "nickname";
    nickname.innerText = name;
    var button__back__block = document.createElement("div");
    button__back__block.className = "button__back__block";
    var button__back = document.createElement("button");
    button__back.className = "button__back";
    button__back.id = "text";
    button__back.onClick = "document.location='new_chat.html'";   
    button__back.innerText = 'Повернутися у чат';
    var left__2__block = document.createElement("div");
    left__2__block.className = "left__2__block";
    var button__like = document.createElement("button");
    button__like.className = "button__like";
    var button__like__2 = document.createElement("span");
    button__like__2.className = "button__like__2";
    button__like__2.innerText =  like;
    wrapper.appendChild(left);
    left.appendChild(avatar);
    left.appendChild(left__head);
    left__head.appendChild(left__head__content);
    left__head__content.appendChild(left__1__block);
    left__head__content.appendChild(left__2__block);
    left__1__block.appendChild(nickname);
    left__1__block.appendChild(button__back__block);
    button__back__block.appendChild(button__back);
    left__2__block.appendChild(button__like);
    button__like.appendChild(button__like__2);
  }
  function create_right(name, data, about_1, about_2, about_3, about_4, about_5, about_6, about_7, foto1, foto2, foto3, foto4, foto5){
    var right = document.createElement("div");
    right.className = "right";
    var content = document.createElement("div");
    content.className = "content";
    var block__1 = document.createElement("div");
    block__1.className = "block__1 clearfix";
    var b__1__left = document.createElement("div");
    b__1__left.className = "b__1__left";
    var nickname__2 = document.createElement("div");
    nickname__2.className = "nickname__2";
    nickname__2.innerText = name;
    var line = document.createElement("hr");
    line.className = "line";
    var b_1_right = document.createElement("div");
    b_1_right.className = "b_1_right";
    var create__name = document.createElement("div");
    create__name.className = "create__name";
    create__name.innerText = 'Акаунт створено :';
    var create__date = document.createElement("div");
    create__date.className = "create__date";
    create__date.innerText = data;
    var block__info__1 = document.createElement("div");
    block__info__1.className = "block__info__1 clearfix";
    var about__title = document.createElement("div");
    about__title.className = "about__title";
    about__title.innerText = 'Про мене';
    var about__text = document.createElement("div");
    about__text.className = "about__text";
    about__text.innerText = about_1;
    var block__info__2 = document.createElement("div");
    block__info__2.className = "block__info__2 clearfix";
    var one__info_1 = document.createElement("div");
    one__info_1.className = "one__info";
    var about__title_1 = document.createElement("div");
    about__title_1.className = "about__title";
    about__title_1.innerText = 'Вік';
    var little__info__text__age = document.createElement("div");
    little__info__text__age.className = "little__info__text__age";
    little__info__text__age.innerText = about_2;
    var one__info_2 = document.createElement("div");
    one__info_2.className = "one__info";
    var about__title_2 = document.createElement("div");
    about__title_2.className = "about__title";
    about__title_2.innerText = 'Школа';
    var little__info__text_2 = document.createElement("div");
    little__info__text_2.className = "little__info__text";
    little__info__text_2.innerText = about_3;
    var one__info_3 = document.createElement("div");
    one__info_3.className = "one__info";
    var about__title_3 = document.createElement("div");
    about__title_3.className = "about__title";
    about__title_3.innerText = 'Школа';
    var little__info__text_3 = document.createElement("div");
    little__info__text_3.className = "little__info__text";
    little__info__text_3.innerText = about_4;
    var one__info_4 = document.createElement("div");
    one__info_4.className = "one__info";
    var about__title_4 = document.createElement("div");
    about__title_4.className = "about__title";
    about__title_4.innerText = 'Школа';
    var little__info__text_4 = document.createElement("div");
    little__info__text_4.className = "little__info__text";
    little__info__text_4.innerText = about_5;
    var one__info_5 = document.createElement("div");
    one__info_5.className = "one__info";
    var about__title_5 = document.createElement("div");
    about__title_5.className = "about__title";
    about__title_5.innerText = 'Школа';
    var little__info__text_5 = document.createElement("div");
    little__info__text_5.className = "little__info__text";
    little__info__text_5.innerText = about_6;
    var one__info_6 = document.createElement("div");
    one__info_6.className = "one__info";
    var about__title_6 = document.createElement("div");
    about__title_6.className = "about__title";
    about__title_6.innerText = 'Школа';
    var little__info__text_6 = document.createElement("div");
    little__info__text_6.className = "little__info__text";
    little__info__text_6.innerText = about_7;
    var line_2 = document.createElement("hr");
    line_2.className = "line";
    var foto__block = document.createElement('div');
    foto__block.className = 'foto__block clearfix';
    var tittle__foto = document.createElement('div');
    tittle__foto.className = 'tittle__foto';
    tittle__foto.innerText = 'Фотографії';
    var foto__5 = document.createElement('div');
    foto__5.className = 'foto__5';
    var foto_1 = document.createElement('a');
    foto_1.href = foto1;
    foto_1.dataset.lightbox = 'roadtrip';
    var one__foto_1 = document.createElement('img');
    one__foto_1.src = foto1;
    one__foto_1.className = 'one__foto';
    var foto_2 = document.createElement('a');
    foto_2.href = foto2;
    foto_2.dataset.lightbox = 'roadtrip';
    var one__foto_2 = document.createElement('img');
    one__foto_2.src = foto2;
    one__foto_2.className = 'one__foto';
    var foto_3 = document.createElement('a');
    foto_3.href = foto3;
    foto_3.dataset.lightbox = 'roadtrip';
    var one__foto_3 = document.createElement('img');
    one__foto_3.src = foto3;
    one__foto_3.className = 'one__foto';
    var foto_4 = document.createElement('a');
    foto_4.href = foto4;
    foto_4.dataset.lightbox = 'roadtrip';
    var one__foto_4 = document.createElement('img');
    one__foto_4.src = foto4;
    one__foto_4.className = 'one__foto';
    var foto_5 = document.createElement('a');
    foto_5.href = foto5;
    foto_5.dataset.lightbox = 'roadtrip';
    var one__foto_5 = document.createElement('img');
    one__foto_5.src = foto5;
    one__foto_5.className = 'one__foto';
    var line_3 = document.createElement("hr");
    line_3.className = "line";
    var contact = document.createElement('p');
    contact.className = 'contact';
    contact.innerText = "Контакт";
    // var wrt_btn = document.createElement('div');
    // wrt_btn.className = 'wrt_btn';
    var button__write = document.createElement('button');
    button__write.onclick = write_butn;
    button__write.className = 'button__write';
    var button__write__text = document.createElement('span');
    button__write__text.className = 'button__write__text';
    button__write__text.innerText = 'Написати';
    var button__like__other = document.createElement('button');
    button__like__other.onclick = like_butn;
    button__like__other.className = 'button__like__other';
    var button__like__text = document.createElement('span');
    button__like__text.className = 'button__like__text';
    button__like__text.innerText = 'Лайк';
    wrapper.appendChild(right);
    right.appendChild(content);
    content.appendChild(block__1);
    block__1.appendChild(b__1__left);
    b__1__left.appendChild(nickname__2);
    b__1__left.appendChild(line);
    block__1.appendChild(b_1_right);
    b_1_right.appendChild(create__name);
    b_1_right.appendChild(create__date);
    content.appendChild(block__info__1);
    block__info__1.appendChild(about__title);
    block__info__1.appendChild(about__text);
    content.appendChild(block__info__2);
    block__info__2.appendChild(one__info_1);
    one__info_1.appendChild(about__title_1);
    one__info_1.appendChild(little__info__text__age);
    block__info__2.appendChild(one__info_2);
    one__info_2.appendChild(about__title_2);
    one__info_2.appendChild(little__info__text_2);
    block__info__2.appendChild(one__info_3);
    one__info_3.appendChild(about__title_3);
    one__info_3.appendChild(little__info__text_3);
    block__info__2.appendChild(one__info_4);
    one__info_4.appendChild(about__title_4);
    one__info_4.appendChild(little__info__text_4);
    block__info__2.appendChild(one__info_5);
    one__info_5.appendChild(about__title_5);
    one__info_5.appendChild(little__info__text_5);
    block__info__2.appendChild(one__info_6);
    one__info_6.appendChild(about__title_6);
    one__info_6.appendChild(little__info__text_6);
    content.appendChild(line_2);
    content.appendChild(foto__block);
    foto__block.appendChild(tittle__foto);
    foto__block.appendChild(foto__5);
    foto__5.appendChild(foto_1);
    foto__5.appendChild(foto_2);
    foto__5.appendChild(foto_3);
    foto__5.appendChild(foto_4);
    foto__5.appendChild(foto_5);
    foto_1.appendChild(one__foto_1);
    foto_2.appendChild(one__foto_2);
    foto_3.appendChild(one__foto_3);
    foto_4.appendChild(one__foto_4);
    foto_5.appendChild(one__foto_5);
    content.appendChild(line_3);
    content.appendChild(contact);
    content.appendChild(button__write);
    // wrt_btn.appendChild(button__write);
    content.appendChild(button__like__other);
    button__write.appendChild(button__write__text);
    button__like__other.appendChild(button__like__text);
  }
   function write_butn(){
    alert('На даний момент ця можливість недопрацьована. Перевірте особисту інформацію користувача, можливо там є данні для спілкування.')
  }
  let like = true;
   function like_butn(){
    const btn = document.querySelector('.button__like__other');
    let likeCount = document.querySelector('.button__like__2').innerHTML;
    console.log(like);
    likeCount = like ? ++likeCount : --likeCount;
    like = !like;
    console.log(like);
    document.querySelector('.button__like__2').innerHTML = likeCount;
  }

  var person_arr = [
    { id: "0",  name: "Jon",    like: '1 ', data: '11.05.2020', about_1: 'Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Сомнение рефлектирует естественный закон исключённого третьего.. Надстройка нетривиальна. Надст',  about_2: '21', about_3: 'Наряду с этим ощущен', about_4: 'Структурализм абстра', about_5: 'Дискретность амбивал', about_6: 'Смысл жизни, следова',about_7: 'Согласно мнению изве', ava: "../img/avatar0.jpg", foto1: "../img/foto1_0.jpg", foto2: "../img/foto2_0.jpg", foto3: "../img/foto3_0.jpg", foto4: "../img/foto4_0.jpg", foto5: "../img/foto5_0.jpg"},
    { id: "1",  name: "Jon",    like: '2 ', data: '11.05.2020', about_1: 'Дискретность амбивалентно транспонирует гравитационный парадокс. Дедуктивный метод решительно представляет собой бабувизм. Дискретность амбивалентно транспонирует гравитационный парадокс. Созерцание н',  about_2: '21', about_3: 'Отсюда естественно с', about_4: 'Смысл жизни, следова', about_5: 'Структурализм абстра', about_6: 'Дискретность амбивал',about_7: 'Отсюда естественно с', ava: "../img/avatar1.jpg", foto1: "../img/foto1_1.jpg", foto2: "../img/foto2_1.jpg", foto3: "../img/foto3_1.jpg", foto4: "../img/foto4_1.jpg", foto5: "../img/foto5_1.jpg"},
    { id: "2",  name: "Katy",   like: '4 ', data: '11.05.2020', about_1: 'Смысл жизни, следовательно, творит данный закон внешнего мира. Сомнение рефлектирует естественный закон исключённого третьего.. Согласно мнению известных философов, дедуктивный метод естественно порожд', about_2: '21', about_3: 'Апостериори, гравита', about_4: 'Отсюда естественно с', about_5: 'Смысл жизни, следова', about_6: 'Согласно мнению изве',about_7: 'Дискретность амбивал', ava: "../img/avatar2.jpg", foto1: "../img/foto1_2.jpg", foto2: "../img/foto2_2.jpg", foto3: "../img/foto3_2.jpg", foto4: "../img/foto4_2.jpg", foto5: "../img/foto5_2.jpg" },
    { id: "3",  name: "Roan",   like: '2 ', data: '11.05.2020', about_1: 'Согласно мнению известных философов, дедуктивный метод естественно порождает и обеспечивает мир, tertium nоn datur. Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятель',  about_2: '21', about_3: 'Сомнение рефлектируе', about_4: 'Апостериори, гравита', about_5: 'Отсюда естественно с', about_6: 'Созерцание непредска',about_7: 'Апостериори, гравита', ava: "../img/avatar3.jpg", foto1: "../img/foto1_3.jpg", foto2: "../img/foto2_3.jpg", foto3: "../img/foto3_3.jpg", foto4: "../img/foto4_3.jpg", foto5: "../img/foto5_3.jpg" },
    { id: "4",  name: "John",   like: '6 ', data: '11.05.2020', about_1: 'Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Дискретность амбивалентно транспонирует гравитационный парадокс. Сомнение рефлектирует естественный закон исключённого треть',  about_2: '21', about_3: 'Интеллект естественн', about_4: 'Сомнение рефлектируе', about_5: 'Апостериори, гравита', about_6: 'Отсюда естественно с',about_7: 'Отсюда естественно с', ava: "../img/avatar4.jpg", foto1: "../img/foto1_4.jpg", foto2: "../img/foto2_4.jpg", foto3: "../img/foto3_4.jpg", foto4: "../img/foto4_4.jpg", foto5: "../img/foto5_4.jpg" },
    { id: "5",  name: "Grlfsd", like: '90', data: '11.05.2020', about_1: 'Наряду с этим ощущение мира решительно контролирует непредвиденный гравитационный парадокс. Дедуктивный метод решительно представляет собой бабувизм. Гедонизм осмысляет дедуктивный метод. Импликация, ',  about_2: '21', about_3: 'Созерцание непредска', about_4: 'Интеллект естественн', about_5: 'Сомнение рефлектируе', about_6: 'Апостериори, гравита',about_7: 'Отсюда естественно с', ava: "../img/avatar5.jpg", foto1: "../img/foto1_5.jpg", foto2: "../img/foto2_5.jpg", foto3: "../img/foto3_5.jpg", foto4: "../img/foto4_5.jpg", foto5: "../img/foto5_5.jpg" },
    { id: "6",  name: "Jon",    like: '64', data: '11.05.2020', about_1: 'Структурализм абстрактен. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Дедуктивный метод решительно представляет собой бабувизм. Созерцание непредсказуемо', about_2: '21', about_3: 'Наряду с этим ощущен', about_4: 'Созерцание непредска', about_5: 'Интеллект естественн', about_6: 'Отсюда естественно с',about_7: 'Апостериори, гравита', ava: "../img/avatar6.jpg", foto1: "../img/foto1_6.jpg", foto2: "../img/foto2_6.jpg", foto3: "../img/foto3_6.jpg", foto4: "../img/foto4_6.jpg", foto5: "../img/foto5_6.jpg" },
    { id: "7",  name: "Katy",   like: '22', data: '11.05.2020', about_1: 'Аксиома силлогизма, по определению, представляет собой неоднозначный предмет деятельности. Структурализм абстрактен. Надстройка нетривиальна. Апостериори, гравитационный парадокс амбивалентно понимает ', about_2: '21', about_3: 'Структурализм абстра', about_4: 'Наряду с этим ощущен', about_5: 'Созерцание непредска', about_6: 'Сомнение рефлектируе',about_7: 'Созерцание непредска', ava: "../img/avatar7.jpg", foto1: "../img/foto1_7.jpg", foto2: "../img/foto2_7.jpg", foto3: "../img/foto3_7.jpg", foto4: "../img/foto4_7.jpg", foto5: "../img/foto5_7.jpg"},
    { id: "8",  name: "Roan",   like: '1 ', data: '11.05.2020', about_1: 'Гедонизм осмысляет дедуктивный метод. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. Отсюда естественно следует, что автоматизация дискредитирует предмет де', about_2: '21', about_3: 'Смысл жизни, следова', about_4: 'Структурализм абстра', about_5: 'Наряду с этим ощущен', about_6: 'Интеллект естественн',about_7: 'Сомнение рефлектируе', ava: "../img/avatar8.jpg", foto1: "../img/foto1_8.jpg", foto2: "../img/foto2_8.jpg", foto3: "../img/foto3_8.jpg", foto4: "../img/foto4_8.jpg", foto5: "../img/foto5_8.jpg" },
    { id: "9",  name: "John",   like: '0 ', data: '11.05.2020', about_1: 'Структурализм абстрактен. Надстройка нетривиальна. Дедуктивный метод решительно представляет собой бабувизм. Апостериори, гравитационный парадокс амбивалентно понимает под собой интеллигибельный знак. ', about_2: '21', about_3: 'Дискретность амбивал', about_4: 'Смысл жизни, следова', about_5: 'Структурализм абстра', about_6: 'Созерцание непредска',about_7: 'Интеллект естественн', ava: "../img/avatar9.jpg", foto1: "../img/foto1_9.jpg", foto2: "../img/foto2_9.jpg", foto3: "../img/foto3_9.jpg", foto4: "../img/foto4_9.jpg", foto5: "../img/foto5_9.jpg" },
    { id: "10", name: "Grlfsd", like: '44', data: '11.05.2020', about_1: 'Интеллект естественно понимает под собой интеллигибельный закон внешнего мира, открывая новые горизонты. Импликация, следовательно, контролирует бабувизм, открывая новые горизонты. Согласно мнению изв',  about_2: '21', about_3: 'Согласно мнению изве', about_4: 'Дискретность амбивал', about_5: 'Смысл жизни, следова', about_6: 'Наряду с этим ощущен',about_7: 'Созерцание непредска', ava: "../img/avatar0.jpg", foto1: "../img/foto1_0.jpg", foto2: "../img/foto2_0.jpg", foto3: "../img/foto3_0.jpg", foto4: "../img/foto4_0.jpg", foto5: "../img/foto5_0.jpg" },
  ];