export const runtime = 'nodejs';

import { systemPrompt } from '@/lib/grunge';

function buildLocalResponse(mode, idea) {
  const cleanIdea = idea || 'gritty, angry, lonely, live-feel rock';

  if (mode === 'lyrics') {
    return `Title: Static in the Hallway\n\nVerse 1\nThe fluorescent buzz keeps chewing on my name\nI drag my shoes through the same old stain\nThe coffee tastes like rust and cheap regret\nI keep the panic in a glass jar by the sink\n\nChorus\nStatic in the hallway\nMy hands are shaking, my teeth are steel\nStatic in the hallway\nI keep trying to feel\n\nTheme: ${cleanIdea}`;
  }

  if (mode === 'guitar') {
    return `Key: E minor\nTempo: 128 BPM\n\nRiff:\nEm - C - G - D\nPalm-muted verse rhythm, low-string power chords\nLet the top string ring in the chorus\nAdd a dirty lead slide up the B-string at the end of each phrase\n\nTone note: use gain mid-high, slight feedback at the end of phrases.\n\nIdea: ${cleanIdea}`;
  }

  if (mode === 'drums') {
    return `Tempo: 128 BPM\nStyle: punk-grunge groove\n\nVerse pattern:\nKick: 1, 3\nSnare: 2, 4\nHats: closed 8ths with occasional open on phrase ends\nTom fill before chorus: 8th-note toms up to floor tom\n\nChorus pattern:\nAdd more kick accents and a louder snare\nCrash on 4, then left-hand tight fill into bar 1\n\nIdea: ${cleanIdea}`;
  }

  return `Title: Broken Signal\nTempo: 128 BPM\nKey: E minor\n\nVerse 1\nThe city leaks through my window frame\nI hold my breath like it could save me\nThe room hums, the walls close in\nI keep my teeth clenched and call it normal\n\nChorus\nBroken signal, static heart\nI keep running from the same old start\nNo clean exit, no clean end\nJust a dirty echo and a tired friend\n\nGuitar: Em - C - G - D. Palm-muted verses, dirty lead chorus.\nDrums: tight snare, open hats, tom fill into chorus.\n\nTheme: ${cleanIdea}`;
}

export async function POST(req) {
  const { mode = 'full', idea = 'gritty, emotional, live-feel grunge' } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json({ result: buildLocalResponse(mode, idea) }, { status: 200 });
  }

  try {
    const openAiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.9,
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: `Generate a ${mode} grunge song response based on this idea: ${idea}. Make it original, rough, emotionally honest, and structured for real songwriting.`,
          },
        ],
      }),
    });

    const data = await openAiResponse.json();
    const content = data.choices?.[0]?.message?.content || buildLocalResponse(mode, idea);

    return Response.json({ result: content }, { status: 200 });
  } catch (error) {
    return Response.json({ result: buildLocalResponse(mode, idea), warning: 'Using local fallback generation.' }, { status: 200 });
  }
}
