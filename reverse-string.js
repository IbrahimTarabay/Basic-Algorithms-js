function reverseString(str) {
	var arr = [...str];
	var len = str.length;
	for (var i = 0; i < len; i++) {
		var arr1 = arr[i];
		if (len - 1 - i >= i) {
			arr[i] = arr[len - 1 - i];
			arr[len - 1 - i] = arr1;
		}
	}
		return arr.join('');
}
reverseString('hello');
