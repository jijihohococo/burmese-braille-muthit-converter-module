module.exports=function(string){
	convertedTextArray=convertCharacterToCodeArray(string)
	burmeseBrailleText='';

	convertedTextArray.forEach((convertedText, key) => { 
		if(checkForThWaiThoCaseOne(convertedTextArray,convertedText,key)){
			burmeseBrailleText += '⠱';
			return false
		}else{

			if(checkForThWaiThoCaseTwo(convertedTextArray,convertedText,key)){
				convertedText=convertedTextArray[key-1]
			}
			switch (convertedText) {
				case 'u1000':
				case 'u1000 ':
				burmeseBrailleText += getAnswer(convertedText,'⠅');
				break;

				case 'u1001':
				case 'u1001 ':
				burmeseBrailleText += getAnswer(convertedText,'⠨');
				break;

				case 'u1002':
				case 'u1002 ':
				burmeseBrailleText += getAnswer(convertedText,'⠛');
				break;

				case 'u1003':
				case 'u1003 ':
				burmeseBrailleText += getAnswer(convertedText,'⠟');
				break;

				case 'u1004':
				case 'u1004 ':
				burmeseBrailleText += 
				isset(convertedTextArray[key+1],convertedTextArray) &&
				isset(convertedTextArray[key+2],convertedTextArray) && 
				convertedTextArray[key+1]=='u103a' &&
				convertedTextArray[key+2]=='u1039' ? getAnswer(convertedText,'⠐') :
				((isset(convertedTextArray[key-1],convertedTextArray) &&
					isset(convertedTextArray[key+1],convertedTextArray) &&
					isset(convertedTextArray[key+2],convertedTextArray) && 
					convertedTextArray[key-1]=='u104e' &&
					convertedTextArray[key+1]=='u103a' &&
					convertedTextArray[key+2]=='u1038')? '' :getAnswer(convertedText,'⠌') );
				break;

				case 'u1005':
				case 'u1005 ':
				burmeseBrailleText += getAnswer(convertedText,'⠎');
				break;

				case 'u1006':
				case 'u1006 ':
				burmeseBrailleText += getAnswer(convertedText,'⠖');
				break;

				case 'u1007':
				case 'u1007 ':
				burmeseBrailleText += getAnswer(convertedText,'⠵');
				break;

				case 'u1008':
				case 'u1008 ':
				burmeseBrailleText += getAnswer(convertedText,'⠮');
				break;

				case 'u1009':
				case 'u1009 ':
				burmeseBrailleText += getAnswer(convertedText,'⠧');
				break;

				case 'u100a':
				case 'u100a ':
				burmeseBrailleText += getAnswer(convertedText,'⠷');
				break;

				case 'u100b':
				case 'u100b ':
				burmeseBrailleText += getAnswer(convertedText,'⠳');
				break;

				case 'u100c':
				case 'u100c ':
				burmeseBrailleText += getAnswer(convertedText,'⠻');
				break;

				case 'u100d':
				case 'u100d ':
				burmeseBrailleText += getAnswer(convertedText,'⠾');
				break;

				case 'u100e':
				case 'u100e ':
				burmeseBrailleText += getAnswer(convertedText,'⠿');
				break;

				case 'u100f':
				case 'u100f ':
				burmeseBrailleText += getAnswer(convertedText,'⠫');
				break;

				case 'u1010':
				case 'u1010 ':
				burmeseBrailleText += getAnswer(convertedText,'⠞');
				break;

				case 'u1011':
				case 'u1011 ':
				burmeseBrailleText += getAnswer(convertedText,'⠚');
				break;

				case 'u1012':
				case 'u1012 ':
				burmeseBrailleText += getAnswer(convertedText,'⠙');
				break;

				case 'u1013':
				case 'u1013 ':
				burmeseBrailleText += getAnswer(convertedText,'⠋');
				break;

				case 'u1014':
				case 'u1014 ':
				burmeseBrailleText += getAnswer(convertedText,'⠝');
				break;

				case 'u1015':
				case 'u1015 ':
				burmeseBrailleText += getAnswer(convertedText,'⠏');
				break;

				case 'u1016':
				case 'u1016 ':
				burmeseBrailleText += getAnswer(convertedText,'⠘');
				break;

				case 'u1017':
				case 'u1017 ':
				burmeseBrailleText += getAnswer(convertedText,'⠩');
				break;

				case 'u1018':
				case 'u1018 ':
				burmeseBrailleText += getAnswer(convertedText,'⠃');
				break;

				case 'u1019':
				case 'u1019 ':
				burmeseBrailleText += getAnswer(convertedText,'⠍');
				break;

				case 'u101a':
				case 'u101a ':
				burmeseBrailleText += getAnswer(convertedText,'⠽');
				break;

				case 'u101b':
				case 'u101b ':
				burmeseBrailleText += getAnswer(convertedText,'⠗');
				break;

				case 'u101c':
				case 'u101c ':
				burmeseBrailleText += getAnswer(convertedText,'⠇');
				break;

				case 'u101d':
				case 'u101d ':
				burmeseBrailleText += getAnswer(convertedText,'⠺');
				break;

				case 'u101e':
				case 'u101e ':
				burmeseBrailleText += getAnswer(convertedText,'⠹');
				break;

				case 'u101f':
				case 'u101f ':
				burmeseBrailleText += getAnswer(convertedText,'⠓');
				break;

				case 'u1020':
				case 'u1020 ':
				burmeseBrailleText += getAnswer(convertedText,'⠸');
				break;

				case 'u1021':
				case 'u1021 ':
				burmeseBrailleText += getAnswer(convertedText,'⠣');
				break;

				case 'u1023':
				case 'u1023 ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠊');
				break;

				case 'u1024':
				case 'u1024 ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠪');
				break;

				case 'u1025':
				case 'u1025 ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠑');
				break;

				case 'u1026':
				case 'u1026 ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠑⠪');
				break;

				case 'u1027':
				case 'u1027 ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠱');
				break;

				case 'u102b':
				case 'u102b ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠁');
				break;

				case 'u102c':
				case 'u102c ':
				burmeseBrailleText += getAnswer(convertedText,'⠁');
				break;

				case 'u102d':
				case 'u102d ':
				burmeseBrailleText += getAnswer(convertedText,'⠊');
				break;

				case 'u102e':
				case 'u102e ':
				burmeseBrailleText += getAnswer(convertedText,'⠪');
				break;

				case 'u102f':
				case 'u102f ':
				burmeseBrailleText += getAnswer(convertedText,'⠑');
				break;

				case 'u1030':
				case 'u1030 ':
				burmeseBrailleText += getAnswer(convertedText,'⠥');
				break;

				case 'u1032':
				case 'u1032 ':
				burmeseBrailleText += getAnswer(convertedText,'⠡');
				break;

				case 'u1036':
				case 'u1036 ':
				burmeseBrailleText += getAnswer(convertedText,'⠉');
				break;

				case 'u1037':
				case 'u1037 ':
				burmeseBrailleText +=  isset(convertedTextArray[key+1],convertedTextArray) && 
				checkForNormalAndSpace(convertedTextArray[key+1],'u103a') ? getAnswer(convertedText,'⠄') : getAnswer(convertedText,'⠂');
				break;

				case 'u1038':
				case 'u1038 ':
				burmeseBrailleText += 
				isset(convertedTextArray[key-1],convertedTextArray) &&
				isset(convertedTextArray[key-2],convertedTextArray) &&
				isset(convertedTextArray[key-3],convertedTextArray) &&
				convertedTextArray[key-1]=='u103a' &&
				convertedTextArray[key-2]=='u1004' &&
				convertedTextArray[key-3]=='u104e'
				? '' : getAnswer(convertedText,'⠆');
				break;

				case 'u1039':
				burmeseBrailleText += 
				isset(convertedTextArray[key-1],convertedTextArray) &&
				isset(convertedTextArray[key-2],convertedTextArray) &&
				convertedTextArray[key-1]=='u103a' &&
				convertedTextArray[key-2]=='u1004' ? '' :
				getAnswer(convertedText,'⠤');
				break;

				case 'u103a':
				case 'u103a ':
				burmeseBrailleText += 
				isset(convertedTextArray[key-1],convertedTextArray) &&
				isset(convertedTextArray[key+1],convertedTextArray) &&
				convertedTextArray[key-1]=='u1004' &&
				convertedTextArray[key+1]=='u1039' || 
				isset(convertedTextArray[key-1],convertedTextArray) &&
				isset(convertedTextArray[key-2],convertedTextArray) &&
				isset(convertedTextArray[key+1],convertedTextArray) && 
				convertedTextArray[key-1]=='u1004' &&
				convertedTextArray[key-2]=='u104e' &&
				convertedTextArray[key+1]=='u1038' ? '' :
				( (isset(convertedTextArray[key-1],convertedTextArray) && 
					convertedTextArray[key-1]=='u1037') ? getAnswer(convertedText,'⠂') : getAnswer(convertedText,'⠄') );
				break;

				case 'u103b':
				case 'u103b ':
				burmeseBrailleText += getAnswer(convertedText,'⠔');
				break;

				case 'u103c':
				case 'u103c ':
				burmeseBrailleText += getAnswer(convertedText,'⠢');
				break;

				case 'u103d':
				case 'u103d ':
				burmeseBrailleText += getAnswer(convertedText,'⠜');
				break;

				case 'u103e':
				case 'u103e ':
				burmeseBrailleText += getAnswer(convertedText,'⠭');
				break;

				case 'u103f':
				case 'u103f ':
				burmeseBrailleText += getAnswer(convertedText,'⠰⠹');
				break;

				case 'u1040':
				case 'u1040 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠚' : '⠼⠚' );
				break;

				case 'u1041':
				case 'u1041 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠁' :  '⠼⠁');
				break;

				case 'u1042':
				case 'u1042 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠃' : '⠼⠃' ); 
				break;

				case 'u1043':
				case 'u1043 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠉' : '⠼⠉');
				break;

				case 'u1044':
				case 'u1044 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠙' : '⠼⠙');
				break;

				case 'u1045':
				case 'u1045 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠑' : '⠼⠑');
				break;

				case 'u1046':
				case 'u1046 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠋' : '⠼⠋');
				break;

				case 'u1047':
				case 'u1047 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠛' : '⠼⠛');
				break;

				case 'u1048':
				case 'u1048 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠓' : '⠼⠓');
				break;

				case 'u1049':
				case 'u1049 ':
				burmeseBrailleText += getAnswer(
					convertedText,
					isset(convertedTextArray[key-1],convertedTextArray) &&
					checkNumbers(convertedTextArray[key-1]) ? '⠊' : '⠼⠊');
				break;

				case 'u104a':
				case 'u104a ':
				burmeseBrailleText += getAnswer(convertedText,'⠒');
				break;

				case 'u104b':
				case 'u104b ':
				burmeseBrailleText += getAnswer(convertedText,'⠲');
				break;

				case 'u104c':
				case 'u104c ':
				burmeseBrailleText += getAnswer(convertedText,'⠦');
				break;

				case 'u104d':
				case 'u104d ':
				burmeseBrailleText += getAnswer(convertedText,'⠯');
				break;

				case 'u104e':
				case 'u104e ':
				burmeseBrailleText += 
				isset(convertedTextArray[key+1],convertedTextArray) &&
				isset(convertedTextArray[key+2],convertedTextArray) &&
				isset(convertedTextArray[key+3],convertedTextArray) &&
				convertedTextArray[key+1]=='u1004' &&
				convertedTextArray[key+2]=='u103a' &&
				convertedTextArray[key+3]=='u1038' ?
				getAnswer(convertedText,'⠬') : '';
				break;

				case 'u104f':
				case 'u104f ':
				burmeseBrailleText += getAnswer(convertedText,'⠕');
				break;

				case 'u201c':
				case 'u201c ':
				burmeseBrailleText += getAnswer(convertedText,'⠦');
				break;

				case 'u201d':
				case 'u201d ':
				case '?':
				case '? ':
				burmeseBrailleText += getAnswer(convertedText,'⠴');
				break;

				case '[':
				case '[ ':
				burmeseBrailleText += getAnswer(convertedText,'⠠⠶');
				break;

				case ']':
				case '] ':
				burmeseBrailleText += getAnswer(convertedText,'⠶⠄');
				break;

				case '(':
				case '( ':
				case ')':
				case ') ':
				burmeseBrailleText += getAnswer(convertedText,'⠶');
				break;

				default:
				burmeseBrailleText += ' ';
				break;
			}

		}
	})

	return burmeseBrailleText;

}

