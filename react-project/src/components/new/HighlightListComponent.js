import React from 'react';

import BigHighlightComponent from './BigHighlightComponent';
import NewsComponent from './NewsComponent';

const HighlightListComponent = ({ newsHighlight, small }) => {
	console.log('small',small);
	// var xxx = newsHighlight[newsHighlight.length-1]
	// console.log(newsHighlight[newsHighlight.length-1])

	// console.log(news);

	return (
		<div className='containerNews'>
			<BigHighlightComponent
				id={newsHighlight.id}
				title={newsHighlight.title}
				detail={newsHighlight.detail}
				user={newsHighlight.user}
			/>
			<div className='smallHightlightNews'>
				{
					small.reverse().map((post, i) => {
						return (
							<NewsComponent
								key={i}
								id={post.id}
								title={post.title}
								detail={post.detail}
								user={post.user}
							/>
						)
					})
				}

			</div>
		</div>
	)
}

export default HighlightListComponent;
