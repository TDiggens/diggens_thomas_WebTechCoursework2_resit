function encode_rot20()
{
	var plain_text = document.getElementById("message").value.toUpperCase();
	var cipher_text = [];
	var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	
	for(var idx=0; idx<plain_text.length; idx++)
	{
		input = alphabet.indexOf(plain_text[idx]);
		if(input == -1)
		{
			cipher_text.push(plain_text[idx]);
		}
		else
		{
			var coded = (input+20)%26;
			var letter = alphabet[coded];
			cipher_text.push(letter);
		}
	}	
	
	document.getElementById("output").innerHTML = cipher_text.join("");
}

function encode_reverse()
{
	var plain_text = document.getElementById("message").value.toUpperCase();
	var cipher_text= plain_text.split("").reverse().join("");
	
	document.getElementById("output").innerHTML = cipher_text;
}

function encode_all()
{
	var plain_text = document.getElementById("message").value.toUpperCase();
	var cipher_text= plain_text.split("").reverse().join("");
	var super_cipher = [];
	var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	
	for(var idx=0; idx<cipher_text.length; idx++)
	{
		input = alphabet.indexOf(cipher_text[idx]);
		if(input == -1)
		{
			super_cipher.push(cipher_text[idx]);
		}
		else
		{
			var coded = (input+20)%26;
			var letter = alphabet[coded];
			super_cipher.push(letter);
		}
	}	
	
	document.getElementById("output").innerHTML = super_cipher.join("");
}