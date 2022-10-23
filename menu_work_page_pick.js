// 1번 모달창
document.getElementById('box01').addEventListener('click',function(){
    // document.getElementById('modal01').style.display="block";
    console.log(2);
})

document.getElementById('box01_detail').addEventListener('click',function(){
    document.getElementById('modal01').style.display="none";
})

document.getElementById('box01_detail_back').addEventListener('click',function(){
    document.getElementById('modal01').style.display="none";
    // console.log(2)
})

// 2번 모달창
document.getElementById('box02').addEventListener('click',function(){
    document.getElementById('modal02').style.display="block";
})

document.getElementById('box02_detail').addEventListener('click',function(){
    document.getElementById('modal02').style.display="none";
})

document.getElementById('box02_detail_back').addEventListener('click',function(){
    document.getElementById('modal02').style.display="none";
    // console.log(2)
})

// 3번 모달창
document.getElementById('box03').addEventListener('click',function(){
    document.getElementById('modal03').style.display="block";
})

document.getElementById('box03_detail').addEventListener('click',function(){
    document.getElementById('modal03').style.display="none";
})

document.getElementById('box03_detail_back').addEventListener('click',function(){
    document.getElementById('modal03').style.display="none";
    // console.log(2)
})

// 4번 모달창
document.getElementById('box04').addEventListener('click',function(){
    document.getElementById('modal04').style.display="block";
})

document.getElementById('box04_detail').addEventListener('click',function(){
    document.getElementById('modal04').style.display="none";
})

document.getElementById('box04_detail_back').addEventListener('click',function(){
    document.getElementById('modal04').style.display="none";
    // console.log(2)
})

// 5번 모달창
document.getElementById('box05').addEventListener('click',function(){
    document.getElementById('modal05').style.display="block";
})

document.getElementById('box05_detail').addEventListener('click',function(){
    document.getElementById('modal05').style.display="none";
})

document.getElementById('box05_detail_back').addEventListener('click',function(){
    document.getElementById('modal05').style.display="none";
    // console.log(2)
})










// 리스트 변경
document.getElementById('list_02').addEventListener('click',function(){
    document.getElementById('box_con02').style.display="block";
    document.getElementById('box_con01').style.display="none";
    document.getElementById('box_con03').style.display="none";
    document.getElementById('list_02').style.color="white";
    document.getElementById('list_01').style.color="black";
    document.getElementById('list_03').style.color="black";
    
});

document.getElementById('list_01').addEventListener('click',function(){
    document.getElementById('box_con01').style.display="block";
    document.getElementById('box_con02').style.display="none";
    document.getElementById('box_con03').style.display="none";
    document.getElementById('list_01').style.color="white";
    document.getElementById('list_03').style.color="black";
    document.getElementById('list_02').style.color="black";
});

document.getElementById('list_03').addEventListener('click',function(){
    document.getElementById('box_con03').style.display="block";
    document.getElementById('box_con01').style.display="none";
    document.getElementById('box_con02').style.display="none";
    document.getElementById('list_01').style.color="black";
    document.getElementById('list_03').style.color="white";
    document.getElementById('list_02').style.color="black";
});

// document.getElementById('box01').addEventListener('click',function(){
//         document.getElementById('box01').style.width="700px";
//         document.getElementById('box01').style.height="600px";
//         document.getElementById('box01').style.opacity="100";
//         document.getElementById('box01').style.opacity="100";
//     })
