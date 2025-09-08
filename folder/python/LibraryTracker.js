const prompt = require('prompt-sync')();

let library = ["Atomic Habits", "5am club", "Rich dad, poor dad", "Art of war", "Adanne"];

let borrowed = [];
let availableBooks = [];
let booksBorrowed = ["Art of war"];
while(true){
let displayLibraryOptions =  `
		EMPEROR'S BOOK lIBRARY
		
	HOW MIGHT WE BE OF HELP, GOOD(WHATEVER TIME ZONE YOU ARE AT CURRENTLY)
	
	1. VIEW ALL BOOKS
	2. BORROW A BOOK
	3. RETURN A BOOK
			press 0 to EXIT `

console.log(displayLibraryOptions);

let choiceOfBooks = prompt('Choose an option from the menu ');
if(choiceOfBooks == 1){
for(let counter = 0; counter < library.length;counter++){
	for(let count = 0;count < booksBorrowed.length;count++){
		if(library[counter] === booksBorrowed[count]){
			console.log(`${library[counter]} is borrowed`)
		}

		else{
			console.log(`${library[counter]} is available`)
		}
	}
}

}

else if(choiceOfBooks == 2){
console.log(availableBooks);
let userInput = prompt('Pick your choice from the available books ');
	if(userInput < 1 || userInput > library.length){
		console.log(`Incorrect input`);
		userInput = prompt('Pick your choice from the available books ');
	}
	//userInput -= 1;
	for(let counter = 0;counter < library.length;counter++){
		if(counter == userInput){
			for(let count = 0; count < booksBorrowed.length;count++){
				if(library[counter] === booksBorrowed[count]){
					console.log('This book is already been borrowed');
				}else{
					borrowed.push(`${library[counter]} is borrowed`)
				}
			}
		}			
	}
}
exit = prompt('You heading for the exit of the library yet? (zero to exit)');
if(exit == 0)break;
}






