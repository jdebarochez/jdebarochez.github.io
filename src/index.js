import { readFile, writeFile, readdir, mkdir, cp } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseFrontmatter(md) {
  md = md.replace(/\r\n/g, '\n')
  const match = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: md }
  const frontmatter = {}
  for (const line of match[1].split('\n')) {
    const sep = line.indexOf(':')
    if (sep === -1) continue
    frontmatter[line.slice(0, sep).trim()] = line.slice(sep + 1).trim()
  }
  return { data: frontmatter, content: match[2] }
}

function renderPage(header, menu, content, styles) {
  return `<!DOCTYPE html><html lang="en"><head>${header}<style>${styles}</style></head><body>${menu}<main>${content}</main></body></html>`
}

async function main() {
  const header = await readFile(path.join(__dirname, '_header.html'), 'utf-8')
  const menu = await readFile(path.join(__dirname, '_menu.html'), 'utf-8')
  const styles = await readFile(path.join(__dirname, 'style.css'), 'utf-8')

  await mkdir('./dist/articles', { recursive: true })

  const articlesDir = path.join(__dirname, 'articles')
  const files = await readdir(articlesDir)
  const articles = []

  for (const file of files) {
    if (!file.endsWith('.md')) continue
    const raw = await readFile(path.join(articlesDir, file), 'utf-8')
    const { data, content } = parseFrontmatter(raw)
    const bodyHtml = await marked.parse(content)

    const title = data.title || 'Article'
    const description = data.description || ''

    const articleHeader = header
      .replace("<title>Jean's blog</title>", `<title>${title} - Jean's blog</title>`)
      .replace('content="Jean\'s blog"', `content="${title}"`)
      .replace(
        'content="Ranting about software development, architecture and the likes."',
        `content="${description}"`,
      )
      .replace(
        /property="og:description"[^>]*\/>/,
        `property="og:description" content="${description}" />`,
      )

    const slug = file.replace(/^\d+\./, '').replace('.md', '')
    const html = renderPage(articleHeader, menu, `<article>${bodyHtml}</article>`, styles)
    await writeFile(`./dist/articles/${slug}.html`, html, 'utf-8')

    articles.push({ slug, title, description, date: data.date })
  }

  articles.sort((a, b) => new Date(b.date) - new Date(a.date))

  const articleList = articles
    .map(
      a =>
        `<li class="article-list"><a href="/articles/${a.slug}.html">${a.title}</a>${
          a.date ? `<div class="date">${a.date}</div>` : ''
        }</li>`,
    )
    .join('\n')

  const homeContent = `<h1>Articles</h1><ul class="article-list">${articleList}</ul>`
  const homeHtml = renderPage(header, menu, homeContent, styles)
  await writeFile('./dist/index.html', homeHtml, 'utf-8')

  const notFoundContent = '<h1>Got lost?</h1><p>Tell me what you were looking for <a href="/contact">here</a>.</p>'
  const notFoundHtml = renderPage(header, menu, notFoundContent, styles)
  await writeFile('./dist/404.html', notFoundHtml, 'utf-8')

  await cp(path.join(__dirname, 'assets'), './dist/assets', { recursive: true })
  await writeFile('./dist/.nojekyll', '')
}

void main()