checkForThWaiThoCaseOne=(convertedTextArray,convertedText,key) => (isset(convertedTextArray[key+1],convertedTextArray) &&
	checkForNormalAndSpace(convertedTextArray[key+1],'u1031')) ||
(checkForSingleThaWaiTho(convertedText) && 
	isset(convertedTextArray[key+1],convertedTextArray) && 
	checkForComplicatedThaWaiTho(convertedTextArray[key+1]) &&
	isset(convertedTextArray[key+2],convertedTextArray) &&
	(checkForNormalAndSpace(convertedTextArray[key+2],'u1031') ||
		checkForComplicatedThaWaiTho(convertedTextArray[key+2])) );

checkForThWaiThoCaseTwo=(convertedTextArray,convertedText,key) => (checkForNormalAndSpace(convertedText,'u1031') ||
	(checkForComplicatedThaWaiTho(convertedText) &&
		isset(convertedTextArray[key-1],convertedTextArray) &&
		checkForSingleThaWaiTho(convertedTextArray[key-1]) &&
		isset(convertedTextArray[key+1],convertedTextArray) &&
		(checkForNormalAndSpace(convertedTextArray[key+1],'u1031') ||checkForComplicatedThaWaiTho(convertedTextArray[key+1]))
		)
	) &&
isset(convertedTextArray[key-1],convertedTextArray);

isset = (arrayKey,array) => array.includes(arrayKey);

getAnswer = (convertedText,answer) => convertedText.includes(' ') ? answer + ' ' : answer;

convertCharacterToCodeArray = (alphabet) => alphabet.split("").map( char => "u" + addZeros( char.charCodeAt(0).toString(16) ) );

addZeros=(str) =>  ("0000" + str).slice(-4)

checkNumbers=(convertedText) =>
convertedText=='u1040' ||
convertedText=='u1041' ||
convertedText=='u1042' ||
convertedText=='u1043' ||
convertedText=='u1044' ||
convertedText=='u1045' ||
convertedText=='u1046' ||
convertedText=='u1047' ||
convertedText=='u1048' ||
convertedText=='u1049'

checkForSingleThaWaiTho=(convertedText)=>
convertedText!=='u103b' &&
convertedText!=='u103c' &&
convertedText!=='u103d' && 
convertedText!=='u103e'

checkForComplicatedThaWaiTho=(convertedText)=>
convertedText=='u103b' ||
convertedText=='u103c' ||
convertedText=='u103d' ||
convertedText=='u103e'

checkForNormalAndSpace=(convertedText,selectedText) => (convertedText==selectedText || convertedText==selectedText + ' ')