import sanitizeHtml from 'sanitize-html';

class TchapUtils {
	static sanitize(str) {
		return sanitizeHtml(str, {
			allowedTags: [
				"a", "br"
			],
			allowedAttributes: {
				a: [ 'href' ],
			},
			selfClosing: [ 'br' ],
			allowedSchemes: [ 'https', 'mailto' ],
			allowedSchemesAppliedToAttributes: [ 'href' ],
			exclusiveFilter: function(str) {
				if (str.tag === 'a') {
					if (str.attribs.href &&
						!(str.attribs.href.startsWith("https://www.tchap.gouv.fr/") || str.attribs.href.startsWith("mailto:"))) {
						return true;
					}
				}
				return false;
			}
		});
	}
}

export default TchapUtils;
