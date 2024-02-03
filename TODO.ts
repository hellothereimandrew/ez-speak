/* 
  Текущие задачи {
    Добавить возможность создавать свои кнопки-папки, если папок > 5, (каналы, лс и прочее),
    Добавить установку фона,
    Передавать введенные данные пользователя в главный компонент (имя, иконка, роль),
  }
*/

/* 
  auth {
    Исправить логотип (сделать по аналогии с главным компонентом),
  
    Сделать защиту при авторизации,
    Доработать авторизацию (добавить новые компоненты),
    Сделать спинер загрузки при переходе в приложение,
    Ограничить ввод символов в логин и пароль,

    ? Добавить выбор изображения при регистрации,
    ? Сделать компонент с добавлением иконки пользователя при регистрации,
  }
*/

/* 
  main-leftbar {
    Перерисовать все иконки,
    Добавить иконку прикрепленного канала,

    Сделать отдельные компоненты для приватных и групповых каналов,
    Добавить доп логику для контекстного меню (покинуть канал и тд),
    Доделать метод удаления (вызывать при нажатии на канал из контекстного меню),
    Ограничить ввод символов в поле роль, название канала,

    ? При нажатии на иконку пользователя перекидывать в настройки аккаунта или выводить инфу в отдельном окне,
    ? Сделать дочерний роут (/main/options),

    main-leftbar-aside-menu {
      Доработать верстку быстрых настроек,

      Добавить кнопки выключения звука/голоса,
      Добавить изменение цвета выделенных элементов,
      Добавить изменение шрифта,
    }

    main-leftbar-aside-notifi {
      Доработать верстку уведомлений,
    
      Реализовать метод очистки уведомлений,
      Выделять иконку уведомлений (или добавить новую), если их больше 0 (красный цвет),
    }
  }
*/

/* 
  main-chat-section {
    Исправить верстку сообщений и дизайн,
 
    Добавить методы из контекстного меню для манипуляции сообщениями (удалить, редактировать и тд),
    Добавить метод отправки сообщений (голос),
    Добавить эмодзи и их отображение в списке сообщений,
    Добавить прикрепление файлов и их отображение в списке сообщений,
    Открывать изображение на весь экран если оно есть в чате,
    Добавить меню с форматированием текста (курсив, жир, КОД и тд),
    Открывать райтбар при нажатии на имя пользователя в сообщении (передавать пользователя из сообщения, если свой - хз),
    Сделать поиск по сообщениям,
    Сделать подсветку и скролл до искомого сообщения,
  }
*/

/* 
  main-rightbar {
    Доработать верстку и дизайн,
    Выделять иконку в зависимости от статуса пользователя (в сети и тд),

    Добавить роут до настроек канала при нажатии на кнопку (если админ),
    Сделать контекстное меню при нажатии на участника канала (выгнать, написать и тд),
    Менять состояние канала (приватный/открытый) при нажатии на иконку,
    Добавить иконку "Копировать" для id чата,
    Добавить контекстное меню для добавления, удаления пользователей,
    В контекстное меню добавить кнопку для перехода к настройкам канала,
    Добавить кнопки аналогичные выпадающему меню хедера,
  }
*/

/* 
  options {
    Сверстать полноэкранные настройки, включая компоненты,
    
    Добавить Х для перехода в основное окно,
    Передавать в хедер текущую выбранную настройку,
    Изменить размер хедера как в мейне,
    Выделять активную "настроку",
    Закрепить выход из учетки внизу,
  }
*/

/* 
  all {
    Добавить анимации во все компоненты,
    Дать нормальные названия классам во всех компонентах,
    Почистить комментарии,
    Почистить код и попытаться его оптимизировать,
    Привести все компоненты к единому виду,
    Сделать стратегию OnPush,
    Сделать "типовые" классы scss,

    ? Добавить тень для контекстного меню,
  }
*/

/* 
  other {
    Сделать отдельные компоненты для контекстного меню, выпадающего списка и всплывающих окон,
    Добавить роли (админ, пользователь, модер) для управления каналами,
    Сделать собственные селекты,
    Сделать собственные инпуты (радио, рендж и тд.),
    Добавить иконку приватных или публичных каналов для райтбара и лефтбара (рядом с наименованием канала),

    ? Добавить иконки для контекстных меню,
    Если иконка канала/пользователя не установлена сделать заглушку из первых двух символов в названии,
    ? Скрывать скролл автоматически по таймеру (3 сек),
    ? Добавить пользовательские иконки рядом с именем пользователя (прем),
    ? Добавить пользовательские иконки рядом с именем канала (прем),
  }
*/

/* 
  bugs {
    main-leftbar {
      Передать hideContextMenu в компонент main,
      Добавить проверку на одинаковое название канала при создании,
      Добавить проверку на вторую открытую панель,
      Закрывать боковую панель при клике ЛКМ на свободном месте,
      Высота меню настроек и окна уведомлений не на весь экран,
      Если есть скролл, то меню создания канала не закрепляется,
      Удалять закрепленный канал, если канал отсутствует в общем списке,
      Удалять канал из общего списка, если канал в списке закрепленных,
      Запретить прикреплять повторяющиеся каналы,
    }

    main-chat-section {
      Не отправляется сообщение при нажатии на иконку "Отправить",
      Меняется размер окна и появляется скролл, если вызвать контекстное меню в самом низу окна,
      Найти другой способ прокрутки вниз,
      Не закрывать чат по нажатию на название канала,
      Исправить расположение выпадающего меню,
      Не закрывается чат, если каналов нет в списке,
    }

    main-rightbar {}

    options {}
  }
*/

/* 
  errors {
    Неизвестная ошибка связанная с райтбаром (инпут, оутпут) 
    Unchecked runtime.lastError: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received,
    
    Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.
  }
*/
