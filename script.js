<!DOCTYPE html>
<html lang="ena">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Palindrome Checker by Danny Brown</title>
  </head>
  <body>
    <main>
      <h1>Palindrome Checker</h1>
      <h2>Created by Danny Brown</h2>

      <div class="input-container">
        <div class="inputs">
          <input type="text" class="text-input" id="text-input" placeholder="Will it palindrome?" />
          <button id="check-btn">Check</button>
        </div>
        <p class="caveat">Note: Punctuation, symbols, and spaces will be ignored.</p>
      </div>

      <div class="result-container hide" id="result-container">
        <p id="result-statement">Sample text goes here</p>
        
      </div>

      <div class="definition-container" id="definition-container">
        <h4><a class="definition"  href="https://www.merriam-webster.com/dictionary/palindrome#:~:text=pal%C2%B7%E2%80%8Bin%C2%B7%E2%80%8Bdrome,the%20same%20backward%20or%20forward">palindrome</a> <span class="noun">noun</span></h4>
        <h5>pal·​in·​drome ˈpa-lən-ˌdrōm</h5>
        <p class="definition-paragraph">: a word, verse, or sentence (such as "Able was I ere I saw Elba") or a number (such as 1881) that reads the same backward or forward</p>
      </div>

      <div class="artist">
        <p>Photo credit: <a class="artist-link" href="https://unsplash.com/@bradleycdunn" >Bradley Dunn</a></p>
      </div>

    </main>

    <script src="./script.js"></script>
  </body>
</html>
