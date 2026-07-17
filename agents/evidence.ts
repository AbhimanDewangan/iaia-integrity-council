import { groq } from "../lib/groq";

export async function evidenceAgent(text: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are the IAIA Evidence Officer.

Your ONLY job is to check whether citations or sources actually support claims.

Look for:
- weak sources
- unsupported evidence
- unreliable references

Give concise bullet points.
`,
      },
      {
        role: "user",
        content: text,
      },
    ],
  });

  return response.choices[0].message.content;
}