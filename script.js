document.addEventListener('DOMContentLoaded', () => {
    // 打字机特效配置
    const typewriterElement = document.querySelector('.typewriter');
    const texts = [
        "Bridging Code and Creativity.",
        "Exploring generative workflows.",
        "Building tools for content IPs."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // 删除速度更快
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // 打字速度
        }

        // 处理打字与删除的切换逻辑
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 2000; // 句子打完后停顿 2 秒
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // 开始下一句前停顿 0.5 秒
        }

        setTimeout(type, typeSpeed);
    }

    // 启动打字机动画
    setTimeout(type, 1000);
});