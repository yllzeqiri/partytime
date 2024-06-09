document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service-item');
    services.forEach((service) => {
        service.addEventListener('mouseover', function() {
            this.classList.add('animate');
        });
        service.addEventListener('mouseout', function() {
            this.classList.remove('animate');
        });
    });

    const packages = document.querySelectorAll('.package');
    packages.forEach((package) => {
        package.addEventListener('mouseover', function() {
            this.classList.add('animate');
        });
        package.addEventListener('mouseout', function() {
            this.classList.remove('animate');
        });
    });
});

const swirlAnimation = () => {
    const items = document.querySelectorAll('.service-item, .package');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('swirl');
    });
};

swirlAnimation();
