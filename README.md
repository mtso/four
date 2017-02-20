# word

An app to help learn the definition of four-letter words.

## WordsAPI curls

https://market.mashape.com/wordsapi/wordsapi

https://wordsapiv1.p.mashape.com/words/example/definitions

curl --get --include 'https://wordsapiv1.p.mashape.com/words/word/definition' \
  -H 'X-Mashape-Key: [API_KEY]' \
  -H 'Accept: application/json'

## json data sketch

```json
{
  "words": [
    "aahs",
    "aals"
  ],
  "definitions": {
    "aahs": [
      "Used to express pleasure, satisfaction, surprise, or great joy."
    ],
    "aals": [
      "The Indian mulberry or noni (Morinda citrifolia, Morinda tinctoria), a shrub found in Southeast Asia, the East Indies and the Pacific islands as far as French Polynesia."
    ]
  }
}
```