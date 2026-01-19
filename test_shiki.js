import { createHighlighter } from 'shiki';

try {
  const highlighter = await createHighlighter({
    themes: ['vesper'],
    langs: ['javascript']
  });
  console.log('Vesper theme loaded successfully');
  const html = highlighter.codeToHtml('console.log("hello")', { lang: 'javascript', theme: 'vesper' });
  console.log('Highlighting worked');
} catch (e) {
  console.error('Error loading vesper:', e);
}
