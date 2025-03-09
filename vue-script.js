const { createApp } = Vue;

createApp({
    data() {
        return {
            currentPage: 'home',
            loadedContent: '',
            projects: [
                { id: 'fm', name: 'FM Project', date: '2024.6 -', logo: 'logo/fm.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js'], file: 'fm.html' },
                { id: 'samurai', name: 'Samurai Project', date: '2024.4 -', logo: 'logo/samurai.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js', 'fa-brands fa-php'], file: 'samurai.html' },
                { id: 'hosokawa', name: 'Hosokawa Project', date: '2023.6 - 2024.6', logo: 'logo/hosokawa.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js', 'fa-brands fa-php'], file: 'hosokawa.html' },
                { id: 'goal', name: 'Goal Project', date: '2023.2 - 2024.9', logo: 'logo/goal.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js', 'fa-brands fa-php'], file: 'goal.html' },
                { id: 'atmos', name: 'Atmos Project', date: '2022.11 - 2023.1', logo: 'logo/atmos.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js'], file: 'atmos.html' },
                { id: 'ys', name: 'YS Project', date: '2020.11 - 2022.9', logo: 'logo/ys.png', icons: ['fa-brands fa-html5', 'fa-brands fa-css', 'fa-brands fa-square-js', 'fa-brands fa-php'], file: 'ys.html' },
            ]
        };
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
            this.loadedContent = ''; // ページ切り替え時にリセット
        },
        async loadPage(project) {
            this.currentPage = project.id;
            this.loadedContent = '<p>Loading...<i class="fa-solid fa-seedling"></i></p>'; // ローディング表示

            try {
                const response = await fetch(project.file);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                this.loadedContent = await response.text();

                // Splide のスクリプトを再適用（100ms 遅延を入れると安定する）
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (document.querySelector('.splide')) {
                            new Splide('.splide', {
                                direction: 'ttb', // 縦方向スライド
                                height: '10rem',
                            }).mount();
                        }
                    }, 100);
                });

            } catch (error) {
                console.error("Error loading page:", error);
                this.loadedContent = '<p>ページの読み込みに失敗しました。</p>';
            }
        }
    }
}).mount('#app');
