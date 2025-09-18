document.addEventListener('DOMContentLoaded', function() {
    // 鼠标心形轨迹效果
    const hearts = [];
    const heartColors = ['#ffb3d9', '#ffc0e5', '#ff9ff3', '#ffd4a3', '#ffa3c4'];

    document.addEventListener('mousemove', function(e) {
        if (Math.random() < 0.1) { // 控制生成频率
            createHeart(e.pageX, e.pageY);
        }
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.className = 'mouse-heart';
        heart.innerHTML = '💕';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    // 点击爱心爆炸效果
    document.addEventListener('click', function(e) {
        // 排除按钮和链接的点击
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            createHeartBurst(e.pageX, e.pageY);
        }
    });

    function createHeartBurst(x, y) {
        const colors = ['❤️', '💕', '💖', '💗', '💝'];
        const particles = 8;

        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.className = 'heart-particle';
            particle.innerHTML = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';

            const angle = (Math.PI * 2 * i) / particles;
            const velocity = 50 + Math.random() * 50;
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');

            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }

    // 雪花飘落效果（甜品图标）
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        const icons = ['🧁', '🍪', '🍩', '🍰', '🍮', '🍭', '🍬'];
        snowflake.innerHTML = icons[Math.floor(Math.random() * icons.length)];
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (5 + Math.random() * 10) + 's';
        snowflake.style.opacity = Math.random() * 0.6 + 0.2;
        snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';

        document.body.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 15000);
    }

    // 每隔一段时间创建雪花
    setInterval(createSnowflake, 2000);

    // 滚动彩虹效果
    let scrollRainbow = false;
    const rainbowToggle = document.createElement('button');
    rainbowToggle.className = 'rainbow-toggle';
    rainbowToggle.innerHTML = '🌈';
    rainbowToggle.title = '开启彩虹模式';
    document.body.appendChild(rainbowToggle);

    rainbowToggle.addEventListener('click', function() {
        scrollRainbow = !scrollRainbow;
        document.body.classList.toggle('rainbow-mode');
        this.innerHTML = scrollRainbow ? '🎨' : '🌈';
        this.title = scrollRainbow ? '关闭彩虹模式' : '开启彩虹模式';
    });

    // 移动端菜单切换
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭移动端菜单
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 产品分类切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有激活状态
            tabBtns.forEach(b => b.classList.remove('active'));
            // 添加当前激活状态
            this.classList.add('active');

            const category = this.dataset.category;

            // 显示/隐藏产品卡片
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 为产品卡片添加过渡效果
    productCards.forEach(card => {
        card.style.transition = 'opacity 0.3s, transform 0.3s';
    });

    // 滚动时导航栏效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });

    // 联系表单处理
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // 显示成功消息
            showNotification('消息已发送！我们会尽快与您联系。', 'success');

            // 清空表单
            this.reset();
        });
    }

    // 通知函数
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#48c774' : '#ff3860'};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        // 3秒后移除
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // 加载动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有卡片
    document.querySelectorAll('.featured-card, .product-card, .about-content, .contact-grid').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 产品卡片悬停效果
    document.querySelectorAll('.featured-card, .product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 创建悬浮心心
            const floatHeart = document.createElement('div');
            floatHeart.className = 'card-float-heart';
            floatHeart.innerHTML = '💖';
            this.appendChild(floatHeart);

            setTimeout(() => {
                floatHeart.remove();
            }, 2000);
        });
    });

    // 价格标签动画
    document.querySelectorAll('.price').forEach(price => {
        price.addEventListener('mouseenter', function() {
            this.style.animation = 'priceJump 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // 页面加载完成的欢迎提示
    setTimeout(() => {
        const welcome = document.createElement('div');
        welcome.className = 'welcome-message';
        welcome.innerHTML = '🎉 欢迎光临甜蜜时光 🎉';
        document.body.appendChild(welcome);

        setTimeout(() => {
            welcome.style.opacity = '0';
            setTimeout(() => {
                welcome.remove();
            }, 500);
        }, 3000);
    }, 500);

    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        .nav-menu.active {
            display: flex !important;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Hero按钮点击事件
    const heroBtn = document.querySelector('.hero .btn-primary');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});