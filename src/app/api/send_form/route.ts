import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const nome = body?.nome || '';
  const email = body?.email || '';
  const mensagem = body?.mensagem || '';
  const to = process.env.CONTACT_TO || 'team@octohub.site';
  if (!nome || !email || !mensagem) {
    return NextResponse.json({ success: false, message: 'Preencha todos os campos.' }, { status: 400 });
  }
  return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso.', to });
}