function show() {
	for (i=1; i<=100000; i+=1) {
		var n=0;

		for (j=1; j<=10; j+=1) {
			if (i%j===0) {
				n+=1;
			} else {
				n=0;
				break;
			}
		}

			if (n===10){
				document.getElementById("thisIs").innerHTML = i;
				break;
				}
	}
}

