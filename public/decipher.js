function decode_rot20()
{
	var cipher_text = document.getElementById("decode_message").value.toUpperCase();
	var plain_text = [];
	var alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	
	for(var idx=0; idx<cipher_text.length; idx++)
	{
		input = alphabet.indexOf(cipher_text[idx]);
		if(input == -1)
		{
			plain_text.push(cipher_text[idx]);
		}
		else
		{
			var coded = (input+6)%26;
			var letter = alphabet[coded];
			plain_text.push(letter);
		}
	}
	document.getElementById("decode_output").innerHTML = plain_text.join("");
}

function decode_reverse()
{
	var cipher_text = document.getElementById("decode_message").value.toUpperCase();
	var plain_text= cipher_text.split("").reverse().join("");
	
	document.getElementById("decode_output").innerHTML = plain_text;
}

function decode_all()
{
	var super_cipher = document.getElementById("decode_message").value.toUpperCase();
	var cipher_text= super_cipher.split("").reverse().join("");
	var plain_text = [];
	var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	
	for(var idx=0; idx<cipher_text.length; idx++)
	{
		input = alphabet.indexOf(cipher_text[idx]);
		if(input == -1)
		{
			plain_text.push(cipher_text[idx]);
		}
		else
		{
			var coded = (input+6)%26;
			var letter = alphabet[coded];
			plain_text.push(letter);
		}
	}	
	
	document.getElementById("decode_output").innerHTML = plain_text.join("");
}