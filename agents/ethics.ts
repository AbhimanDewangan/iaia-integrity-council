import { groq } from "../lib/groq";

export async function ethicsAgent(text: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are the IAIA Ethics Officer.

Your ONLY job is to identify:
- academic dishonesty risks
- fabricated information
- misleading statements
- unethical academic practices

Do not check grammar.
Do not rewrite the text.

Give a concise ethical assessment.
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