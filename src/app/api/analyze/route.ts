import { NextResponse } from "next/server";
import { citationAgent } from "../../../../agents/citation";
import { evidenceAgent } from "../../../../agents/evidence";
import { plagiarismAgent } from "../../../../agents/plagiarism";
import { ethicsAgent } from "../../../../agents/ethics";
import { chiefAgent } from "../../../../agents/chief";

export async function POST(req: Request) {
  const { text } = await req.json();

  const citation = await citationAgent(text);
  const evidence = await evidenceAgent(text);
  const plagiarism = await plagiarismAgent(text);
  const ethics = await ethicsAgent(text);

  const reports = `
Citation Officer:
${citation}

Evidence Officer:
${evidence}

Plagiarism Officer:
${plagiarism}

Ethics Officer:
${ethics}
`;

  const finalReport = await chiefAgent(reports);

  return NextResponse.json({
    citation,
    evidence,
    plagiarism,
    ethics,
    finalReport,
  });
}