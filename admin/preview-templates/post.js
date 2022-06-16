import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
	render() {
		const entry = this.props.entry;

		return html`
			<main>
				<article>
					<div>
						<img
							src="${entry.getIn(["data", "image"], null)}"
							alt="${entry.getIn(["data", "alt"], null)}"
						/>
					</div>
					<h1>${entry.getIn(["data", "title"], null)}</h1>
					${this.props.widgetFor("body")}
				</article>
			</main>
		`;
	},
});

export default Post;
