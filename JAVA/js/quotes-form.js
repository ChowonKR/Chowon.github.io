const quotes = [
    
    {
        quote : "겉모습에 그렇게 신경쓰지 말아라. 중요한 건 마음이야." ,
        author : "마녀 배달부 키키" , 
    },

    {
        quote : "오늘이 안되면 내일이 있다. 언제라도 내일은 있다." ,
        author : "추억은 방울방울" , 
    },

    {
        quote : "가까이 있는 것은 작게, 멀리 있는 것은 크게 보이는 법이지" ,
        author : "귀를 기울이면" , 
    },

    {
        quote : "원하는 걸 포기한다면 그것은 원하는 게 아니다" ,
        author : "폼포코 너구리 대작전 " , 
    },

    {
        quote : "자신의 일을 스스로 결정하지 않으면 안 돼" ,
        author : "하울의 움직이는 성" , 
    }
 

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[0]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

