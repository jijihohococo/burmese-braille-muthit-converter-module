const burmeseBrailleConverter = require('../lib');

successMessage="Testing Burmese Braille Muthit Converter with syllable breaks is passed";

if(burmeseBrailleConverter("ပွင့် ဖူး ကြ ချိန် အ မှန် ၊ ဝ ဿန္တ လေ ချို ဖျန်း ။")=="⠏⠜⠌⠄⠂ ⠘⠥⠆ ⠅⠢ ⠨⠔⠊⠝⠄ ⠣ ⠍⠭⠝⠄ ⠒ ⠺ ⠰⠹⠝⠤⠞ ⠱⠇ ⠨⠔⠊⠑ ⠘⠔⠝⠄⠆ ⠲"){
	console.log(successMessage)
}
if(burmeseBrailleConverter("၁၉၂၀ ပြည့် ကျောင်း သား သ ပိတ် ကြီး တွင် ဦး ဖိုး ကျား သည် ထင် ရှား သော ခေါင်း ‌ဆောင် တစ် ဦး ဖြစ် သည် ။")=="⠼⠁⠊⠃⠚ ⠏⠢⠷⠄⠂ ⠱⠱⠔⠁⠌⠄⠆ ⠹⠁⠆ ⠹ ⠏⠊⠞⠄ ⠅⠢⠪⠆ ⠞⠜⠌⠄ ⠰⠑⠪⠆ ⠘⠊⠑⠆ ⠅⠔⠁⠆ ⠹⠷⠄ ⠚⠌⠄ ⠗⠭⠁⠆ ⠱⠹⠁ ⠱⠨⠰⠁⠌⠄⠆  ⠱⠖⠁⠌⠄ ⠞⠎⠄ ⠰⠑⠪⠆ ⠘⠢⠎⠄ ⠹⠷⠄ ⠲"){
	console.log(successMessage)
}