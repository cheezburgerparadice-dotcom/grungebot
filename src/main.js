<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="GrungeBot, a static grunge songwriting assistant for lyrics, guitar riffs, and drum patterns."
    />
    <title>GrungeBot</title>
    <link rel="stylesheet" href="./src/styles.css" />
  </head>
  <body>
    <main class="page-shell">
      <header class="hero card">
        <p class="eyebrow">grunge songwriting assistant</p>
        <h1>GrungeBot</h1>
        <p class="subhead">
          Write original lyrics, guitar riffs, and drum parts with a rough, live, early-90s grit.
        </p>
      </header>

      <section class="generator card">
        <form id="generator-form">
          <div class="mode-grid">
            <button type="button" class="mode-btn active" data-mode="full">full song</button>
            <button type="button" class="mode-btn" data-mode="lyrics">lyrics</button>
            <button type="button" class="mode-btn" data-mode="guitar">guitar</button>
            <button type="button" class="mode-btn" data-mode="drums">drums</button>
          </div>

          <label for="idea">Song idea</label>
          <textarea id="idea" rows="7" placeholder="Describe your song idea, mood, or theme..."></textarea>

          <button type="submit" class="submit-btn">Generate</button>
        </form>
      </section>

      <section class="result card">
        <h2>Output</h2>
        <pre id="result">Your generated lyrics, riff, or drums will appear here.</pre>
      </section>

      <nav class="links card">
        <a href="#examples">Examples</a>
        <a href="#about">About</a>
      </nav>

      <section id="examples" class="card examples">
        <h2>Examples</h2>

        <div class="example-block">
          <h3>Lyrics</h3>
          <pre>Verse 1
The fluorescent buzz keeps chewing on my name
I drag my shoes through the same old stain
The coffee tastes like rust and cheap regret
I keep the panic in a jar by the sink</pre>
        </div>

        <div class="example-block">
          <h3>Guitar</h3>
          <pre>Key: E minor
Riff: Em - C - G - D
Palm-muted rhythm, dirty chorus lead
Let the top string ring at the end of each phrase</pre>
        </div>

        <div class="example-block">
          <h3>Drums</h3>
          <pre>Tempo: 128 BPM
Verse: kick on 1 and 3, snare on 2 and 4
Chorus: louder snare, crash on 4, tom fill into bar 1</pre>
        </div>
      </section>

      <section id="about" class="card about">
        <h2>About</h2>
        <p>
          GrungeBot is a raw, original songwriting tool inspired by the emotional weight,
          distortion, and live feeling of classic grunge rock. It helps with lyrics, guitar
          riffs, drum parts, and rough arrangements without copying a specific artist or song.
        </p>
      </section>
    </main>

    <script type="module" src="./src/main.js"></script>
  </body>
</html>
