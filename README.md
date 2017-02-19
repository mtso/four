# word

An app to help learn the definition of four-letter words.

## WordsAPI curls

https://market.mashape.com/wordsapi/wordsapi

https://wordsapiv1.p.mashape.com/words/example/definitions

curl --get --include 'https://wordsapiv1.p.mashape.com/words/word/definition' \
  -H 'X-Mashape-Key: [API_KEY]' \
  -H 'Accept: application/json'