
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelectorAll('.input_box')[0].value);
    const weight=parseInt(document.querySelectorAll('.input_box')[1].value);
    const result=document.querySelector('#result');

    if(!height || !weight|| height<=0||weight<=0){
        result.innerHTML=`please give a valid ${height} and ${weight}`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
         result.innerHTML=`your bmi is: ${bmi}`
    }
   
});
