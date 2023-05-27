let questions = [
    {
      question: `Q: What is the capital of France?`,
      a:"London",
      b:"Paris",
      c:"Berlin",
      d:"Madrid",
      answer: "b"
    },

    {
      question: `Q: Who painted the Mona Lisa?`,
      a:"Michelangelo",
      b:"Leonardo da Vinci",
      c:"Pablo Picasso",
      d:"Vincent van Gogh",
      answer: "b"
    },

    {
      question: `Q: What is the largest planet in our solar system?`,
      a:"Venus",
      b:"Mars",
      c:"Jupiter",
      d:"Saturn",
      answer: "c"
    },

    {
      question: `Q: What is the smallest country in the world?`,
      a:"Monaco",
      b:"Vatican City",
      c:"San Marino", 
      d:"Liechtenstein",
      answer: "b"
    },

    {
      question: `Q: What is the world's largest ocean?`,
      a:"Atlantic Ocean",
      b:"Arctic Ocean",
      c:"Indian Ocean", 
      d:"Pacific Ocean",
      answer: "d"
    },

    {
      question: `Q: What is the capital of Australia?`,
      a:"Sydney", 
      b:"Melbourne", 
      c:"Canberra", 
      d:"Brisbane",
      answer: "c"
    }
];


function randomness()
{
  set = new Set();

  while(set.size!=questions.length)
  {
    set.add(Math.floor(Math.random()*6))
  }

  arr = Array.from(set);
}


let marks=0;
let count=-1;
randomness()
update()

btn = document.getElementById('btn');
btn.onclick = update;


function update()
{
  if(count<questions.length-1)
  {
    count++;
  }
  else
  {
    score = document.getElementsByClassName('score')[0];
    score.hidden=false;
    score.firstElementChild.innerHTML=`You scored ${marks}/${questions.length}✌️`
  }

  ques = document.getElementsByClassName('question')[0];
  ques.innerHTML=questions[arr[count]].question;

  a = document.getElementsByTagName('label')[0];
  b = document.getElementsByTagName('label')[1];
  c = document.getElementsByTagName('label')[2];
  d = document.getElementsByTagName('label')[3];
  a.innerHTML=questions[arr[count]].a;
  b.innerHTML=questions[arr[count]].b;
  c.innerHTML=questions[arr[count]].c;
  d.innerHTML=questions[arr[count]].d;


  x = document.querySelectorAll('.option input');
  for(let i of x)
  {
    if(i.checked==true && i.value==questions[arr[count-1]].answer)
    {
      marks++;
    }
    i.checked=false;
  }
}


play = document.getElementsByClassName('btn-again')[0];

play.onclick = ()=>
{
  marks=0;
  count=-1;
  randomness();
  update();
  score = document.getElementsByClassName('score')[0];
  score.hidden=true;
}