export async function GET() {
  return Response.json({
    message: 'GrungeBot preset API',
    presets: [
      { name: 'drum-bus', path: '/api/preset?name=drum-bus' },
      { name: 'guitar-bus', path: '/api/preset?name=guitar-bus' },
    ],
  });
}

export async function POST(req) {
  const { name } = await req.json();
  const presets = {
    'drum-bus': {
      name: 'drum-bus',
      description: 'Punchy grunge drum bus with room tone and subtle tape warmth.',
      chain: [
        { type: 'eq', note: 'Cut 250Hz slightly for clarity' },
        { type: 'compressor', ratio: 4, threshold: '-12dB' },
        { type: 'saturation', drive: 18, mix: 0.35 },
        { type: 'reverb', send: 0.18, decay: '1.2s' },
      ],
    },
    'guitar-bus': {
      name: 'guitar-bus',
      description: 'Dirty guitar stack with grit, midrange push, and clipped transient flavor.',
      chain: [
        { type: 'gain', amount: 3 },
        { type: 'eq', note: 'Boost 2kHz for bite, cut 350Hz if muddy' },
        { type: 'distortion', drive: 25, mix: 0.42 },
        { type: 'cab', tone: 'smoky' },
      ],
    },
  };

  return Response.json(presets[name] || presets['drum-bus']);
}
