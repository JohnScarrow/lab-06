'use strict';

console.log('shark in the dark!');

//object example
var exampleObjectThing = {
  title: 'Thing magig',
  date: '10/23',
  item:['things', 'stuff', 'whatlol'],
  author:'slugnibble',
};

var stuff = {
  title: 'Thing magig',
  date: '10/23',
  item:['things', 'stuff', 'whatlol'],
  author:'slugnibble',
};

var lolwut = {
  title: 'Thing magig',
  date: '10/23',
  item:['things', 'stuff', 'whatlol'],
  author:'slugnibble',
};
var thingArchives = [
  exampleObjectThing,
  stuff,
  lolwut,
];

//Changing the title
var heading = document.getElementById('title');
heading.textContent = exampleObjectThing.title;
heading.setAttribute('class', 'cool box button');

var listListUl = document.getElementById('list');
//Create a li tag for each string in the object
//Fill that li with the string of the object
//Put he new li at the end of listListUl (using appendChild)

var thingLi;
for (var i = 0; i < exampleObjectThing ;i++){
  console.log('exampleObjectThing.item of i',exampleObjectThing.item[1]);
  thingLi= document.createElement('li');

  thingLi.textContent = exampleObjectThing.item[1];
  thingLi.appendChild(thingLi);

}
