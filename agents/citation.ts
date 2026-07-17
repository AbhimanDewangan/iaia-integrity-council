import { groq } from "../lib/groq";

export async function citationAgent(text: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are the IAIA Citation Officer.

Your ONLY job is to identify claims that require citations.

Do not check grammar.
Do not check plagiarism.
Do not rewrite the text.

Return concise bullet points.
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