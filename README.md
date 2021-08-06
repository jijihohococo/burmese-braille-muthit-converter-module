# Burmese Braille Muthit Converter Node JS Library
<p>This library is aimed to convert Burmese Letter to Burmese Braille Muthit letters in PHP. It is aimed to convert the burmese letters which are from internet to burmese braille letters. This library is developed after reading <a href="https://jiist.aiat.or.th/assets/uploads/16195380940305LtWrJIIST-44-FinalVersion.pdf">this paper</a>.</p>
<p>Currently, this library is able to convert from unicode only.</p>

## Installing Library Via NPM

```javascript
npm install burmese-braille-muthit-converter-module
```

## Testing

```javascript
node test/index.test.js
```

## Usage
<p>You can convert Burmese Letters to Burmese Braille Muthit Letters</p>

```javascript
var burmeseBrailleConverter = require('burmese-braille-muthit-converter-module')
burmeseBrailleConverter("ပွင့် ဖူး ကြ ချိန် အ မှန် ၊ ဝ ဿန္တ လေ ချို ဖျန်း ။")
```
<p>It will show following Burmese Braille Muthit Letters</p>

```javascript
⠏⠜⠌⠄⠂ ⠘⠥⠆ ⠅⠢ ⠨⠔⠊⠝⠄ ⠣ ⠍⠭⠝⠄ ⠒ ⠺ ⠰⠹⠝⠤⠞ ⠱⠇ ⠨⠔⠊⠑ ⠘⠔⠝⠄⠆ ⠲
```

## License

This package is Open Source According to [MIT license](LICENSE.md)

## References

https://jiist.aiat.or.th/assets/uploads/16195380940305LtWrJIIST-44-FinalVersion.pdf

https://en.wikipedia.org/wiki/Burmese_Braille

https://www.pharmabraille.com/pharmaceutical-braille/the-braille-alphabet/