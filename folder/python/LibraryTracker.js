const prompt = require('prompt-sync')();

let library = ["Atomic Habits", "5am club", "Rich dad, poor dad", "Art of war", "Adanne"];

let borrowerName = [];
let availableBooks = [];
let booksBorrowed = [];
while(true){
let displayLibraryOptions =  `
		EMPEROR'S BOOK lIBRARY
		
	HOW MIGHT WE BE OF HELP, GOOD(WHATEVER TIME ZONE YOU ARE AT CURRENTLY)
	
	1. VIEW ALL BOOKS
	2. BORROW A BOOK
	3. RETURN A BOOK
			press 0 to EXIT `

console.log(displayLibraryOptions);

for(let counter = 0; counter < library.length;counter++){
	if(!booksBorrowed.includes(library[counter]) && !availableBooks.includes(library[counter])){
		availableBooks.push(`${library[counter]}`);
	}else{
		continue;
	}
}


let choiceOfBooks = prompt('Choose an option from the menu ');

if(choiceOfBooks == 1){
	if(booksBorrowed.length < 1){
		console.log(`no books are borrowed and all books are available: ${availableBooks}`)
	}
	else if(availableBooks.length < 1){
		console.log(`no books are available and all books are borrowed: ${booksBorrowed}`)
	}else{
		console.log(`${booksBorrowed} is borrowed, ${availableBooks} is available`);
	}
}

else if(choiceOfBooks == 2){
	if(availableBooks.length >= 1){
		console.log(availableBooks);
	}else{
		console.log("Unfilled");
		break;
	}
	let userInput = Number(prompt('Pick your choice from the available books '));
	while(true){
		if(userInput < 1 || userInput > availableBooks.length){
			console.log(`Incorrect input`);
			userInput = Number(prompt('Pick your choice from the available books '));
			if(userInput >= 1 && userInput <= availableBooks.length)break;
		}else if(userInput >= 1 && userInput <= availableBooks.length){
			break;
		}
	}
let nameOfBorrower = prompt('Input your name');
borrowerName.push(nameOfBorrower)

userInput -= 1;
for(let count = 0; count < library.length;count++){
	while(count === userInput){
		console.log(`You're due to return it in a week's time`);
		booksBorrowed.push(`${availableBooks[count]}`);
		availableBooks.splice(count, 1);
		break;
	}
}
}	

else if(choiceOfBooks == 3){
	if(booksBorrowed.length >= 1){
		console.log(booksBorrowed);
	}else{
		console.log("Unoccupied");
		break;
	}

	let userInput = Number(prompt('Pick your choice of book to return'));
	while(true){
		if(userInput < 1 || userInput > booksBorrowed.length){
			console.log(`Incorrect input`);
			userInput = Number(prompt('Pick your choice of book to return '));
			if(userInput >= 1 && userInput <= booksBorrowed.length)break;
		}else{
			break;
		}
	}
let returnName = prompt("Your name used to borrow the book from Emperor's library");
while(true){
	if(!borrowerName.includes(returnName)){
		returnName = prompt("Your name isn't found sir/ma, kindly retry");
console.log(borrowerName);
		if(borrowerName.includes(returnName)){
			for(let counter = 0;counter < borrowerName.length;counter++){
				if(borrowerName[counter] === returnName){
					borrowerName.splice(counter, 1);
					break;
				}
			}
		}
	}else{
		for(let counter = 0;counter < borrowerName.length;counter++){
			if(borrowerName[counter] === returnName){
				borrowerName.splice(counter, 1);
					break;
			}
		}
	}
}
			
for(let count = 0; count < library.length;count++){
	while(count === userInput){
		console.log(`Books returned Successfully`);
		availableBooks.push(`${booksBorrowed[count]}`);
		booksBorrowed.splice(count, 1);
		break;
	}
}



}		
let exit = prompt('You heading for the exit of the library yet? (zero to exit)');
if(exit == 0)break;
}






