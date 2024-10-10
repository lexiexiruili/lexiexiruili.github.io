document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-tab');

            // 隐藏所有内容
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 显示目标内容
            document.getElementById(targetId).classList.add('active');

            // 更新活动标签样式
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 默认显示"关于我"标签
    document.querySelector('nav a[data-tab="about"]').click();
});
