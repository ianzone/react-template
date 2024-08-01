import type { CSSProperties } from 'react';

export function MyComponent() {
	return (
		<div style={style}>
			<span>My Component</span>
		</div>
	);
}

const style: CSSProperties = {
	backgroundColor: 'grey',
};
