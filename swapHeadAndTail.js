
function swapHeadAndTail(arr) {
	if (arr.length % 2 === 0) {
		var cen = arr.length / 2, 
			i,r = [],
			j   = cen;
		for(i=0;i<cen;i++) {
			r[j++] = arr[i];
		}
		j = 0;
		for(i=cen;i<arr.length;i++){
			r[j++] = arr[i];
		}
		return r;
	} else {
		var cen = Math.floor(arr.length/2),
			i,r = [],
			j   = cen;
			r[j] = arr[j++];
		for(i=0;i<cen;i++) {
			r[j++] = arr[i];
		}
		j=0;
		for(i=cen+1;i<arr.length;i++){
			r[j++] = arr[i];
		}
		return r;
	}
}


console.log(JSON.stringify(swapHeadAndTail([ 1, 2, 3, 4, 5 ])) == JSON.stringify([ 4, 5, 3, 1, 2 ]));
console.log(JSON.stringify(swapHeadAndTail([ -1, 2 ] )) == JSON.stringify([ 2, -1 ]));
console.log(JSON.stringify(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ])) == JSON.stringify([ 5, 6, -7, 8, 1, 2, -3, 4 ]));