const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPop = document.querySelector('.btnLogin-popup');
const selectImage = doucment.querySelector('.select-image');
const inputFile = doucment.querySelector('#file');
const imgArea = doucment.querySelector('.img-area');

const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup ');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup ');
});

selectImage.addEventListener('click', function ()
{
    inputFile.click();
})

inputFile.addEventListener('change' , function(){
    const image = this.files[0]
    console.log(image);
    if(image.size<5000000){
        const reader = new FileReader();
        reader.onload = ()=>{
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item=> item.remove());
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
            imgArea.dataset.img = image.name;

        }
        reader.readAsDataURL(image);
    }else{
        alert("Image size more than 5MB");
    }
})
