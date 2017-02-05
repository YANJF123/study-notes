const fs=require('fs');
const jsonFile=fs.readFileSync('./person.json');
const person=JSON.parse(String(jsonFile));

person.toJSON=function () {
   return this.name;
};
const jsonText=JSON.stringify(person,function (k,v) {
    switch (k){
        case 'name':
            return v+'-_-';
        case 'favorites':
            return v.join(',');
        default:
            return v;
    }
});

const jsonText2=JSON.stringify(person,null,4);

console.log(jsonText2);

console.log(person);