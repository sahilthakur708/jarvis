const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes('my birthday'))
    speech.text = '12 october 2008';
    else if(text.includes('hello'))
    speech.text = 'hello sir';
    else if(text.includes(' tell me my mother name'))
    speech.text = 'you told me that your mother name is seema thakur';
    else if(text.includes(' tell me my father name'))
    speech.text = 'you told me that your father name is raman thakur';
    else if(text.includes(' God'))
    speech.text = 'God is a natural power, according to the indian mythology god is evrywhere god is also present in the heart of peoples.';
    else if(text.includes(' Quantum tunnel'))
    speech.text = 'a quantum tunnel have to oppening one is for space and one is for time ,it is said that we can travel  in past with quantum tunnels,quantum tunnels are not find evrywhere these tunnels are very small they are even smaller than the bacteria'
    else if(text.includes( 'India'))
    speech.text = 'India is a democratic country,india is in asia continent,the prime minister of india is shri damodar dass narendre modi,the father of india is known as mahatama ghandhi,the president of india is ram nath kovind,india capital is delhi and india has 29 states and 7 union terroteries,indian peaple believes in hindu culture';
    else if(text.includes('Himachal Pradesh'))
    speech.text = 'Himachal pradesh have cold climate,the national flower of himachal pradesh is rododendron,Himachal pradesh have 5 district known as kangra, hamirpur,shimla,mandi and kullu, the cm of himachal pradesh is shri jairam thakur the capital of himachal pradesh is shimla';
    else if(text.includes('dangerous bacteria'))
    speech.text = 'corona bacteria is the most dangerous virus in the world and it also have killed lot of people in the world';
    else if(text.includes(' one to hundred '))
    speech.text = '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100';
    else if(text.includes(''))
    speech.text = 'you told me that your father name is raman thakur';
    window.speechSynthesis.speak(speech);
}