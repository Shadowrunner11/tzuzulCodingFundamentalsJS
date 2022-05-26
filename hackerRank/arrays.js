const array = [1,6,100,7,9,3]

function handler (prev,next){
	return next-prev
}

array.sort(handler)
console.log(array)
