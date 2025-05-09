document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');
  const userInfo = document.getElementById('user-info');
  const navMenu = document.getElementById('nav-menu');
  const loginInput = document.getElementById('login-input');
  const passwordInput = document.getElementById('password-input');
  const purchasesBody = document.getElementById('purchases-body');
  const reportsBody = document.getElementById('reports-body');
  const inventoryBody = document.getElementById('inventory-body');
  const suppliersBody = document.getElementById('suppliers-body');
  const archiveBody = document.getElementById('archive-body');
  const searchInput = document.getElementById('search-input');
  const reportSearch = document.getElementById('report-search');
  const inventorySearch = document.getElementById('inventory-search');
  const supplierSearch = document.getElementById('supplier-search');
  const archiveSearch = document.getElementById('archive-search');
  const totalPurchases = document.getElementById('total-purchases');
  const totalAmount = document.getElementById('total-amount');
  const lastPurchase = document.getElementById('last-purchase');
  const activeSuppliers = document.getElementById('active-suppliers');

  // Dinamik ma'lumotlarni saqlash uchun arraylar
  let purchasesData = [
    { id: 1, product: 'Noutbuk', category: 'IT-oborudovanie', date: '10.03.2024', amount: '$5000', status: 'Tayyor' },
    { id: 2, product: 'Printer', category: 'Ofisnye prinadlezhnosti', date: '11.03.2024', amount: '$4000', status: 'Kutilmoqda' },
    { id: 3, product: 'Bumaga', category: 'Ofisnye prinadlezhnosti', date: '12.03.2024', amount: '$3000', status: 'Tayyor' }
  ];
  let inventoryData = [
    { id: 1, product: 'Noutbuk', quantity: '10', warehouse: 'Ombor A' },
    { id: 2, product: 'Printer', quantity: '5', warehouse: 'Ombor B' },
    { id: 3, product: 'Bumaga', quantity: '100', warehouse: 'Ombor A' }
  ];
  let suppliersData = [
    { id: 1, name: 'Alibaba Ltd', phone: '+998 90 123 45 67', address: 'Toshkent' },
    { id: 2, name: 'TechCorp', phone: '+998 91 234 56 78', address: 'Samarqand' }
  ];
  let archiveData = [
    { id: 1, product: 'Monitor', date: '01.02.2024', amount: '$2000' },
    { id: 2, product: 'Klaviatura', date: '15.01.2024', amount: '$1500' }
  ];

  // Tillarni belgilash
  const translations = {
    uz: {
      'dashboard': 'Asosiy ekran',
      'purchases': 'Xaridlar',
      'add-purchase': 'Xarid qo‘shish',
      'reports': 'Hisobotlar',
      'settings': 'Sozlamalar',
      'inventory': 'Inventarizatsiya',
      'suppliers': 'Yetkazib beruvchilar',
      'analytics': 'Analitika',
      'notifications': 'Bildirishnomalar',
      'archive': 'Arxiv',
      'logout': 'Chiqish',
      'slogan': 'Har bir xaridda aniqlik',
      'login-label': 'Login',
      'password-label': 'Parol',
      'login-btn': 'Kirish',
      'exit-btn': 'Chiqish',
      'total-purchases-card': 'Jami xaridlar: ',
      'total-amount-card': 'Jami summa: ',
      'last-purchase-card': 'Oxirgi xarid: ',
      'active-suppliers-card': 'Faol yetkazib beruvchilar: ',
      'id': 'ID',
      'product-name': 'Mahsulot nomi',
      'category': 'Kategoriya',
      'date': 'Sana',
      'amount': 'Summa',
      'status': 'Holat',
      'status-ready': 'Tayyor',
      'status-pending': 'Kutilmoqda',
      'status-cancelled': 'Bekor qilingan',
      'save-btn': 'Saqlash',
      'cancel-btn': 'Bekor qilish',
      'monthly-expenses': 'Oylik xarajatlar',
      'category-distribution': 'Kategoriya bo‘yicha taqsimot',
      'report': 'Hisobot',
      'quantity': 'Miqdor',
      'purchases-report': 'Xaridlar hisoboti',
      'category-report': 'Kategoriya taqsimoti',
      'total-expenses-report': 'Jami xarajatlar',
      'username-label': 'Foydalanuvchi nomi',
      'role-label': 'Rol',
      'language-label': 'Til',
      'role-buyer': 'Pokupatel',
      'role-admin': 'Administrator',
      'role-manager': 'Manager',
      'language-uz': 'O‘zbekcha',
      'language-ru': 'Русский',
      'language-en': 'English',
      'product': 'Mahsulot',
      'warehouse': 'Ombor',
      'add-btn': 'Qo‘shish',
      'add-inventory': 'Inventarizatsiyaga qo‘shish',
      'name': 'Ism',
      'phone': 'Telefon',
      'address': 'Manzil',
      'add-supplier': 'Yetkazib beruvchi qo‘shish',
      'expense-trend': 'Xarajat tendensiyasi',
      'supplier-efficiency': 'Yetkazib beruvchi samaradorligi',
      'notification-1': 'Yangi xarid qo‘shildi: Noutbuk (10.03.2024)',
      'notification-2': 'Yetkazib beruvchi: Alibaba Ltd, qo‘ng‘iroq kutilmoqda',
      'notification-3': 'Ombor A: 50 dona bumaga qoldi',
      'please-fill': 'Iltimos, barcha maydonlarni to‘ldiring!',
      'please-fill-username': 'Iltimos, foydalanuvchi nomini kiriting!',
      'settings-saved': 'Sozlamalar saqlandi!',
      'unknown': 'Noma’lum'
    },
    ru: {
      'dashboard': 'Главный экран',
      'purchases': 'Покупки',
      'add-purchase': 'Добавить покупку',
      'reports': 'Отчёты',
      'settings': 'Настройки',
      'inventory': 'Инвентаризация',
      'suppliers': 'Поставщики',
      'analytics': 'Аналитика',
      'notifications': 'Уведомления',
      'archive': 'Архив',
      'logout': 'Выход',
      'slogan': 'Точность в каждой покупке',
      'login-label': 'Логин',
      'password-label': 'Пароль',
      'login-btn': 'Войти',
      'exit-btn': 'Выйти',
      'total-purchases-card': 'Всего покупок: ',
      'total-amount-card': 'Общая сумма: ',
      'last-purchase-card': 'Последняя покупка: ',
      'active-suppliers-card': 'Активные поставщики: ',
      'id': 'ID',
      'product-name': 'Название продукта',
      'category': 'Категория',
      'date': 'Дата',
      'amount': 'Сумма',
      'status': 'Статус',
      'status-ready': 'Готово',
      'status-pending': 'Ожидается',
      'status-cancelled': 'Отменено',
      'save-btn': 'Сохранить',
      'cancel-btn': 'Отменить',
      'monthly-expenses': 'Месячные расходы',
      'category-distribution': 'Распределение по категориям',
      'report': 'Отчёт',
      'quantity': 'Количество',
      'purchases-report': 'Отчёт по покупкам',
      'category-report': 'Распределение категорий',
      'total-expenses-report': 'Общие расходы',
      'username-label': 'Имя пользователя',
      'role-label': 'Роль',
      'language-label': 'Язык',
      'role-buyer': 'Покупатель',
      'role-admin': 'Администратор',
      'role-manager': 'Менеджер',
      'language-uz': 'Узбекский',
      'language-ru': 'Русский',
      'language-en': 'Английский',
      'product': 'Продукт',
      'warehouse': 'Склад',
      'add-btn': 'Добавить',
      'add-inventory': 'Добавить в инвентаризацию',
      'name': 'Имя',
      'phone': 'Телефон',
      'address': 'Адрес',
      'add-supplier': 'Добавить поставщика',
      'expense-trend': 'Тенденция расходов',
      'supplier-efficiency': 'Эффективность поставщика',
      'notification-1': 'Добавлена покупка: Ноутбук (10.03.2024)',
      'notification-2': 'Поставщик: Alibaba Ltd, ожидается звонок',
      'notification-3': 'Склад A: осталось 50 листов бумаги',
      'please-fill': 'Пожалуйста, заполните все поля!',
      'please-fill-username': 'Пожалуйста, введите имя пользователя!',
      'settings-saved': 'Настройки сохранены!',
      'unknown': 'Неизвестно'
    },
    en: {
      'dashboard': 'Dashboard',
      'purchases': 'Purchases',
      'add-purchase': 'Add Purchase',
      'reports': 'Reports',
      'settings': 'Settings',
      'inventory': 'Inventory',
      'suppliers': 'Suppliers',
      'analytics': 'Analytics',
      'notifications': 'Notifications',
      'archive': 'Archive',
      'logout': 'Logout',
      'slogan': 'Precision in Every Purchase',
      'login-label': 'Login',
      'password-label': 'Password',
      'login-btn': 'Login',
      'exit-btn': 'Exit',
      'total-purchases-card': 'Total Purchases: ',
      'total-amount-card': 'Total Amount: ',
      'last-purchase-card': 'Last Purchase: ',
      'active-suppliers-card': 'Active Suppliers: ',
      'id': 'ID',
      'product-name': 'Product Name',
      'category': 'Category',
      'date': 'Date',
      'amount': 'Amount',
      'status': 'Status',
      'status-ready': 'Ready',
      'status-pending': 'Pending',
      'status-cancelled': 'Cancelled',
      'save-btn': 'Save',
      'cancel-btn': 'Cancel',
      'monthly-expenses': 'Monthly Expenses',
      'category-distribution': 'Category Distribution',
      'report': 'Report',
      'quantity': 'Quantity',
      'purchases-report': 'Purchases Report',
      'category-report': 'Category Distribution',
      'total-expenses-report': 'Total Expenses',
      'username-label': 'Username',
      'role-label': 'Role',
      'language-label': 'Language',
      'role-buyer': 'Buyer',
      'role-admin': 'Admin',
      'role-manager': 'Manager',
      'language-uz': 'Uzbek',
      'language-ru': 'Russian',
      'language-en': 'English',
      'product': 'Product',
      'warehouse': 'Warehouse',
      'add-btn': 'Add',
      'add-inventory': 'Add to Inventory',
      'name': 'Name',
      'phone': 'Phone',
      'address': 'Address',
      'add-supplier': 'Add Supplier',
      'expense-trend': 'Expense Trend',
      'supplier-efficiency': 'Supplier Efficiency',
      'notification-1': 'New purchase added: Laptop (10.03.2024)',
      'notification-2': 'Supplier: Alibaba Ltd, call pending',
      'notification-3': 'Warehouse A: 50 sheets of paper remaining',
      'please-fill': 'Please fill in all fields!',
      'please-fill-username': 'Please enter a username!',
      'settings-saved': 'Settings saved!',
      'unknown': 'Unknown'
    }
  };

  let currentLang = 'uz'; // Dastlabki til

  // Tilni yangilash funksiyasi
  function updateLanguage(lang) {
    // Statik elementlarni yangilash
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      const childSpan = element.querySelector('span');
      if (childSpan) {
        element.textContent = translations[lang][key] || element.textContent;
        element.appendChild(childSpan);
      } else {
        element.textContent = translations[lang][key] || element.textContent;
      }
    });

    // Input placeholderlarni yangilash
    const placeholders = {
      uz: { search: 'Qidirish...', enter: 'Kiriting...' },
      ru: { search: 'Поиск...', enter: 'Введите...' },
      en: { search: 'Search...', enter: 'Enter...' }
    };
    document.querySelectorAll('input[placeholder]').forEach(input => {
      if (input.id.includes('search')) {
        input.placeholder = placeholders[lang].search;
      } else {
        input.placeholder = placeholders[lang].enter;
      }
    });

    // Dinamik jadvallarni yangilash
    updatePurchasesTable();
    updateInventoryTable();
    updateSuppliersTable();
    updateArchiveTable();
    updateDashboard();

    // Chart.js grafiklarini yangilash
    lineChart.data.datasets[0].label = translations[lang]['monthly-expenses'];
    lineChart.update();
    pieChart.data.datasets[0].label = translations[lang]['category-distribution'];
    pieChart.update();
    trendChart.data.datasets[0].label = translations[lang]['expense-trend'];
    trendChart.update();
    efficiencyChart.data.datasets[0].label = translations[lang]['supplier-efficiency'];
    efficiencyChart.update();
  }

  // Xaridlar jadvalini yangilash
  function updatePurchasesTable() {
    purchasesBody.innerHTML = '';
    purchasesData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.product}</td><td>${item.category}</td><td>${item.date}</td><td>${item.amount}</td><td>${translations[currentLang][`status-${item.status.toLowerCase()}`] || item.status}</td>`;
      purchasesBody.appendChild(row);
    });
  }

  // Inventar jadvalini yangilash
  function updateInventoryTable() {
    inventoryBody.innerHTML = '';
    inventoryData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.product}</td><td>${item.quantity}</td><td>${item.warehouse}</td>`;
      inventoryBody.appendChild(row);
    });
  }

  // Yetkazib beruvchilar jadvalini yangilash
  function updateSuppliersTable() {
    suppliersBody.innerHTML = '';
    suppliersData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.phone}</td><td>${item.address}</td>`;
      suppliersBody.appendChild(row);
    });
  }

  // Arxiv jadvalini yangilash
  function updateArchiveTable() {
    archiveBody.innerHTML = '';
    archiveData.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.id}</td><td>${item.product}</td><td>${item.date}</td><td>${item.amount}</td>`;
      archiveBody.appendChild(row);
    });
  }

  // Login funksiyasi
  window.login = function() {
    const login = loginInput.value.trim();
    const password = passwordInput.value.trim();
    if (login && password) {
      userInfo.style.display = 'block';
      navMenu.style.display = 'flex';
      document.getElementById('user-name').textContent = login;
      document.getElementById('user-role').textContent = translations[currentLang]['role-buyer'];
      updateDashboard();
      showPage('dashboard');
      document.getElementById('login').classList.remove('active');
    } else {
      alert(translations[currentLang]['please-fill']);
    }
  };

  // Chiqish funksiyasi
  window.exit = function() {
    userInfo.style.display = 'none';
    navMenu.style.display = 'none';
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('login').classList.add('active');
    loginInput.value = '';
    passwordInput.value = '';
  };

  // Sahifa o‘tkazish
  window.showPage = function(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId !== 'login') {
      navItems.forEach(item => item.classList.remove('active'));
      document.querySelector(`.nav-item[href="#${pageId}"]`).classList.add('active');
    }
  };

  // Xarid qo‘shish
  window.addPurchase = function() {
    const productName = document.getElementById('product-name').value.trim();
    const category = document.getElementById('category').value.trim();
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value.trim();
    const status = document.getElementById('status').value;
    if (productName && category && date && amount) {
      purchasesData.push({
        id: purchasesData.length + 1,
        product: productName,
        category: category,
        date: date,
        amount: `$${amount}`,
        status: status
      });
      updatePurchasesTable();
      updateDashboard();
      showPage('purchases');
      document.getElementById('product-name').value = '';
      document.getElementById('category').value = '';
      document.getElementById('amount').value = '';
    } else {
      alert(translations[currentLang]['please-fill']);
    }
  };

  // Inventarizatsiyaga qo‘shish
  window.addInventory = function() {
    const product = document.getElementById('inventory-product').value.trim();
    const quantity = document.getElementById('inventory-quantity').value.trim();
    const warehouse = document.getElementById('inventory-warehouse').value.trim();
    if (product && quantity && warehouse) {
      inventoryData.push({
        id: inventoryData.length + 1,
        product: product,
        quantity: quantity,
        warehouse: warehouse
      });
      updateInventoryTable();
      showPage('inventory');
      document.getElementById('inventory-product').value = '';
      document.getElementById('inventory-quantity').value = '';
      document.getElementById('inventory-warehouse').value = '';
    } else {
      alert(translations[currentLang]['please-fill']);
    }
  };

  // Yetkazib beruvchi qo‘shish
  window.addSupplier = function() {
    const name = document.getElementById('supplier-name').value.trim();
    const phone = document.getElementById('supplier-phone').value.trim();
    const address = document.getElementById('supplier-address').value.trim();
    if (name && phone && address) {
      suppliersData.push({
        id: suppliersData.length + 1,
        name: name,
        phone: phone,
        address: address
      });
      updateSuppliersTable();
      activeSuppliers.textContent = suppliersData.length;
      showPage('suppliers');
      document.getElementById('supplier-name').value = '';
      document.getElementById('supplier-phone').value = '';
      document.getElementById('supplier-address').value = '';
    } else {
      alert(translations[currentLang]['please-fill']);
    }
  };

  // Qidiruv funksiyalari
  window.searchPurchases = function() {
    const query = searchInput.value.toLowerCase();
    const rows = purchasesBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let text = rows[i].textContent.toLowerCase();
      rows[i].style.display = text.includes(query) ? '' : 'none';
    }
  };

  window.searchReports = function() {
    const query = reportSearch.value.toLowerCase();
    const rows = reportsBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let text = rows[i].textContent.toLowerCase();
      rows[i].style.display = text.includes(query) ? '' : 'none';
    }
  };

  window.searchInventory = function() {
    const query = inventorySearch.value.toLowerCase();
    const rows = inventoryBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let text = rows[i].textContent.toLowerCase();
      rows[i].style.display = text.includes(query) ? '' : 'none';
    }
  };

  window.searchSuppliers = function() {
    const query = supplierSearch.value.toLowerCase();
    const rows = suppliersBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let text = rows[i].textContent.toLowerCase();
      rows[i].style.display = text.includes(query) ? '' : 'none';
    }
  };

  window.searchArchive = function() {
    const query = archiveSearch.value.toLowerCase();
    const rows = archiveBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      let text = rows[i].textContent.toLowerCase();
      rows[i].style.display = text.includes(query) ? '' : 'none';
    }
  };

  // Sozlamalarni saqlash va tilni o‘zgartirish
  window.saveSettings = function() {
    const username = document.getElementById('settings-username').value.trim();
    const role = document.getElementById('settings-role').value;
    const language = document.getElementById('language').value;
    if (username) {
      document.getElementById('user-name').textContent = username;
      document.getElementById('user-role').textContent = translations[currentLang][`role-${role}`];
      currentLang = language;
      updateLanguage(currentLang);
      alert(`${translations[currentLang]['settings-saved']} ${translations[currentLang]['language-label']}: ${translations[currentLang][`language-${language}`]}`);
    } else {
      alert(translations[currentLang]['please-fill-username']);
    }
  };

  // Sidebar havolalariga hodisa qo‘shish
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = item.getAttribute('href').substring(1);
      if (pageId !== 'logout') {
        showPage(pageId);
      } else {
        exit();
      }
    });
  });

  // Dashboardni yangilash
  function updateDashboard() {
    totalPurchases.textContent = purchasesData.length;
    const total = purchasesData.reduce((sum, item) => sum + parseFloat(item.amount.replace('$', '')), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
    lastPurchase.textContent = purchasesData.length > 0 ? purchasesData[purchasesData.length - 1].date : translations[currentLang]['unknown'];
    activeSuppliers.textContent = suppliersData.length;
  }

  // Chart.js uchun konfiguratsiyalar
  const lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: [1, 2, 3, 4, 5],
      datasets: [{
        label: translations[currentLang]['monthly-expenses'],
        data: [2000, 4000, 6000, 7000, 8000],
        borderColor: '#00d4ff',
        fill: true,
        tension: 0.4,
        backgroundColor: 'rgba(0, 212, 255, 0.2)'
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } },
      plugins: { legend: { labels: { color: '#fff' } } },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuad'
      }
    }
  });

  const pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['O‘fispriborlar', 'Mebel', 'Prodamolar', 'Texnika', 'Boshqa'],
      datasets: [{
        label: translations[currentLang]['category-distribution'],
        data: [75, 20, 10, 5, 5],
        backgroundColor: ['#00d4ff', '#ff2e63', '#ff9500', '#4a69bd', '#00ff00'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#fff' } } },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000
      }
    }
  });

  const trendChart = new Chart(document.getElementById('trendChart'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: translations[currentLang]['expense-trend'],
        data: [3000, 4500, 6000, 7500, 8000],
        backgroundColor: '#00d4ff',
        borderColor: '#00aaff',
        borderWidth: 1
      }]
    },
    options: {
      scales: { y: { beginAtZero: true } },
      plugins: { legend: { labels: { color: '#fff' } } },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuad'
      }
    }
  });

  const efficiencyChart = new Chart(document.getElementById('efficiencyChart'), {
    type: 'doughnut',
    data: {
      labels: ['Alibaba', 'TechCorp', 'Local'],
      datasets: [{
        label: translations[currentLang]['supplier-efficiency'],
        data: [60, 30, 10],
        backgroundColor: ['#00d4ff', '#ff2e63', '#ff9500'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#fff' } } },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000
      }
    }
  });

  // Shark animatsiyasi
  const shark = document.querySelector('.shark-animation');
  let position = -100;
  function animateShark() {
    position += 2;
    if (position > 100) position = -100;
    shark.style.transform = `translateX(${position}%) translateY(${Math.sin(position * Math.PI / 50) * 20}px) rotate(${Math.sin(position * Math.PI / 50) * 10}deg)`;
    requestAnimationFrame(animateShark);
  }
  animateShark();

  // Dastlabki tilni o‘rnatish va dashboardni yangilash
  updateLanguage(currentLang);
  updateDashboard();
});