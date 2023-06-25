let navbar = document.querySelector('.navbar')

//با استفاده از متد ()querySelector میتونیم به تگ های موجود در صفحه دسترسی پیدا نماییم، در واقع همانند یک انتخابگر عمل میکند و میشه به راحتی تگ ها، کلاس ها ، آی دی ها ، صفت ها و.. رو از صفحه انتخاب کرد.

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
}