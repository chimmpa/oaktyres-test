import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import oakMarkdown from '../content/oaktyres-homepage.md?raw';

function App() {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{oakMarkdown}</ReactMarkdown>
      </article>
    </main>
  );
}

export default App;