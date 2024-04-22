const article = document.querySelector('article')

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
	const text = article.textContent
	const wordMatchRegExp = /[^\s]+/g // Regular expression
	const words = text.matchAll(wordMatchRegExp)
	// matchAll returns an iterator, convert to array to get word count
	const wordCount = [...words].length
	const readingTime = Math.round(wordCount / 200)
	const badge = document.createElement('p')

	badge.style.backgroundColor = '#ffff0082'
	badge.style.padding = '5px'
	badge.style.display = 'inline-block'
	badge.style.border = '3px solid #ff000099'
	badge.style.borderRadius = '7px'

	// Create sentence inside badge with readingTime var
	badge.textContent = `⏱️ ${readingTime} min read`

	// Support for API reference docs
	const heading = article.querySelector('h1')
	if (heading) {
		heading.insertAdjacentElement('beforebegin', badge)
	}
}
