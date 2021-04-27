var img= ["grandad.jpeg","grandma.JPG","dad.jpeg","uncle.JPG","mom.jpeg","me.jpg","dveer.jpeg","covoar.jpeg"];

var names=["Madhukar Sheth","Mita Sheth","Xitij Sheth","Pratik Sheth","Jinal Sheth","Neehar Sheth"," Dhveer Sheth","My Family"];

var x=0;

function nextslide(){
x+=1;
if(x<=7){
    document.getElementById("image").src=img[x];
    document.getElementById("name").innerHTML=names[x];
}
else{
    x=0
    document.getElementById("image").src=img[x];
    document.getElementById("name").innerHTML=names[x];
}
}