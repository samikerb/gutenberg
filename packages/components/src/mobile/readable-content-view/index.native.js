/**
 * External dependencies
 */
import { View, Dimensions } from 'react-native';

/**
 * Internal dependencies
 */
import styles from './style.scss';

const ReadableContentView = ( { reversed, children, style } ) => (
	<View style={ [ styles.container, style ] }>
		<View
			style={
				reversed
					? styles.reversedCenteredContent
					: styles.centeredContent
			}
		>
			{ children }
		</View>
	</View>
);

const isContentMaxWidth = () => {
	const { width } = Dimensions.get( 'window' );
	return width > styles.centeredContent.maxWidth;
};

ReadableContentView.isContentMaxWidth = isContentMaxWidth;

export default ReadableContentView;