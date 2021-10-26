import sanitizeHtml from 'sanitize-html';

const authorizedUrl = [
	"https://www.tchap.gouv.fr/",
	"https://tchap.beta.gouv.fr/",
	"https://matrix.org/",
	"https://osmose.numerique.gouv.fr/",
	"mailto:"
];

class TchapUtils {
	static startsWithArray(str) {
		return authorizedUrl.some(val => str.toLowerCase().startsWith(val.toLowerCase()));
	}

	static clipboardAnchorUrl(event) {
		const linkId = event.target.parentNode.id;
		const anchorUrl = `${window.location.href}#${linkId}`
		return navigator.clipboard.writeText(anchorUrl);
	}

	static sanitize(str) {
		return sanitizeHtml(str, {
			allowedTags: [
				"a", "br"
			],
			allowedAttributes: {
				a: [ 'href', 'target', 'rel' ]
			},
			selfClosing: [ 'br' ],
			allowedSchemes: [ 'https', 'mailto' ],
			allowedSchemesAppliedToAttributes: [ 'href' ],
			exclusiveFilter: (str) => {
				if (str.tag === 'a') {
					if (str.attribs.href &&
						!(TchapUtils.startsWithArray(str.attribs.href))) {
						return true;
					}
				}
				return false;
			}
		});
	}
}

export default TchapUtils;
