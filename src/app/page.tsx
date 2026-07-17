"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    setReport(null);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    if (data.error) {
      setReport({
        finalReport: data.error,
      });
    } else {
      setReport(data);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-blue-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            IAIA Integrity Council
          </h1>

          <p className="mt-3 text-gray-400 text-lg">
            A multi-agent AI system for academic integrity evaluation.
          </p>
        </motion.div>


        {/* Input */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-zinc-900 to-blue-950 border border-zinc-800 rounded-2xl p-6 shadow-xl"
        >

          <textarea
            className="w-full h-60 bg-black/40 rounded-xl p-5 text-white outline-none resize-none border border-zinc-700"
            placeholder="Paste your academic writing here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={analyze}
            disabled={loading}
            className="mt-5 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition font-semibold disabled:opacity-50"
          >
            {loading ? "Council Reviewing..." : "Analyze Integrity"}
          </button>

        </motion.div>


        {/* Loading Cards */}
        {loading && (
          <div className="grid md:grid-cols-5 gap-4 mt-8">

            {[
              "📚 Citation Officer",
              "🔍 Evidence Officer",
              "📝 Plagiarism Officer",
              "⚖️ Ethics Officer",
              "👑 Chief Integrity Officer",
            ].map((officer, index) => (

              <motion.div
                key={officer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                }}
                className="bg-gradient-to-br from-zinc-900 to-purple-950 border border-zinc-800 rounded-xl p-4"
              >

                <h3 className="font-semibold">
                  {officer}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  Reviewing...
                </p>

              </motion.div>

            ))}

          </div>
        )}



        {/* Reports */}
        {report && (

          <div className="mt-10 space-y-8">

            <div className="grid md:grid-cols-2 gap-6">

              <OfficerCard
                title="📚 Citation Officer"
                text={report.citation}
              />

              <OfficerCard
                title="🔍 Evidence Officer"
                text={report.evidence}
              />

              <OfficerCard
                title="📝 Plagiarism Officer"
                text={report.plagiarism}
              />

              <OfficerCard
                title="⚖️ Ethics Officer"
                text={report.ethics}
              />

            </div>


            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-blue-950 via-zinc-900 to-purple-950 border border-blue-500 rounded-2xl p-8 shadow-2xl"
            >

              <h2 className="text-3xl font-bold mb-6">
                👑 Chief Integrity Officer
              </h2>

              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>
                  {report.finalReport}
                </ReactMarkdown>
              </div>

            </motion.div>


          </div>

        )}

      </div>

    </main>
  );
}



function OfficerCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950 border border-zinc-800 rounded-2xl p-6 shadow-lg"
    >

      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>


      <div className="text-gray-300 prose prose-invert max-w-none">

        <ReactMarkdown>
          {text || "No response generated."}
        </ReactMarkdown>

      </div>


    </motion.div>

  );
}