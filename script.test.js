const script = require('./script');

test('decodes the first line of morse code', ()=>{
  expect(script.morseDecode("... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .")).toBe("SAMUELMORSEINVENTEDMORSECODE");
});

test('decodes the second line of morse code', ()=>{
  expect(script.morseDecode("-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-")).toBe("YOURINSTRUCTORSLOVEYOU");
});

test('decodes the third line of morse code', ()=>{
  expect(script.morseDecode("- .... .. ...    .. ...    - .... .    .- -. ... .-- . .-.    - ---    - .... .    ..- .-.. - .. -- .- - .    --.- ..- . ... - .. --- -.    --- ..-.    .-.. .. ..-. .    - .... .    ..- -. .. ...- . .-. ... .    .- -. -..    . ...- . .-. -.-- - .... .. -. --.    ....")).toBe("THISISTHEANSWERTOTHEULTIMATEQUESTIONOFLIFETHEUNIVERSEANDEVERYTHINGH");
});

test('encodes a string using the Caesar Cipher with a right shift of 7', ()=>{
  expect(script.caesarEncode("QUALITY QUANTITY CORPORATEY CHOCOLATEY RASCALY FISCALIES", 7)).toBe("XBHSPAF XBHUAPAF JVYWVYHALF JOVJVSHALF YHZJHSF MPZJHSPLZ");
});

test('encodes a string using the Caesar Cipher with a left shift of 15', ()=>{
  expect(script.caesarEncode("QUALITY QUANTITY CORPORATEY CHOCOLATEY RASCALY FISCALIES", -15)).toBe("BFLWTEJ BFLYETEJ NZCAZCLEPJ NSZNZWLEPJ CLDNLWJ QTDNLWTPD");
});