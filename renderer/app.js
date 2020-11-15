quotes = [
    "“Physical fitness is the first requisite of happiness.” – Joseph Pilates",
    "“The human body has been designed to resist an infinite number of changes and attacks brought about by its environment. The secret of good health lies in successful adjustment to changing stresses on the body.” – Harry J. Johnson",
    "“To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong and clear.” – Buddha",
    "“Good health is not something we can buy. However, it can be an extremely valuable savings account.”-Anne Wilson Schaef",
    "“You can’t control what goes on outside, but you CAN control what goes on inside.” – Unknown",
    "“The cheerful mind perseveres, and the strong mind hews its way through a thousand difficulties.” – Swami Vivekananda",
    "“It is health that is the real wealth, and not pieces of gold and silver.” – Mahatma Gandhi",
    "“Keeping your body healthy is an expression of gratitude to the whole cosmos- the trees, the clouds, everything.” – Thich Nhat Hanh",
    "“Divide each difficulty into as many parts as is feasible and necessary to resolve it, and watch the whole transform.” – Rene Descartes",
    "“Remain calm, because peace equals power.”- Joyce Meyer",
    "“A good laugh and a long sleep are the best cures in the doctor’s book.” – Irish proverb",
    "“Healthy citizens are the greatest asset any country can have.” – Winston Churchill"
];

headings = [
    "Time to Strech 🍨",
    "Let's take a quick break ⛅",
    "We should hydrate now. Grab a watter bottle 🌊",
    "How's you back feeling? Let's take a quick walk 🚶‍♂️"       
];

images = ['../images/1.jpg','../images/2.png','../images/3.jpg','../images/4.jpg','../images/5.jpg'];

async function update(){
const interval = document.getElementById('interval').value
const duration = document.getElementById('duration').value
var prev = 0
 

console.log("Starting")

while(1){
var date = new Date();
var currentMin = date.getMinutes();
if(currentMin%interval == 0 && currentMin != prev){
    prev = currentMin;
    console.log(currentMin)
    console.log(interval)
    console.log(currentMin%interval == 0)
    const res = await notify();
    console.log(res);
    
};}
};


function notify(){
var len = quotes.length-1;
var index = Math.round((Math.random()*len)+1);
var len1 = headings.length-1;
var index1 = Math.round((Math.random()*len1)+1);
var len2 = images.length-1;
var index2 = Math.round((Math.random()*len2)+1);

return new Promise(resolve => {Notification.requestPermission().then(function (result){
    var myNotification = new Notification(headings[index1],{
        'body': quotes[index],
        'icon': images[index2],
    });
    });
    setTimeout(() => {
        resolve('resolved');
      }, 2000);
});
};